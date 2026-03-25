import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function XaberCaseStudy() {
    return (
        <main>
            <Header transparent />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#FFDA5A] to-[#FFCA71]">
                {/* CONTAINER */}
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="z-10 mt-8">
                        <p className="text-sm text-black/70 mb-6">
                            Home • Portfolio • <span className="text-blue-600 font-medium">Xaber</span>
                        </p>

                        <div className="mb-6 w-[120px] h-[40px] relative">
                            <Image
                                src="/icons/Xaberlogo.svg"
                                alt="xaber logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex gap-3 mb-6 flex-wrap">
                            {["iOS & Android", "Web", "Desktop"].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1.5 text-sm bg-white/70 rounded-xl text-black"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
                            Uber Clone: Online Taxi-Booking For Your Business Success
                        </h1>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#e58c06] text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            Get Started Today
                            <Image
                                src="/Home/right-arrow.svg"
                                width={20}
                                height={20}
                                alt="RightArrow"
                            />
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE (EDGE TO EDGE) */}
                <div className="hidden md:block absolute bottom-0 right-0 w-[55%] h-full">
                    <Image
                        src="/XaberHero.svg"
                        alt="phones"
                        fill
                        className="object-contain object-right-bottom"
                        priority
                    />
                </div>

            </section>


            <Footer />
        </main>
    )
}