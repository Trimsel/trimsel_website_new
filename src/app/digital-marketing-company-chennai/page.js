import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import { blogData } from "@/data/blogData";

const services = [
  {
    title: "SEO Optimization",
    desc: "One of our digital marketing services India is to ensure your brand is visible to the right audience at the right time. Our SEO services focus on on-page and off-page optimization.",
    icon: "/digital-whatwedo1.svg",
  },
  {
    title: "Search Engine Marketing",
    desc: "We specialise in search engine marketing that helps brands get a wider reach through paid advertising. Our team identifies the appropriate keywords, audience demographics.",
    icon: "/digital-whatwedo2.svg",
  },
  {
    title: "Social Media Marketing",
    desc: "Social media has helped brands of all sizes reach their target audience and engage them through interactive content. At Minitzon, we provide customized social media services.",
    icon: "/digital-whatwedo3.svg",
  },
  {
    title: "Content Marketing",
    desc: "Content is essential to any business to help it communicate with its audience. As a digital marketing company in Chennai, we focus on creation, management and distribution of content.",
    icon: "/digital-whatwedo4.svg",
  },
  {
    title: "B2B Marketing",
    desc: "We at Minitzon help businesses adopt B2B marketing strategies that help them generate leads and expand their business and open opportunities for collaboration.",
    icon: "/digital-whatwedo5.svg",
  },
  {
    title: "B2C Marketing",
    desc: "We adopt several data-driven strategies to help brands reach the right customer and drive engagement. We help brands create interactive experiences.",
    icon: "/digital-whatwedo6.svg",
  },
  {
    title: "Pay Per Click",
    desc: "Every click matters. That’s why we convert clicks to sales by creating powerful adverts and optimizing campaigns to their maximum potential.",
    icon: "/digital-whatwedo7.svg",
  },
  {
    title: "Marketing Automation",
    desc: "We help brands set up end-to-end marketing automation services to streamline their marketing funnel and nurture leads.",
    icon: "/digital-whatwedo8.svg",
  },
  {
    title: "Initial Coin Offering Marketing",
    desc: "We are one of the few digital marketing companies that specialise in ICO marketing. We help cryptocurrency startups promote their ICO.",
    icon: "/digital-whatwedo9.svg",
  },
];

