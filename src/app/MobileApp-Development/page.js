import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Testimonial from "@/components/testimonial";

const features = [
  {
    icon: "/icons/Reliable Quality.svg",
    title: "Reliable Quality",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/Cost Efficient.svg",
    title: "Cost Efficient",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/Build by experts.svg",
    title: "Build By Experts",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/Transparent process.svg",
    title: "Transparent Process",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/Customer Engagement.svg",
    title: "Customer Engagement",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/Quick time to Market.svg",
    title: "Quick Time To Market",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
];

const benefits = [
  {
    icon: "/icons/help-1.svg",
    text: "Validate your vision and provide a clear roadmap",
  },
  {
    icon: "/icons/help-2.svg",
    text: "Innovate solutions for complex problems",
  },
  {
    icon: "/icons/help-3.svg",
    text: "Deliver products at 10x speed and maximize efficiency",
  },
  {
    icon: "/icons/help-4.svg",
    text: "Adapt to the latest technologies and provide a future-proof product",
  },
  {
    icon: "/icons/help-5.svg",
    text: "Ensure product scalability, security, and modularity",
  },
  {
    icon: "/icons/help-6.svg",
    text: "World-class support during and after project completion",
  },
];

const services = [
  {
    icon: "/icons/mobile-service-1.svg",
    title: "Mobile Application Design",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-2.svg",
    title: "IOS Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-3.svg",
    title: "Android Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-4.svg",
    title: "Hybrid Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-5.svg",
    title: "Mobile Application Testing",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-6.svg",
    title: "24*7 Maintenance And Support",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
];

export default function MobileAppDevelopment() {
  return (
    <main>
      <Header />

      <section className="bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto mt-16 px-4 py-8 sm:py-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            {/* LEFT CONTENT */}
            <div className="relative z-20 text-center md:text-left">
              <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
                Mobile App Development
                <br />
                Company in Chennai
              </h1>

              <p className="mb-8 max-w-xl text-base sm:text-lg">
                An AI-driven logistics optimization platform that revolutionizes
                how businesses plan, execute, and manage transportation.
                Real-time insights enable smarter decisions, while end-to-end
                visibility ensures greater transparency across every stage of
                the supply chain.
              </p>

              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#29B375] to-[#2E70C3] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  Get a Mobile App Consultation
                  <Image
                    src="/Home/right-arrow.svg"
                    width={20}
                    height={20}
                    alt="RightArrow"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative flex justify-center">
              {/* Background Glow */}
              <div className="absolute h-[240px] w-[240px] rounded-full bg-blue-200 opacity-50 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]" />

              <div className="relative mt-4 flex h-[360px] w-full max-w-[420px] items-center justify-center sm:h-[460px] md:h-[520px]">
                {/* Main Mobile */}
                <Image
                  src="/Mobile1.svg"
                  alt="Main Mobile"
                  width={520}
                  height={520}
                  className="relative z-10 h-auto w-[260px] sm:w-[320px] md:w-[380px]"
                  priority
                />

                {/* Center UI */}
                <Image
                  src="/Mobile3.svg"
                  alt="UI Screen"
                  width={280}
                  height={320}
                  className="absolute left-1/2 top-1/2 z-20 h-auto w-[170px] -translate-x-1/2 -translate-y-[46%] zoom-animation sm:w-[210px] md:w-[250px]"
                  priority
                />

                {/* Overlay Graphic */}
                <Image
                  src="/Mobile2.svg"
                  alt="Overlay"
                  width={280}
                  height={340}
                  className="absolute z-30 h-auto w-[180px] sm:w-[220px] md:w-[260px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expand Your Digital Platform*/}
      <section className="bg-white py-16">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-center text-2xl md:text-4xl font-semibold">
              Expand Your Digital Platform
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
              See how Minitzone, the leading mobile app development company in
              India can help your business grow.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="px-3 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-lg p-4 hover:shadow-md hover:shadow-blue-100 transition-shadow duration-200 cursor-default">
                {/* Icon + Heading */}
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />

                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="mt-4 text-md text-gray-700 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5F8] px-10 py-16">
        <div className="mb-8">
          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            How we can help you?
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            With our amazing in-house talent, we deliver insightful solutions.
            You can see a seamless transition of your business to the digital
            era.
          </p>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side - Image ONLY */}
        <div className="flex-1 flex items-center justify-center -ml-16">
  <Image
    src="/Help-you.svg"
    alt="How we can help illustration"
    width={680}
    height={560}
    className="object-contain w-full max-w-xl"
  />
</div>

        {/* Right Side - Text + Benefit Cards */}
        <div className="flex-1 flex flex-col gap-4 ml-16">

          <div className="flex flex-col gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="shrink-0">
                  <Image
                    src={benefit.icon}
                    alt={benefit.text}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <p className="text-md text-gray-700 font-medium leading-snug">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      </section>


      <section className="bg-[#f0efeb] px-10 py-16">
      <div className="mb-8">
      <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                    WHAT WE DO
                </h3>
                <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                    We pride ourselves on being the one stop shop for all your needs
                </h2>

                <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
                    We envision, design, build and support solutions that transform and elevate your digital presence. Our expertise extends to clients worldwide enabling them to achieve global recognition and standard.
                </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Top: Icon */}
            <div>
              <div className="mb-5">
                <div className="relative w-14 h-14">
                  {/* Blue highlight background */}
                  <div className="absolute right-0 top-0 w-8 h-full rounded-md z-0" />
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="relative z-10 object-contain w-12 h-12"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-md text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom: Arrow Button */}
            <div className="mt-6">
              <Link
                href={service.href}
                className="inline-flex items-center justify-center"
              >
                <Image
                  src="/icons/mobile-stage-arrow.svg"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      </section>
      

      {/* Getintouch */}
      <section className="bg-white py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10 rounded-xl bg-gradient-to-r from-[#FFF5EA] to-[#FFECDC] shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                  GET IN TOUCH
                </h3>

                <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                  Wanna Develop a Mobile Application? Contact us Now!
                </h2>

                <p className="mt-4 text-black font-medium">
                  Reach out to us to identify business challenges and get
                  efficient digital solutions.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <Image
                    src="/icons/mailbox.svg"
                    width={20}
                    height={20}
                    alt="RightArrow"
                  />
                  Get in Touch
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center md:justify-end">
                <Image
                  src="/getintouchmobile.svg"
                  alt="Contact illustration"
                  width={700}
                  height={700}
                  className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <Clients />

      <Contactform />

      <OurBlog />

      <Faq />

      <Footer />
    </main>
  );
}
