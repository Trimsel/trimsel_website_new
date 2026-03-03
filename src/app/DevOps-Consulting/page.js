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
        <main>
            <Header transparent />
            <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#003b5c_0%,_transparent_30%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#003b5c_0%,_transparent_30%)]"></div>

                <div className="container mx-auto mt-14 px-4 py-8 text-white sm:py-12">
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 md:px-8">

                        {/* LEFT CONTENT */}
                        <div className="relative z-20 text-center md:text-left">
                            <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
                                Leading DevOps Consulting Services
                            </h1>

                            <p className="mb-8 max-w-xl text-base sm:text-lg">
                                Trimsel is a top-rated DevOps company in India offering expert DevOps consulting services to businesses worldwide. We help teams build scalable CI/CD pipelines, leverage Kubernetes, and automate infrastructure for high-speed, secure, and reliable deployments.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
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
                                className="h-auto w-full max-w-[300px] sm:max-w-md md:max-w-xl"
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
        </main>
    )
}
