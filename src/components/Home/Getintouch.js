import Image from "next/image";
import Link from "next/link";

export default function Getintouch() {
    return (
        <section className="bg-white py-20">
            <div className="flex justify-center">
                <div
                    className="
            relative
            w-full
            max-w-6xl
            px-8 py-10
            rounded-xl
            bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white
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
                                Have a project? We would love to help.
                            </h2>

                            <p className="mt-4 text-black font-medium">
                                Reach out to us to identify business challenges and get efficient digital solutions.
                            </p>

                            <button
                                className="
                  mt-6 inline-flex items-center gap-2
                  bg-[#27AAE1]
                  text-white font-semibold
                  px-6 py-3 rounded-lg
                "
                            >
                                Get Started →
                            </button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center md:justify-end">
                            <Image
                                src="/Home/getintouch.svg"
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
    );
}
