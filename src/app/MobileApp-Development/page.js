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
                <div className="container mx-auto px-4 py-4 md:py-4 mt-12">
                    <div className="relative grid md:grid-cols-2 gap-12 items-center ml-20 
                    -translate-y-8 md:-translate-y-10">

                        {/* LEFT CONTENT */}
                        <div className="relative z-20 text-center md:text-left gap-4 mt-12">
                            <h1 className="text-5xl font-bold mb-10 leading-tight">
                                Mobile App Development
                                <br />
                                Company in Chennai
                            </h1>

                            <p className="max-w-xl mb-8 text-lg">
                                An AI-driven logistics optimization platform that revolutionizes how
                                businesses plan, execute, and manage transportation. Real-time
                                insights enable smarter decisions, while end-to-end visibility ensures
                                greater transparency across every stage of the supply chain.
                            </p>

                            <div>
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 px-6 py-4 rounded-md bg-gradient-to-r from-[#29B375] to-[#2E70C3] text-white font-medium hover:scale-105 transition-all shadow-lg"
                                >
                                    Get a Mobile App Consultation
                                    <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGES */}
                        <div className="relative flex justify-center">
                            {/* Background Glow */}
                            <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-200 blur-3xl opacity-50" />

                            <div className="relative w-[420px] h-[520px] mt-8 flex items-center justify-center">

                                {/* Main Mobile */}
                                <Image
                                    src="/mobile1.svg"
                                    alt="Main Mobile"
                                    width={520}
                                    height={520}
                                    className="relative z-10"
                                    priority
                                />

                                {/* Center UI */}
                                <Image
                                    src="/mobile3.svg"
                                    alt="UI Screen"
                                    width={280}
                                    height={320}
                                    className="absolute top-1/2 left-1/2 z-20 
             -translate-x-1/2 
             -translate-y-[40%] 
             scale-[1.3] zoom-animation ml-6"
                                    priority
                                />

                                {/* Overlay Graphic */}
                                <Image
                                    src="/mobile2.svg"
                                    alt="Overlay"
                                    width={280}
                                    height={340}
                                    className="absolute z-30"
                                    priority
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Getintouch */}
            <section className="bg-white py-20">
                <div className="flex justify-center">
                    <div
                        className="
                        relative
                        w-full
                        max-w-6xl
                        px-8 py-10
                        rounded-xl
                        bg-gradient-to-r from-[#FFF5EA] to-[#FFECDC]
                        shadow-md
                        min-h-[55vh]
                      "
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                            {/* LEFT CONTENT */}
                            <div>
                                <h3 className="text-[#1C75BC] text-2xl font-semibold tracking-widest">
                                    GET IN TOUCH
                                </h3>

                                <h2 className="mt-2 text-2xl md:text-4xl font-semibold">
                                    Wanna Develop a Mobile Application? Contact us Now!
                                </h2>

                                <p className="mt-4 text-black font-medium">
                                    Reach out to us to identify business challenges and get efficient digital solutions.
                                </p>

                                <Link
                                    href="/contact"
                                    className="
                              mt-6 inline-flex items-center gap-2
                              bg-[#FE4F6C]
                              text-white font-semibold
                              px-6 py-3 rounded-lg
                            "
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
                                    className="w-full max-w-md md:absolute md:-bottom-44 md:right-0"
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