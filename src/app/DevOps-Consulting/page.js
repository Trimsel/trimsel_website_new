import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";


export default function DevOpsConsulting() {
    return (
        <>
            <Header transparent />
            <section className="h-screen bg-black relative overflow-hidden flex items-center pt-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#003b5c_0%,_transparent_30%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#003b5c_0%,_transparent_30%)]"></div>

                <div className="container text-white mx-auto px-4 py-4 md:py-4 mt-20">
                    <div className="relative grid md:grid-cols-2 gap-12 items-center px-6 md:px-14 
                                    -translate-y-8 md:-translate-y-10">

                        {/* LEFT CONTENT */}
                        <div className="relative z-20 text-center md:text-left gap-4 mt-12">
                            <h1 className="text-5xl font-bold mb-10 leading-tight">
                                Leading DevOps Consulting Services
                            </h1>

                            <p className="max-w-xl mb-8 text-lg">
                                Trimsel is a top-rated DevOps company in India offering expert DevOps consulting services to businesses worldwide. We help teams build scalable CI/CD pipelines, leverage Kubernetes, and automate infrastructure for high-speed, secure, and reliable deployments.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#27AAE1] 
                             text-white px-8 py-4 rounded font-medium"
                            >
                                Contact Our Cloud Expert <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                            </Link>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative z-10 flex justify-center md:justify-end">
                            <Image
                                src="/devops-hero.svg"
                                alt="DevOps Illustration"
                                width={750}
                                height={750}
                                className="w-full max-w-xl md:-ml-16"
                                priority
                            />
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