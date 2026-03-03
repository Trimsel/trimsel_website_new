import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";


export default function Digitalmarketing() {
    return (
        <main>
            <Header />

            <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20">
                <div className="container mx-auto mt-14 px-4 py-8 sm:py-12">
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 md:px-8">

                        {/* LEFT CONTENT */}
                        <div className="relative z-20 text-center text-black md:text-left">
                            <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
                                Top Digital Marketing Company{" "}
                                <br />
                                in Chennai, India
                            </h1>

                            <p className="mb-8 max-w-xl text-base sm:text-lg">
                                An AI-driven logistics optimization platform that revolutionizes how businesses plan, execute, and manage transportation.Real-time insights enable smarter decisions, while end-to-end visibility ensures greater transparency across every stage of the supply chain.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
                            >
                                Get a Digital Strategy Session <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                            </Link>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">

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
                                className="absolute left-1/2 top-1/2 z-10 h-auto w-[280px] -translate-x-1/2 -translate-y-1/2 animate-shake sm:w-[360px] md:w-[460px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Getintouch */}
            <section className="bg-white py-20 mt-8">
                <div className="flex justify-center px-4 sm:px-6">
                    <div
                        className="
                        relative
                        w-full
                        max-w-6xl
                        px-5 py-8 sm:px-8 sm:py-10
                        rounded-xl
                        bg-[#E1C8FF]
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
                                    Not Sure How to Start with Digital Marketing? Let’s Build a Strategy That Works for You.
                                </h2>

                                <p className="mt-2 text-black font-medium">
                                    Whether you&apos;re a startup or scaling business, Trimsel&apos;s digital marketing experts in Chennai are ready to help. From SEO to social media and PPC, we’ll craft a custom strategy to grow your brand online.
                                </p>

                                <Link
                                    href="/contact"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    Contact Us <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                                </Link>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="relative flex justify-center md:justify-end">
                                <Image
                                    src="/getintouchdigitalmarketing.svg"
                                    alt="Contact illustration"
                                    width={350}
                                    height={350}
                                    className="h-auto w-[230px] sm:w-[280px] md:w-[320px] lg:w-[350px]"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Clients />

            <Contactform />

            <OurBlog />

            <Faq />

            <Footer />
        </main>
    )
}
