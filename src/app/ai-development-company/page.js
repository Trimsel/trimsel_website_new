import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AiHero from "@/app/ai-development-company/AiHero";
import AiProcessAccordion from "@/app/ai-development-company/AiProcessAccordion";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import LatestInsights from "@/components/LatestInsights";
import { getFilteredPosts } from "@/lib/blog";
import Faq from "@/components/Faq";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonial from "@/components/testimonial";
import TechStackTabs from "@/components/TechStackTabs";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "AI Development Company in Chennai, India | ML, NLP & Generative AI | Trimsel",
  description:
    "Trimsel is an AI development company in Chennai building custom machine learning, NLP, computer vision, and generative AI systems. From POC to production. KarIOT: 12-18% NRW reduction. Free consultation.",
  alternates: {
    canonical: "https://www.trimsel.com/ai-development-company",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/ai-development-company",
    title: "AI Development Company in Chennai, India | ML, NLP & Generative AI | Trimsel",
    description:
      "Trimsel is an AI development company in Chennai building custom machine learning, NLP, computer vision, and generative AI systems. From POC to production. KarIOT: 12-18% NRW reduction. Free consultation.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "AI development services by Trimsel Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const services = [
  {
    icon: "/icons/AI-whatwedo1.svg",
    title: "Custom AI & Machine Learning Development",
    description:
      "We design and build machine learning models trained on your data — predicting customer behaviour, detecting anomalies, classifying documents, or automating complex decision-making. Every model is validated against real-world scenarios before deployment.",
  },
  {
    icon: "/icons/AI-whatwedo2.svg",
    title: "Generative AI Development",
    description:
      "From custom LLM integrations and AI copilots to content generation tools and intelligent document processing — we build generative AI products using OpenAI, Anthropic Claude, LangChain, and open-source models that deliver genuine productivity gains.",
  },
  {
    icon: "/icons/AI-whatwedo3.svg",
    title: "AI Agent Development",
    description:
      "We build autonomous AI agents that reason, plan, and execute multi-step tasks — from research agents that gather and synthesise information to workflow agents that handle approvals, scheduling, and data processing end-to-end.",
  },
  {
    icon: "/icons/AI-whatwedo4.svg",
    title: "Conversational AI & Chatbot Development",
    description:
      "AI-powered chatbots and virtual assistants that handle real conversations — customer support, internal helpdesks, lead qualification, and appointment booking — with NLU that actually works in production.",
  },
  {
    icon: "/icons/AI-whatwedo5.svg",
    title: "Computer Vision Solutions",
    description:
      "Vision AI systems for quality inspection, object detection, facial recognition, medical imaging, and retail analytics — trained on domain-specific datasets for accuracy that general-purpose models can't match.",
  },
  {
    icon: "/icons/AI-whatwedo6.svg",
    title: "AI-Powered Automation",
    description:
      "We identify repetitive processes — invoice processing, data extraction, approval workflows, report generation — and replace them with intelligent automation that cuts processing time and reduces errors.",
  },
  {
    icon: "/icons/AIML.svg",
    title: "Predictive Analytics & Data Intelligence",
    description:
      "Models that turn your historical data into forward-looking insight — demand forecasting, risk management, customer personalisation, and data-backed decisions that replace gut-feel with evidence.",
  },
];

const engagementTypes = [
  {
    icon: "/icons/AI-solution1.svg",
    title: "AI Consulting & Strategy",
    description:
      "Not sure where AI fits? We help you identify the highest-value opportunities, assess your data readiness, and build a practical roadmap — before a single line of code is written.",
  },
  {
    icon: "/icons/AI-solution2.svg",
    title: "AI Model Development & Training",
    description:
      "We build models from scratch or fine-tune existing ones using your data — creating systems that understand your domain, your language, and your edge cases.",
  },
  {
    icon: "/icons/AI-solution3.svg",
    title: "AI Integration Services",
    description:
      "We connect AI capabilities to your existing CRM, ERP, mobile apps, web platforms, and internal tools — no full system rebuild required.",
  },
  {
    icon: "/icons/AI-solution4.svg",
    title: "MLOps & AI Deployment",
    description:
      "We set up infrastructure to deploy, monitor, and maintain your AI models in production — model drift monitoring, automated retraining pipelines, and version control included.",
  },
];

const whyTrimsel = [
  {
    icon: "/icons/AI-solution1.svg",
    title: "Tailored AI Systems, Not Templates",
    description:
      "We build AI around your data, your workflows, and your users. Every model is trained on your domain — not generic patterns that happen to be close enough.",
  },
  {
    icon: "/icons/AI-solution2.svg",
    title: "Strong Technical Foundation",
    description:
      "Our AI engineers work across ML, deep learning, NLP, computer vision, and generative AI — using Python, TensorFlow, PyTorch, LangChain, and Hugging Face.",
  },
  {
    icon: "/icons/AI-solution3.svg",
    title: "Rapid Prototyping to Scalable Delivery",
    description:
      "We deliver working AI proofs of concept within 4–8 weeks. From there, we scale to production with the same team that built the prototype.",
  },
  {
    icon: "/icons/AI-solution4.svg",
    title: "AI Integration with Your Existing Tech Stack",
    description:
      "We integrate intelligent capabilities directly into your existing platforms — CRM, ERP, mobile apps, and web platforms — with minimal disruption to how your team works.",
  },
  {
    icon: "/icons/AI-solution5.svg",
    title: "Data Privacy and Compliance First",
    description:
      "Every AI system is designed with GDPR, HIPAA, and SOC 2 compliance from day one — from training data handling to production deployment.",
  },
  {
    icon: "/icons/AI-solution6.svg",
    title: "End-to-End AI Partnership",
    description:
      "From strategy and data assessment to model training, deployment, and ongoing improvement — we stay involved for the full lifecycle, not just the build.",
  },
];

const techTabs = [
  {
    name: "AI/ML FRAMEWORKS",
    tools: [
      { name: "Python", icon: "/icons/Tools/python.svg" },
      { name: "TensorFlow", icon: "/icons/Tools/tensorflow.svg" },
      { name: "PyTorch", icon: "/icons/Tools/pytorch.svg" },
      { name: "Hugging Face", icon: "/icons/Tools/huggingface.svg" },
      { name: "LangChain", icon: "/icons/Tools/langchain.svg" },
      { name: "OpenAI API", icon: "/icons/Tools/openai.svg" },
      { name: "Anthropic Claude", icon: "/icons/Tools/anthropic.svg" },
      { name: "FastAPI", icon: "/icons/Tools/fastapi.svg" },
    ],
  },
  {
    name: "DATA & INFRASTRUCTURE",
    tools: [
      { name: "AWS SageMaker", icon: "/icons/Tools/aws.svg" },
      { name: "Google Vertex AI", icon: "/icons/Tools/vertexai.svg" },
      { name: "Azure ML", icon: "/icons/Tools/azure.svg" },
      { name: "Snowflake", icon: "/icons/Tools/snowflake.svg" },
      { name: "PostgreSQL", icon: "/icons/Tools/postgresql.svg" },
      { name: "MongoDB", icon: "/icons/Tools/mongodb.svg" },
    ],
  },
  {
    name: "DEPLOYMENT & MONITORING",
    tools: [
      { name: "Docker", icon: "/icons/Tools/docker.svg" },
      { name: "Kubernetes", icon: "/icons/Tools/kubernetes.svg" },
      { name: "GitHub Actions", icon: "/icons/Tools/githubactions.svg" },
      { name: "Prometheus", icon: "/icons/Tools/prometheus.svg" },
      { name: "Grafana", icon: "/icons/Tools/grafana.svg" },
    ],
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI/ML Development",
  provider: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://trimsel.com",
  },
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
  description:
    "Custom AI development company building machine learning, NLP, computer vision, and generative AI systems.",
  offers: {
    "@type": "AggregateOffer",
    offerCount: 7,
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom AI & Machine Learning Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Generative AI Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agent Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversational AI & Chatbot Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Computer Vision Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predictive Analytics & Data Intelligence",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.ai.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.trimsel.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Development",
      item: "https://www.trimsel.com/ai-development-company",
    },
  ],
};

