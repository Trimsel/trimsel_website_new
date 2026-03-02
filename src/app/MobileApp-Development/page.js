import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Testimonial from "@/components/testimonial";


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
                                An AI-driven logistics optimization platform that revolutionizes how
                                businesses plan, execute, and manage transportation. Real-time
                                insights enable smarter decisions, while end-to-end visibility ensures
                                greater transparency across every stage of the supply chain.
                            </p>

                            <div>
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#29B375] to-[#2E70C3] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                                >
                                    Get a Mobile App Consultation
                                    <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
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

            {/* Getintouch */}
            <section className="bg-white py-20">
                <div className="flex justify-center px-4 sm:px-6">
                    <div
                        className="
                        relative
                        w-full
                        max-w-6xl
                        px-5 py-8 sm:px-8 sm:py-10
                        rounded-xl
                        bg-gradient-to-r from-[#FFF5EA] to-[#FFECDC]
                        shadow-md
                      "
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                            {/* LEFT CONTENT */}
                            <div>
                                <h3 className="text-sm font-semibold tracking-[0.22em] text-[#1C75BC] sm:text-base">
                                    GET IN TOUCH
                                </h3>

                                <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                                    Wanna Develop a Mobile Application? Contact us Now!
                                </h2>

                                <p className="mt-4 text-black font-medium">
                                    Reach out to us to identify business challenges and get efficient digital solutions.
                                </p>

                                <Link
                                    href="/contact"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <Image src="/icons/mailbox.svg" width={20} height={20} alt="RightArrow" />Get in Touch
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
    )
}