export default function Digitalmarketing() {
  return (
    <main>
      <Header />

      <section className="relative flex min-h-screen lg:min-h-[100dvh] items-center overflow-hidden bg-white">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 pt-24 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12 lg:pt-10 lg:pb-0">
          {/* LEFT CONTENT */}
          <div className="relative z-20 text-center text-black md:text-left">
            {/* BREADCRUMB */}
            <p className="text-md md:text-base font-medium text-black mt-2 mb-4">
              <Link
                href="/"
                className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
              >
                Home
              </Link>

              {" • "}

              <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                Digital Marketing Company
              </span>
            </p>

            <h1 className="mt-4 mb-8 text-4xl font-bold leading-tight sm:text-5xl">
              Top Digital Marketing Company <br />
              in Chennai, India
            </h1>

            <p className="mb-8 max-w-xl text-base sm:text-lg">
              An AI-driven logistics optimization platform that revolutionizes
              how businesses plan, execute, and manage transportation.Real-time
              insights enable smarter decisions, while end-to-end visibility
              ensures greater transparency across every stage of the supply
              chain.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
            >
              Get a Digital Strategy Session{" "}
              <Image
                src="/Home/right-arrow.svg"
                width={20}
                height={20}
                alt="RightArrow"
              />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:mt-2">
            {/* Main Image */}
            <Image
              src="/digitalmarketing1.svg"
              alt="Digital Marketing Illustration"
              width={340}
              height={340}
              className="relative z-10 h-auto w-[220px] sm:w-[280px] md:w-[340px]"
              priority
            />

            {/* Floating Image */}

            <Image
              src="/digitalmarketing2.svg"
              alt="Marketing Analytics"
              width={550}
              height={550}
              className="absolute left-1/6 top-1/6 z-10 h-auto w-[280px] -translate-x-1/2 -translate-y-1/2 animate-shake sm:w-[360px] md:w-[460px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#eef3f8] to-[#dde6ef] py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Digital Marketing Company in <br /> Chennai, India
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 font-medium">
              We, the best digital marketing company in India here to help you
              build your brand&#39;s online presence and provide you with great
              returns on your investment.
            </p>

            <p className="mt-3 max-w-3xl mx-auto text-gray-600 font-medium">
              The world of digital marketing changes rapidly. There are new
              technologies, algorithmic changes, and new features to adapt to
              ensure your brand continues to grow. As a business, you already
              have a lot on your plate; that is why a digital marketing agency
              can help you.
            </p>

            <p className="mt-3 max-w-3xl mx-auto text-gray-600 font-medium">
              At Minitzon, we foster a passionate team that loves building
              brands and staying updated with the latest trends. We pride
              ourselves on providing multi-channel digital marketing services in
              Chennai at affordable rates.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#1C9ACF] text-white font-medium px-6 py-3 rounded-md hover:bg-[#168bb9] transition"
              >
                Contact Us
                <Image
                  src="/Home/right-arrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="bg-[#cfdbe4] rounded-xl p-6 md:p-8 w-full max-w-md mx-auto shadow-sm">
            {/* Icon */}
            <div className="mb-4">
              <Image
                src="/growth-icon.svg" // place your icon in /public
                alt="growth"
                width={80}
                height={80}
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 sm:text-xl md:text-xl leading-snug">
              Know Why Your Website Is Not RANKING!!!
            </h3>

            {/* Inputs */}
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Your Website URL*"
                className="w-full px-4 py-2 rounded-md bg-white/80 text-sm outline-none font-medium"
              />

              <input
                type="email"
                placeholder="Email ID*"
                className="w-full px-4 py-2 rounded-md bg-white/80 text-sm outline-none font-medium"
              />

              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full px-4 py-2 rounded-md bg-white/80 text-sm outline-none font-medium"
              />
            </div>

            {/* Button */}
            <Link
              href="/contact-us"
              className="mt-5 w-full bg-[#1C9ACF] text-white py-3 rounded-md hover:bg-[#168bb9] transition flex items-center justify-center gap-2 font-medium"
            >
              Submit Now
              <Image
                src="/Home/right-arrow.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-12 rounded-3xl">
        {/* White Container with Cut */}
        <div className="max-w-8xl mx-auto bg-gradient-to-br from-[#cfe3f1] via-[#c9d7ea] to-[#bfc7e6] rounded-3xl p-8 md:p-12 clip-cut-container shadow-sm  clip-cut-section">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="container mx-auto px-4 sm:px-6">
              <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                WHAT WE DO
              </h3>

              <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Our Specialized Services
              </h2>

              <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
                We are a digital marketing agency, provide a plethora of
                services that help businesses grow their online presence.
              </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    clipPath:
                      "polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%)",
                    borderRadius: "16px",
                  }}
                >
                  {/* Icon */}
                  <div className="mb-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-md font-medium text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Link */}
                  {/* <div className="mt-3">
                    <Link
                      href="#"
                      className="text-[#1C9ACF] text-md font-medium inline-flex items-center gap-1">
                      Learn More →
                    </Link>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-12">
        <div>
          {/* Badge */}
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHY TRIMSEL
          </h3>

          {/* Heading */}
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Here&#39;s Why Minitzon Is The Best Digital Marketing Agency In
            Chennai, India
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Description */}
            <p className="mt-4 max-w-3xl mx-auto text-left text-black font-medium">
              Our team experts will help you to go online, where a business will
              need a mix of well-designed and well-developed website and the
              right marketing strategy as both help gain superior visibility
              there.
            </p>

            <p className="mt-4 max-w-3xl mx-auto text-left text-black font-medium">
              Minitzon have a thorough understanding of the digital market as it
              knows all those steps and activities that deliver online
              visibility benefits to websites or businesses.
            </p>

            <p className="mt-4 max-w-3xl mx-auto text-left text-black font-medium">
              Our team first analyze a business, its websites, its target
              audience and its goals and based on that, come up with a suitable
              marketing strategy.
            </p>

            <p className="mt-4 max-w-3xl mx-auto text-left text-black font-medium">
              We devise a plan to boost a website’s presence across channels on
              the internet.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center mb-4">
            {/* Title */}
            <div className="bg-[#23293d] text-white px-10 py-4 rounded-xl text-xl font-semibold mt-8">
              Our Marketing Strategy
            </div>

            {/* Vertical Line */}
            <div className="flex flex-col items-center mt-16 ml-0 md:ml-20">
              {/* ITEM 1 */}
              <div className="relative flex items-center justify-center h-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[6px] border-cyan-500 shadow-md z-20">
                  <Image
                    src="/icons/result.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="absolute right-full translate-x-0 md:translate-x-[6px] bg-cyan-500 text-white px-10 py-4 rounded-full shadow-lg max-w-[90vw] whitespace-normal break-words md:max-w-none md:whitespace-nowrap">
                  ROI Focused
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="relative flex items-center justify-center h-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[6px] border-indigo-500 shadow-md z-20">
                  <Image
                    src="/icons/result.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="absolute left-full translate-x-0 md:-translate-x-[6px] bg-indigo-500 text-white px-10 py-4 rounded-full shadow-lg max-w-[90vw] whitespace-normal break-words md:max-w-none md:whitespace-nowrap">
                  Data Driven
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="relative flex items-center justify-center h-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[6px] border-purple-500 shadow-md z-20">
                  <Image
                    src="/icons/result.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="absolute right-full translate-x-0 md:translate-x-[6px] bg-purple-500 text-white px-10 py-4 rounded-full shadow-lg max-w-[90vw] whitespace-normal break-words md:max-w-none md:whitespace-nowrap">
                  Creativity And Innovation
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="relative flex items-center justify-center h-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[6px] border-pink-500 shadow-md z-20">
                  <Image
                    src="/icons/result.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="absolute left-full translate-x-0 md:-translate-x-[6px] bg-pink-500 text-white px-10 py-4 rounded-full shadow-lg max-w-[90vw] whitespace-normal break-words md:max-w-none md:whitespace-nowrap">
                  360° Digital Marketing
                </div>
              </div>

              {/* ITEM 5 */}
              <div className="relative flex items-center justify-center h-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-[6px] border-red-500 shadow-md z-20">
                  <Image
                    src="/icons/result.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="absolute right-full translate-x-0 md:translate-x-[6px] bg-red-500 text-white px-10 py-4 rounded-full shadow-lg max-w-[90vw] whitespace-normal break-words md:max-w-none md:whitespace-nowrap">
                  Result Oriented
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto bg-[#dbe6ee] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#1f2a37] leading-snug">
              It's Time to Leverage Our Digital Marketing Services in Chennai to
              Fuel Your Business Growth.
            </h2>

            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-6 bg-[#1ea7d7] hover:bg-[#1696c4] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            >
              Find Out More
              <Image
                src="/Home/right-arrow.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-[#4b5563] text-md font-medium leading-relaxed space-y-4">
            <p>
              At some point in their business, every entrepreneur or CEO
              contemplates the need for a digital marketing agency in India.
              Here are some quick questions to help you decide if your business
              requires a digital marketing company in India to expand your
              business -
            </p>

            <ul className="space-y-3">
              {[
                "Are you unsure how to leverage technology and digital media for your business?",
                "Are you facing a marketing slowdown?",
                "Are you unable to manage leads and establish a proper sales funnel?",
                "Are you facing a decrease in business enquiries?",
                "Are you falling short of time to concentrate on marketing?",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Green Tick */}
                  <span className="mt-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              If you've answered YES to even one of the above questions, then
              you require a digital marketing agency in India. At Minitzon, we
              use various technologies and online marketing strategies to help
              your business achieve its marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl rounded-xl bg-[#E1C8FF] min-h-[160px] md:min-h-[180px] shadow-lg flex flex-col md:flex-row items-center justify-between">
            {/* LEFT CONTENT */}
            <div className="relative z-10 px-8 py-6 sm:px-12 md:py-8 w-full md:w-[60%] lg:w-1/2 text-left">
              <h3 className="text-xl font-semibold tracking-widest text-[#1C75BC] sm:text-2xl">
                GET IN TOUCH
              </h3>
              <h2 className="mt-2 text-2xl text-black font-bold leading-tight sm:text-3xl md:text-3xl lg:text-4xl">
                Not Sure How to Start with Digital Marketing? Let’s Build a
                Strategy That Works for You.
              </h2>
              <p className="mt-4 text-black font-medium text-sm sm:text-base max-w-lg">
                Whether you&apos;re a startup or scaling business,
                Trimsel&apos;s digital marketing experts in Chennai are ready to
                help. From SEO to social media and PPC, we’ll craft a custom
                strategy to grow your brand online.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-8 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#ff3b5b]"
              >
                Contact Us
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full md:w-[40%] lg:w-1/2 flex justify-center items-end self-stretch">
              <Image
                src="/getintouchdigitalmarketing.svg"
                alt="Contact illustration"
                width={350}
                height={350}
                className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 w-full h-[220px] sm:h-[260px] md:h-[340px] object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <Contactform />

      <OurBlog {...blogData.marketing} />

      <Faq />

      <Footer />
    </main>
  );
}
