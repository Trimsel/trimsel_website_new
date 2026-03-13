
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";




export default function CloudConsulting() {
    return (
        <main>
            <Header transparent />

            <section className="flex min-h-screen items-center bg-[url('/CloudConsultingservice.svg')] bg-cover bg-center pt-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 pb-8 text-center sm:px-6">
                    <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-5xl">
                        Cloud Consulting & Implementation<br />
                        Services in Chennai, India
                    </h1>

                    <p className="mt-6 max-w-xl text-base text-white sm:text-lg">
                        An AI-driven logistics optimization platform that revolutionizes how businesses plan, execute, and manage transportation.Real-time insights enable smarter decisions, while end-to-end visibility ensures greater transparency across every stage of the supply chain.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/contact"
                            className="rounded-lg px-8 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:px-10 sm:text-xl"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
                            }}
                        >
                            Schedule Consultation
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Getintouch */}
            <section className="bg-white py-24">
                <div className="flex justify-center px-4 sm:px-6">
                    <div className="relative w-full max-w-6xl rounded-xl bg-[url('/getintouch2.svg')] bg-cover bg-center bg-no-repeat px-5 py-8 shadow-md sm:px-8 sm:py-10">

                        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                            {/* LEFT CONTENT */}
                            <div>
                                <h3 className="text-sm font-semibold tracking-[0.22em] text-[#1C75BC] sm:text-base">
                                    GET IN TOUCH
                                </h3>

                                <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                                    You want to improve your business processes using the cloud, but you’re not sure how to handle it right?
                                </h2>

                                <Link
                                    href="/contact"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
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
