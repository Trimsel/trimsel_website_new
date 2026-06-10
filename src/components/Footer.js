import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/mobile-app-development-chennai", label: "Mobile App Development" },
  { href: "/web-development-company-chennai", label: "Web Development" },
  { href: "/cloud-consulting-services", label: "Cloud Consulting" },
  { href: "/devops-consulting-services", label: "DevOps Consulting" },
  { href: "/digital-marketing-company-chennai", label: "Digital Marketing" },
  { href: "/ai-development-company", label: "AI/ML Development" },
];

const companyLinks = [
  { href: "/aboutus", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-16 bg-white text-black">
      {/* Top Section */}
      <div className="relative overflow-hidden bg-white px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* India Flag */}
          <div className="mb-10 flex items-center gap-3">
            <Image
              src="/IndiaFlag.svg"
              width={77}
              height={40}
              alt="India flag"
              className="h-10 w-auto"/>
            <p className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              INDIA
            </p>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="inline-flex items-center text-xl font-semibold">
                <Image
                  src="/location.svg"
                  alt="Location icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Chennai
              </h2>
              <div className="mt-2 text-base font-medium sm:text-lg">
                <a
                  href="https://maps.app.goo.gl/nX3ZD9gEBCxwdTPg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  No.21-B 5th Cross Street, South Phase Thiru VI <br />
                  KA Industrial Estate, Indira Nagar, Guindy, <br />
                  Chennai, Tamil Nadu - 600032.
                </a>
              </div>
            </div>

            <div>
              <h2 className="inline-flex items-center text-xl font-semibold">
                <Image
                  src="/location.svg"
                  alt="Location icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Tirunelveli
              </h2>
              <div className="mt-2 text-base font-medium sm:text-lg">
                <a
                  href="https://maps.app.goo.gl/9iQU8XDKzWtNaQ1T8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  1st Floor, Crystal Plaza State Bank, 138/2, <br />
                  NGO B Colony, New Colony, <br />
                  Tirunelveli, Tamil Nadu - 627007.
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute right-0 top-[53%] hidden -translate-y-1/2 lg:block">
            <Image
              src="/temple.svg"
              alt="Temple illustration"
              width={540}
              height={620}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Contact */}
          <div className="mt-8 space-y-4">
            <p className="text-lg font-semibold tracking-widest">CONTACT</p>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-3 font-medium">
                <Image src="/email.svg" alt="Mail" width={20} height={20} />
                <a
                  href="mailto:contact@trimsel.com"
                  className="transition-colors hover:text-[#1FA6A0]"
                >
                  contact@trimsel.com
                </a>
              </div>

              <div className="flex items-center gap-3 font-medium">
                <Image src="/Phone.svg" alt="Phone" width={20} height={20} />
                <a
                  href="tel:+917200841581"
                  className="transition-colors hover:text-[#1FA6A0]"
                >
                  +91 72008 41581
                </a>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Image */}
          <div className="flex justify-center lg:hidden mt-6 -mb-10 overflow-hidden">
            <Image
              src="/temple.svg"
              alt="Temple illustration"
              width={520}
              height={480}
              className="h-auto w-full max-w-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1.4fr_1.4fr]">
            {/* Logo + Socials */}
            <div className="relative space-y-3">
              <Image
                src="/trimsel-logo-white.svg"
                width={283}
                height={96}
                alt="Trimsel Softwares"
                className="h-16 w-auto"/>

              <p className="max-w-xs text-md font-medium text-white/100 leading-relaxed">
                Trimsel is a software development company in Chennai, building
                mobile apps, AI solutions, web platforms, cloud infrastructure,
                and DevOps pipelines for startups and enterprises since 2020.
              </p>

              {/* Follow Us */}
              <span className="block text-2xl font-semibold text-white">
                Follow us
              </span>

              <nav aria-label="Social media">
                <ul className="flex gap-4">
                  {[
                    {
                      href: "https://www.linkedin.com/company/trimsel/",
                      icon: "/linkedin.svg",
                      label: "LinkedIn",
                    },
                    {
                      href: "https://www.facebook.com/share/1CSq6QDAbp/",
                      icon: "/facebook.svg",
                      label: "Facebook",
                    },
                    {
                      href: "https://www.instagram.com/trimsel_softwares",
                      icon: "/instagram.svg",
                      label: "Instagram",
                    },
                    {
                      href: "https://in.pinterest.com/Trimsel_Softwares/",
                      icon: "/pinterest.svg",
                      label: "Pinterest",
                    },
                  ].map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={social.label}
                      >
                        <Image
                          src={social.icon}
                          width={30}
                          height={30}
                          alt={social.label}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div className="relative top-2">
              <p className="mb-4 text-lg font-semibold tracking-widest">
                SERVICES
              </p>
              <ul className="space-y-2 text-md font-medium text-white">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#58D3CD]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="relative top-2">
              <p className="mb-4 text-lg font-semibold tracking-widest">
                COMPANY
              </p>
              <ul className="space-y-3 text-md font-medium">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#58D3CD]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-14 border-t border-white/40 pt-4 text-center text-md font-medium text-white">
            © {currentYear} Trimsel Softwares. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