export default function AI() {
  const posts = getFilteredPosts(["AI", "Machine Learning"], 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header transparent />
      <AiHero />

      {/* Proof Strip */}
      <section className="bg-[#0b0620] border-t border-white/10 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-xl font-bold text-[#8F24FA]">12–18%</p>
            <p className="text-sm font-medium mt-1 text-gray-300">NRW Reduction (KarIOT)</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#8F24FA]">4–8 Weeks</p>
            <p className="text-sm font-medium mt-1 text-gray-300">AI POC Delivery</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#8F24FA]">Python, TensorFlow</p>
            <p className="text-sm font-medium mt-1 text-gray-300">& LangChain</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#8F24FA]">FinTech, HealthTech</p>
            <p className="text-sm font-medium mt-1 text-gray-300">& IoT</p>
          </div>
        </div>
      </section>

      <Client />

      {/* What We Do — Service Overview */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHAT WE DO
          </h2>
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Custom AI Development Services — Designed Around Your Business, Not Around Our Tech Stack
          </h3>

          <div className="mt-8 space-y-5 max-w-4xl mx-auto text-gray-800 font-medium leading-relaxed">
            <p>
              AI has moved from experimental to essential — but most businesses still struggle to
              find a development partner who can take them from &ldquo;we think AI could help&rdquo;
              to a working system in production. The gap between a demo and a deployed product is
              where most AI projects fail.
            </p>
            <p>
              At Trimsel, we bridge that gap. Our AI development team works across the full spectrum
              — machine learning models trained on your data, generative AI products powered by
              LLMs, computer vision systems for inspection and detection, conversational AI for
              customer support and internal tools, and intelligent automation for the manual
              processes slowing your operations down. We use Python, TensorFlow, PyTorch, LangChain,
              OpenAI, and Hugging Face — choosing the right tools based on your problem, not our
              preferences.
            </p>
            <p>
              We&apos;ve delivered AI systems across FinTech, HealthTech, IoT, and SaaS —
              including the{" "}
              <Link
                href="/portfolio"
                className="text-[#1C75BC] underline hover:text-[#1568a0]"
              >
                KarIOT smart water management platform
              </Link>{" "}
              where our AI-driven forecasting models achieved 12–18% non-revenue water reduction
              in pilot deployments.
            </p>
          </div>
        </div>
      </section>

      {/* AI Development Services — 7 cards */}
      <ServiceCardsGrid
        eyebrow="OUR AI DEVELOPMENT SERVICES"
        heading="AI Development Services Built Around Real Business Problems"
        description="The businesses that get the most from AI are the ones that use it to fix something specific. Here's how we help."
        services={services}
        dark={true}
      />

      {/* Types of AI Engagement — 4 cards */}
      <FeaturesGrid
        eyebrow="TYPES OF AI ENGAGEMENT"
        heading="AI Services Across Every Layer of Your Business"
        description="From customer-facing products to back-end intelligence — we build AI that fits where your business needs it most."
        features={engagementTypes}
        columns={4}
        sectionClass="bg-gradient-to-br from-[#eef3f8] to-[#f7f4ef]"
      />

      {/* Why Trimsel — 6 cards */}
      <FeaturesGrid
        eyebrow="WHY TRIMSEL"
        heading="What Makes Us a Trusted AI Development Company in India"
        description="We don't build AI for the sake of it. Every system we develop is tied to a specific business outcome."
        features={whyTrimsel}
        columns={3}
      />

      {/* AI Development Process — 5 step accordion */}
      <AiProcessAccordion />

      {/* What We Deliver */}
      <section className="bg-[#dbe7f3] py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl text-gray-900">
            What a Well-Built AI System Actually Looks Like in Practice
          </h2>
          <p className="mt-6 text-gray-800 font-medium leading-relaxed">
            When we hand over an AI system, it works from day one. Your team gets a model that
            understands your data, connects to the tools you already use, and gives you clear,
            usable output — whether that&apos;s a prediction, a recommendation, an automated
            action, or a generated response. Behind the scenes, it&apos;s built to stay accurate
            over time, handle production-level volumes, and be updated without disrupting how
            your business runs.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1C75BC] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
          >
            Start Your AI Project
            <Image src="/Home/right-arrow.svg" width={16} height={16} alt="" />
          </Link>
        </div>
      </section>

      {/* Mid-page CTA */}
      <GetInTouchBanner
        eyebrow="GET IN TOUCH"
        heading="Have an AI Problem Worth Solving?"
        description="Tell us what you're trying to achieve. Whether you have a clear brief or just a business challenge — we'll give you an honest assessment of what AI can do. No commitment required."
        ctaText="Let's Talk About Your AI Project"
        ctaLink="/contact-us"
        image="/AI&ML-getintouch.svg"
        imageAlt="AI development contact"
        bgClass="bg-gradient-to-r from-[#0C0F14] via-black to-[#162D9C]"
        darkBg={true}
      />

      {/* Tools & Technologies */}
      <TechStackTabs
        eyebrow="TOOLS AND TECHNOLOGIES"
        heading="The AI Technology Stack We Build With"
        description="We choose tools based on what each project actually needs. Here's the stack our AI engineers use."
        tabs={techTabs}
      />

      {/* Case Studies */}
      <CaseStudyCarousel
        studies={[caseStudies.kariot, caseStudies.ezyhelpers, caseStudies.xaber]}
      />

      <Testimonial />

      <IndustriesWeServe
        description="We've built AI systems for businesses across healthcare, FinTech, IoT, logistics, retail, manufacturing, and SaaS — each with its own data landscape, compliance requirements, and domain-specific accuracy demands."
      />

      <Contactform
        eyebrow="GET IN TOUCH"
        heading="Got an AI Use Case? Let's Scope It Properly."
        subheading="Tell our AI development team what problem you're trying to solve — we'll assess your data readiness, identify the right model approach, and tell you honestly what's achievable."
        formTitle="Start Your AI Project"
        defaultService="AI / ML"
      />

      <LatestInsights posts={posts} />

      <Faq />
    </main>
  );
}
