import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AiHero from "@/app/ai-development-company/AiHero";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import LatestInsights from "@/components/LatestInsights";
import { getFilteredPosts } from "@/lib/blog";
import Faq from "@/components/Faq";
import CaseStudiesSection from "@/components/relatedcasestudy";
import { caseStudies } from "@/data/caseStudies";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";

export const metadata = {
  title: "AI Development Company Chennai | Machine Learning Solutions | Trimsel",
  description:
    "Build intelligent AI/ML applications with Trimsel's AI development team in Chennai. NLP, computer vision, predictive analytics, LLM integrations, and generative AI for businesses in India and globally.",
  alternates: {
    canonical: "https://www.trimsel.com/ai-development-company",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/ai-development-company",
    title: "AI Development Company Chennai | Machine Learning Solutions | Trimsel",
    description:
      "Build intelligent AI/ML applications with Trimsel's AI development team in Chennai. NLP, computer vision, predictive analytics, LLM integrations, and generative AI for businesses in India and globally.",
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

const features = [
  {
    icon: "/icons/AI-solution1.svg",
    title: "Tailored AI Solutions, Not Templates",
    description:
      "Every business has unique challenges. We build AI solutions designed around your specific workflows, data, and goals — not off-the-shelf models retrofitted to your problem.",
  },
  {
    icon: "/icons/AI-solution2.svg",
    title: "Strong Technical Expertise",
    description:
      "Our team has hands-on experience with leading AI frameworks, cloud ML platforms, and production deployments — bringing deep engineering rigour to every AI project we take on.",
  },
  {
    icon: "/icons/AI-solution3.svg",
    title: "Seamless Integration with Your Existing Tech Stack",
    description:
      "We design AI components that slot cleanly into your existing infrastructure — whether that's a mobile app, a web platform, or a cloud-native backend — with minimal disruption.",
  },
  {
    icon: "/icons/AI-solution4.svg",
    title: "Rapid Prototyping to Scalable Delivery",
    description:
      "We move fast from concept to working prototype, giving you something real to evaluate quickly. From there, we scale it to production with the same team that built it.",
  },
  {
    icon: "/icons/AI-solution5.svg",
    title: "Data Privacy and Compliance First",
    description:
      "We build AI systems with data privacy baked in from day one — secure data pipelines, role-based access controls, and compliance-ready architecture for regulated industries.",
  },
  {
    icon: "/icons/AI-solution6.svg",
    title: "End-to-End Partnership",
    description:
      "From defining your AI strategy to deploying and monitoring models in production, we stay with you through every stage — acting as a long-term engineering partner, not a one-time vendor.",
  },
];

const services = [
  {
    icon: "/icons/AI-whatwedo1.svg",
    title: "Mobile Application Design",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo2.svg",
    title: "IOS Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo3.svg",
    title: "Android Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo4.svg",
    title: "Hybrid Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo5.svg",
    title: "Mobile Application Testing",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo6.svg",
    title: "24*7 Maintenance And Support",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI/ML Development",
  "provider": {
    "@type": "Organization",
    "name": "Trimsel",
    "url": "https://trimsel.com",
  },
  "areaServed": {
    "@type": "City",
    "name": "Chennai",
  },
  "description": "Build intelligent AI/ML applications with Trimsel's AI development team in Chennai. NLP, computer vision, predictive analytics, LLM integrations, and generative AI for businesses in India and globally.",
};

export default function AI() {
  const posts = getFilteredPosts(["AI", "Machine Learning"], 3);
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header transparent />
      <AiHero />

      <FeaturesGrid
        heading="Why Choose Trimsel for AI Development?"
        description="Take your business to the next level with the leading Software testing company in Chennai."
        features={features}
        columns={3}
      />

      <ServiceCardsGrid
        eyebrow="WHAT WE DO"
        heading="Customize testing for your product with end-to-end software testing services"
        description="Trimsel's AI development team delivers across the full spectrum of AI services — from data engineering and model training to production deployment — within clear timelines and defined milestones."
        services={services}
        bgColor="bg-[#f0efeb]"
      />

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto bg-[#efefef] rounded-2xl p-10 space-y-8">
          {/* Top Section */}
          <div className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Types Of Software <br /> Testing Services In India
            </h2>

            <p className="mt-4 text-center text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              By identifying issues and bugs in the early stages of product
              development, we eliminate costly reworks and poor software
              performance.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="relative bg-[#c9d6ea] rounded-xl p-6 overflow-hidden">
              {/* Big Number */}
              <span className="absolute right-6 top-4 text-5xl font-bold text-white/40">
                01
              </span>

              {/* Icon */}
              <div className="absolute -top-6 left-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/icons/automation.svg" // replace with your icon
                    alt="Automated Testing Services icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-10 text-lg font-semibold text-gray-800">
                Automated Testing Services
              </h3>

              <p className="mt-3 text-md font-medium text-gray-700 leading-relaxed">
                Trimsel uses modern AI frameworks and cloud ML platforms to build intelligent automation systems. Our engineers design pipelines that handle complex scenarios at scale — catching issues early and accelerating your release cycles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#ead7a4] rounded-xl p-6 overflow-hidden">
              {/* Big Number */}
              <span className="absolute right-6 top-4 text-5xl font-bold text-black/20">
                02
              </span>

              {/* Icon */}
              <div className="absolute -top-6 left-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/icons/manual.svg" // replace with your icon
                    alt="Manual Testing Services icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-10 text-lg font-semibold text-gray-800">
                Manual Testing Services
              </h3>

              <p className="mt-3 text-md font-medium text-gray-700 leading-relaxed">
                Trimsel’s hands-on QA services replicate real user behaviour to surface issues that automated tools miss. Our test plans are thorough, repeatable, and designed to ensure your software is reliable and error-free before it reaches your users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT CARD */}
          <div className="ml-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Testing Approach
              </h2>

              <p className="mt-4 text-gray-600">
                As A Software Testing Services Company, We Test Every Part Of
                The Application In Your Agile Environment.
              </p>

              {/* Points */}
              <div className="mt-6 space-y-5">
                {/* Item 1 */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/icons/simplicity.svg"
                    alt="simplicity"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-700">
                    <span className="text-md font-semibold">Simplicity- </span>
                    In alignment with your business needs translates to clear
                    testing goals.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/icons/reliability.svg"
                    alt="reliability"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Reliability- </span>
                    By improving the quality of your application, release on
                    release.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/icons/transparency.svg"
                    alt="transparency"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Transparency- </span>
                    Of your product health and testing efficacy by always
                    available insights.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-700 font-medium">
                Based on these parameters, we scope out:
              </p>

              {/* Boxes */}
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  "What experience is good for the users?",
                  "What devices or platforms need to test?",
                  "What load range and traffic are covered?",
                  "What are the business success factors?",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#d7ead9] text-sm px-4 py-3 rounded-lg flex items-center gap-2"
                  >
                    ✔ {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#dbe7f3] rounded-2xl p-8 shadow-sm h-full flex flex-col">
            <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              WHAT WE DELIVER
            </h3>

            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl">
              Testing In Continuous Integration And Continuous Delivery (CI/CD)
            </h2>

            <p className="mt-4 text-gray-700 text-md font-medium leading-relaxed">
              As a software testing services company, we test every part of the
              application in your Agile environment. Testing is conducted
              frequently while deployment steps are automated. The razor sharp
              focus is on the business requirements, code quality, and security.
              Through QA and testing services and adopting CI/CD, we ensure that
              the new features are quickly tested and shipped to the market.
            </p>
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="AI SOLUTIONS"
        heading="Add AI to Your Product"
        description="From custom ML models and LLM integrations to computer vision and predictive analytics — our AI engineers will help you identify the right solution and build it into your product."
        ctaText="Talk to Our Experts"
        ctaLink="/contact-us"
        image="/AI&ML-getintouch.svg"
        imageAlt="AI development contact"
        bgClass="bg-gradient-to-r from-[#0C0F14] via-black to-[#162D9C]"
        darkBg={true}
      />

      <CaseStudiesSection
        tag="RELATED CASE STUDIES"
        heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
        studies={[caseStudies.kariot, caseStudies.ezyhelpers]}
      />

      <Client />
      <Contactform
        eyebrow="BUILD WITH AI"
        heading="Ready to Add Intelligence to Your Product?"
        subheading="Share your AI vision with our ML engineers. From custom models and chatbots to computer vision and predictive analytics — we'll help you identify the right AI solution and build it."
        formTitle="Discuss Your AI Project"
        defaultService="AI / ML"
      />
      <LatestInsights posts={posts} />
      <Faq />
    </main>
  );
}
