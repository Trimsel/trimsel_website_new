import Link from "next/link";
import Image from "next/image";

export default function AIDevelopmentPage() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0b0620] via-[#2a1a68] to-[#1c1b4d]">

            {/* CSS particle field — replaces Three.js canvas */}
            <div className="ai-particle-field" />

            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 mt-4">
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#] to-[#285BFB] z-0" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 gap-4">

                    {/* BREADCRUMB */}
                    <p className="text-md md:text-base font-medium text-white mb-6">
                        <Link href="/" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                            Home
                        </Link>

                        {" • "}

                        <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">AI Development</span>
                    </p>

                    <div className="animate-fadeIn mb-6 flex items-center justify-center gap-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm">

                        {/* Left Image */}
                        <Image
                            src="/icons/aileftimage.svg"
                            alt="AI Left"
                            width={30}
                            height={30}
                        />

                        {/* Text */}
                        <span className="text-lg font-medium">Next-Gen AI Technology</span>

                        {/* Right Image */}
                        <Image
                            src="/icons/airightimage.svg"
                            alt="AI Right"
                            width={30}
                            height={30}
                        />

                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Artificial Intelligence
                    </h1>

                    <h2 className="mt-2 text-white text-center text-2xl md:text-4xl font-semibold">
                        Development Platform
                    </h2>

                    <p className="mt-4 max-w-5xl mx-auto text-center text-white font-medium">
                        Harness the power of neural networks and machine learning to build the future of intelligent applications
                    </p>

                    <div className="flex gap-8 mt-8">
                        <Link
                            href="/"
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#8F24FA] to-[#285BFB] text-white font-medium"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="/"
                            className="px-6 py-3 rounded-lg bg-[#48327A] text-white border border-white/40
         hover:bg-[#7049B1] blur/10
           transition-all duration-300 ease-in-out"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
