import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, referralSource, recaptchaToken } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    // reCAPTCHA verification (only runs if token and secret key are present)
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });
      const recaptchaData = await recaptchaRes.json();
      if (!recaptchaData.success) {
        return Response.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
      }
    }

    // Send email via Nodemailer (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    const clean = (str = "") =>
      str.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&#39;", '"': "&quot;" })[c]);

    await transporter.sendMail({
      from: `"Trimsel Website" <${process.env.user}>`,
      to: "contact@trimsel.com",
      replyTo: email,
      subject: `New Lead: ${clean(name)} — ${clean(service) || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${clean(name)}</p>
        <p><strong>Email:</strong> ${clean(email)}</p>
        <p><strong>Phone:</strong> ${clean(phone) || "Not provided"}</p>
        <p><strong>Company:</strong> ${clean(company) || "Not provided"}</p>
        <p><strong>Service:</strong> ${clean(service) || "Not specified"}</p>
        <p><strong>How they found us:</strong> ${clean(referralSource) || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${clean(message)}</p>
      `,
    });

    // Slack notification (non-blocking — failure won't affect user)
    maybeNotifySlack({ name, email, phone, company, service, message, referralSource });

    // Zoho CRM lead creation (non-blocking)
    maybeCreateZohoLead({ name, email, phone, company, service, message, referralSource });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}

async function maybeNotifySlack({ name, email, phone, company, service, message, referralSource }) {
  try {
    const token = process.env.SLACK_BOT_TOKEN;
    const channel = process.env.SLACK_CHANNEL_ID;
    if (!token || !channel) return;

    const clean = (v) => (v ? String(v) : "—");

    await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel,
        text: [
          "*New Lead from trimsel.com*",
          `• *Name:* ${clean(name)}`,
          `• *Email:* ${clean(email)}`,
          `• *Phone:* ${clean(phone)}`,
          `• *Company:* ${clean(company)}`,
          service ? `• *Service:* ${clean(service)}` : null,
          referralSource ? `• *Source:* ${clean(referralSource)}` : null,
          `• *Message:* ${clean(message)}`,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
  } catch (err) {
    console.error("Slack notification failed:", err);
  }
}

async function maybeCreateZohoLead({ name, email, phone, company, service, message }) {
  try {
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    if (!refreshToken || !clientId || !clientSecret) return;

    const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.in";
    const apiBase = process.env.ZOHO_API_BASE || "https://www.zohoapis.in";

    const tokenRes = await fetch(
      `${accountsUrl}/oauth/v2/token?refresh_token=${encodeURIComponent(refreshToken)}&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&grant_type=refresh_token`,
      { method: "POST" }
    );
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    if (!accessToken) {
      console.error("Zoho token fetch failed:", tokenData);
      return;
    }

    const nameParts = (name || "").trim().split(" ").filter(Boolean);
    const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : "";
    const lastName = nameParts.length > 1 ? nameParts.slice(-1).join(" ") : name || "Website Lead";

    await fetch(`${apiBase}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: firstName,
            Last_Name: lastName,
            Email: email || undefined,
            Phone: phone || undefined,
            Company: company || "Website Lead",
            Lead_Source: "Website",
            Description: `Service: ${service || "General"}\nMessage: ${message || "—"}`,
          },
        ],
        trigger: ["approval", "workflow", "blueprint"],
      }),
    });
  } catch (err) {
    console.error("Zoho CRM lead creation failed:", err);
  }
}
