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
        <div>
            <Header />

            <section className="h-screen bg-white relative overflow-hidden flex items-center pt-20">
                <div className="container text-white mx-auto px-4 py-4 md:py-4 mt-20">
                    <div className="relative grid md:grid-cols-2 gap-12 items-center px-6 md:px-14 
                                                    -translate-y-8 md:-translate-y-10">

                        {/* LEFT CONTENT */}
                        <div className="relative z-20 text-black text-center md:text-left gap-4">
                            <h1 className="text-5xl font-bold mb-10 leading-tight">
                                Top Digital Marketing Company{" "}
                                <br />
                                in Chennai, India
                            </h1>

                            <p className="max-w-xl mb-8 text-lg">
                                An AI-driven logistics optimization platform that revolutionizes how businesses plan, execute, and manage transportation.Real-time insights enable smarter decisions, while end-to-end visibility ensures greater transparency across every stage of the supply chain.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#27AAE1] 
                                             text-white px-8 py-4 rounded font-medium"
                            >
                                Get a Digital Strategy Session <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                            </Link>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex items-center justify-center -translate-y-6">

                            {/* Main Image */}
                            <Image
                                src="/digitalmarketing1.svg"
                                alt="Digital Marketing Illustration"
                                width={340}
                                height={340}
                                className="relative z-10"
                                priority
                            />

                            {/* Floating Image */}

                            <Image
                                src="/digitalmarketing2.svg"
                                alt="Marketing Analytics"
                                width={550}
                                height={550}
                                className="absolute top-4 left-4 z-10 animate-shake"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Getintouch */}
            <section className="bg-white py-20 mt-8">
                <div className="flex justify-center">
                    <div
                        className="
                        relative
                        w-full
                        max-w-6xl
                        px-8 py-10
                        rounded-xl
                        bg-[#E1C8FF]
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
                                    Not Sure How to Start with Digital Marketing? Let’s Build a Strategy That Works for You.
                                </h2>

                                <p className="mt-2 text-black font-medium">
                                    Whether you're a startup or scaling business, Trimsel's digital marketing experts in Chennai are ready to help. From SEO to social media and PPC, we’ll craft a custom strategy to grow your brand online.
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
                                    className="w-[280px] md:w-[320px] lg:w-[350px] h-auto md:absolute md:-bottom-44 md:right-12"
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
        </div>
    )
}