import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
    return (
        <section className="bg-gradient-to-r from-blue-100 via-[#d4e9fd] to-white text-black overflow-hidden">
            <div className="container mx-auto px-4 py-4 md:py-4 mt-8">
                <div className="relative grid md:grid-cols-2 gap-12 items-center ml-24 
                    -translate-y-8 md:-translate-y-10">

                    {/* LEFT CONTENT */}
                    <div className="relative z-20 text-center md:text-left gap-4 mt-12">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Grow Your Business
                            With Trimsel – Your
                            No.1 Expert Digital Partner
                        </h1>

                        <p className="max-w-xl mb-6 text-lg">
                            Trimsel is a digital product development company based in India.
                            We use the power of digital engineering to empower businesses with innovation.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-[#27AAE1] 
             text-white px-8 py-4 rounded font-medium"
                        >
                            Get Started Today <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                        </Link>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-[520px] h-[480px] flex items-center justify-center ml-6">
                        <div className="absolute w-[380px] h-[380px] rounded-full 
                        bg-blue-200 blur-3xl opacity-60 z-0" />

                        <Image
                            src="/Home/HomeImage.svg"
                            alt="Home"
                            width={400}
                            height={380}
                            className="relative z-10 w-[380px] animate-shake"
                            priority
                        />

                        <Image
                            src="/Home/Robot.svg"
                            alt="AI Robot"
                            width={200}
                            height={200}
                            className="absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2 
                     z-20 w-[200px] h-auto"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>

    );
}
