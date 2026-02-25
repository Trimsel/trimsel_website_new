
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
        <>
            <Header transparent />

            <section className="h-screen bg-[url('/CloudConsultingservice.svg')] bg-cover bg-center flex items-center pt-20">
                <div className="w-full flex flex-col items-center justify-center text-center px-6 pb-4">
                    <h1 className="text-white text-5xl font-bold text-center leading-tight">
                        Cloud Consulting & Implementation<br />
                        Services in Chennai, India
                    </h1>

                    <p className="max-w-xl mt-6 text-lg text-white">
                        An AI-driven logistics optimization platform that revolutionizes how businesses plan, execute, and manage transportation.Real-time insights enable smarter decisions, while end-to-end visibility ensures greater transparency across every stage of the supply chain.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/contact"
                            className="rounded-lg px-10 py-3 text-xl text-white hover:scale-105 transition-all duration-300 shadow-xl"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
                            }}
                        >
                            Schedule Consultation
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Getintouch */}
            <section className="bg-white py-24">
                <div className="flex justify-center">
                    <div className="relative w-full max-w-6xl px-8 py-10 rounded-xl bg-[url('/getintouch2.svg')] bg-cover bg-center bg-no-repeat shadow-md min-h-[55vh]">

                        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                            {/* LEFT CONTENT */}
                            <div>
                                <h3 className="text-[#1C75BC] text-2xl font-semibold tracking-widest">
                                    GET IN TOUCH
                                </h3>

                                <h2 className="mt-2 text-2xl text-white md:text-4xl font-semibold">
                                    You want to improve your business processes using the cloud, but you’re not sure how to handle it right?
                                </h2>

                                <Link
                                    href="/contact"
                                    className="
                              mt-6 inline-flex items-center gap-2
                              bg-[#27AAE1]
                              text-white font-semibold
                              px-6 py-3 rounded-lg
                            "
                                >
                                    Contact Us →
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

        </>
    )
}