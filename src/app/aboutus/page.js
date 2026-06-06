import Link from "next/link";
import Image from "next/image";
import Client from "@/components/Client";
import LatestInsights from "@/components/LatestInsights";
import { getFilteredPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Whatwedo from "@/components/Whatwedo";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";

export const metadata = {
  title: "About Trimsel | Software Development Team in Chennai",
  description:
    "Trimsel is a Chennai-based software development company founded in 2020. Meet our team of developers, designers, and engineers who've delivered 200+ projects across mobile, web, AI, and cloud.",
  alternates: {
    canonical: "https://www.trimsel.com/aboutus",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/aboutus",
    title: "About Trimsel | Software Development Team in Chennai",
    description:
      "Trimsel is a Chennai-based software development company founded in 2020. Meet our team of developers, designers, and engineers who've delivered 200+ projects across mobile, web, AI, and cloud.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel software development team in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const cards = [
  {
    title: "Future Proof Solutions",
    description:
      "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
    icon: "/icons/aboutus-process1.svg",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Appealing UI/UX",
    description:
      "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
    icon: "/icons/aboutus-process2.svg",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Agile Operation",
    description:
      "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
    icon: "/icons/aboutus-process3.svg",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Versatile Tech Stark",
    description:
      "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
    icon: "/icons/aboutus-process4.svg",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Responsive Design",
    description:
      "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
    icon: "/icons/aboutus-process5.svg",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
    icon: "/icons/aboutus-process6.svg",
    color: "from-cyan-400 to-blue-400",
  },
];

const milestones = [
  {
    title: "Project Kickoff",
    percent: "20% Payment",
    color: "bg-[#4B407D]",
    icon: "/icons/payment1.svg",
  },
  {
    title: "PRD and Design Sign Off",
    percent: "20% Payment",
    color: "bg-[#2A5C9A]",
    icon: "/icons/payment2.svg",
  },
  {
    title: "Release 1",
    percent: "20% Payment",
    color: "bg-[#09A69A]",
    icon: "/icons/payment3.svg",
  },
  {
    title: "Release 2",
    percent: "20% Payment",
    color: "bg-[#0ED47D]",
    icon: "/icons/payment4.svg",
  },
  {
    title: "Live",
    percent: "20% Payment",
    color: "bg-[#59E472]",
    icon: "/icons/payment5.svg",
  },
];

export default function aboutus() {
  const posts = getFilteredPosts([], 3);
  return (
    <>
      <Header />

      <section className="w-full relative">
        {/* TOP SECTION */}
        <div className="relative bg-gradient-to-r from-[#dbeafe] via-[#e0f2fe] to-[#fef3c7] px-6 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mr-8 mt-10 md:mt-12 md:px-12 lg:px-20">
            <div className="-ml-8">
              {/* BREADCRUMB */}
              <p className="text-md md:text-base font-medium text-black mt-2">
                <Link
                  href="/"
                  className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
                >
                  Home
                </Link>

                {" • "}

                <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                  About Us
                </span>
              </p>
              <h1 className="mt-2 text-5xl font-bold text-gray-800 leading-tight">
                Who are{" "}
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                  We
                </span>{" "}
                ?
              </h1>

              <p className="mt-4 text-gray-700 font-medium text-sm sm:text-base flex items-center whitespace-nowrap">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2 font-medium text-sm sm:text-base max-w-lg">
                  Mission
                </span>
                Critical Digital Solutions for Complete Business Transformations
              </p>
            </div>

            <div>
              <p className="text-gray-800 font-medium text-sm sm:text-base max-w-lg">
                Transform your business processes by migrating from legacy
                solutions to modern technology and developments that guarantee
                growth, optimization, and ROI for your business.
              </p>
            </div>
          </div>

          {/* Let's Talk BUTTON — straddles content/image boundary */}
          <div className="hidden sm:block absolute right-4 bottom-0 translate-y-1/2 z-10 w-44 h-44">
            <svg
              viewBox="0 0 160 160"
              className="w-full h-full animate-spin"
              style={{ animationDuration: "12s" }}
            >
              <defs>
                <path
                  id="circle"
                  d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text
                fontSize="11.5"
                fill="#9CA3AF"
                letterSpacing="2.5"
                fontFamily="sans-serif"
              >
                <textPath href="#circle">
                  . Discuss your project idea . Discuss your project idea
                </textPath>
              </text>
            </svg>

            {/* Center Link Button */}
            <Link
              href="/contact-us"
              className="absolute inset-0 m-auto w-16 h-16 bg-blue-500 hover:bg-blue-600 transition-colors rounded-full flex items-center justify-center text-white text-xs font-semibold text-center leading-tight shadow-md"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <Image
            src="/aboutus-Heroimage.svg"
            alt="team"
            width={80}
            height={80}
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-between px-10">
            <h1 className="text-[200px] font-bold text-white/20">M</h1>
            <h1 className="text-[200px] font-bold text-white/20">M</h1>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHO WE ARE
          </h2>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            We&apos;re Experts At Helping Businesses Reach Their True Potential
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Transform your business processes by migrating from legacy solutions
            to modern technology and developments that guarantee growth,
            optimization, and ROI for your business. Trimsel was founded at the
            right moment to meet the challenges faced by businesses and enable
            them to meet their digital transformation goals. Established in 2020
            in Chennai, Trimsel and its robust team of developers and
            consultants have provided Product Engineering and Digital
            Transformation services to Fortune 500 companies and start-up
            enterprises globally.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo1.svg"
                alt="Projects"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold">150+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Products launched
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo2.svg"
                alt="Projects"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold">$200M</div>
              <p className="mt-2 text-sm font-medium text-black">
                Raised by our clients
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo3.svg"
                alt="Projects"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold">1000+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Tech experts On-board
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo4.svg"
                alt="Projects"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <p className="mt-2 text-sm font-medium text-black">
                Bootstrapped
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start lg:ml-8">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-gray-800 leading-snug">
              Reinventing Business Environments with the Power of Technology.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">
              Trimsel delivers end-to-end digital solutions built around your business goals. With a customer-first approach, we combine deep technical expertise with strategic thinking to help you outpace the competition. Our engineers tackle complex challenges with scalable, future-ready solutions that create lasting value for your business.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">
              We don't just build software — we build partnerships. Our team invests time to understand your domain, your constraints, and your ambitions, then delivers solutions that scale with you over the long term.
            </p>

            {/* BUTTON */}
            <Link
              href="/contact-us"
              className="mt-8 inline-flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg items-center gap-2 shadow-md font-medium transition"
            >
              Talk To Our Expert
              <Image
                src="/Home/right-arrow.svg"
                width={20}
                height={20}
                alt="RightArrow"
              />
            </Link>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">
            {/* CARD 1 */}
            <div className="relative bg-blue-200 rounded-2xl p-6 shadow-sm">
              {/* Corner Cut */}
              <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut"></div>

              <div className="flex flex-col items-start gap-3">
                {/* ICON */}
                <Image
                  src="/icons/our-value.svg"
                  alt="values"
                  width={40}
                  height={40}
                />

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Values
                </h3>

                {/* CONTENT */}
                <p className="text-gray-600 font-medium leading-relaxed">
                  At Trimsel, we build with purpose — every solution is crafted with precision, grounded in proven technology, and aligned to your long-term goals. We believe great software should work flawlessly today and scale confidently tomorrow.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-blue-200 rounded-2xl p-6 shadow-sm">
              {/* Corner Cut */}
              <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut"></div>

              <div className="flex flex-col items-start gap-3">
                {/* ICON */}
                <Image
                  src="/icons/our-approach.svg"
                  alt="values"
                  width={40}
                  height={40}
                />

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Approach
                </h3>

                {/* CONTENT */}
                <p className="text-gray-600 font-medium leading-relaxed">
                  At Trimsel, we build with purpose — every solution is crafted with precision, grounded in proven technology, and aligned to your long-term goals. We believe great software should work flawlessly today and scale confidently tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#0a0a0af2] rounded-[40px] px-8 py-14 md:px-16 md:py-20 shadow-2xl">
          {/* HEADER */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-16 items-start">
            <h2 className="text-3xl md:text-[42px] font-bold text-white leading-[1.15]">
              What drives Us On To The Excellence Path
            </h2>

            <p className="text-white/80 text-md font-medium md:text-base leading-relaxed md:pt-3">
              Our expert teams rely on modern tools and technology that provides
              a wide range of opportunities to build products and solutions that
              are scalable.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#1c1d21] p-8 md:p-10 rounded-[28px] hover:-translate-y-2 transition duration-300"
              >
                {/* ICON */}
                <div className="mb-8 w-20 h-20 relative -ml-2">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#a1a1aa] text-md font-medium md:text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Whatwedo />

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="JOIN US"
        heading="Let's Build Something Meaningful"
        description="We're always looking for ambitious projects and great people. Whether you want to work with us or join us — reach out."
        ctaText="Talk to Our Experts"
        ctaLink="/contact-us"
        image="/aboutus-getintouch.svg"
        imageAlt="About Trimsel contact"
        bgClass="bg-[#DEFFCE]"
      />

      <LatestInsights posts={posts} />

      <Client />

      <Contactform
        eyebrow="WORK WITH US"
        heading="Let's Build Something Great Together"
        subheading="We're a team of 50+ engineers, designers, and strategists based in Chennai. Whether you need a dedicated team or a project partner, we'd love to hear about what you're building."
        formTitle="Start a Conversation"
        defaultService=""
      />

    </>
  );
}
