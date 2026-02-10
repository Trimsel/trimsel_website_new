import Image from "next/image";
import Link from "next/link";

export default function Getintouch() {
    return (
        <section className="bg-white text-black py-20">
            <div
                className="relative container mx-auto py-6 px-6 rounded-xl
  bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white
  shadow-md
  min-h-[55vh] max-w-6xl overflow-visible"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Your content here */}
                    <div className="mt-2 ml-8">
                        <h3 className="text-[#1C75BC] text-2xl font-semibold tracking-widest">
                            GET IN TOUCH
                        </h3>

                        <h2 className="mt-2 text-2xl md:text-4xl font-semibold">
                            Have a project? We would love to help.
                        </h2>

                        <p className="mt-4 max-w-5xl mx-auto text-black font-medium">
                            Reach out to us to identify business challenges and get efficient digital solutions.
                        </p>

                        <button
                            className="mt-6 inline-flex items-center gap-2
          bg-[#27AAE1]
          text-white font-semibold
          px-6 py-3 rounded-lg transition"
                        >
                            Get Started →
                        </button>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src="/Home/getintouch.svg"
                            alt="Contact illustration"
                            className="
      relative
      md:absolute
      md:-bottom-48
      md:right-0
      w-full
      max-w-md
    "
                        />
                    </div>


                </div>


            </div>
        </section>
    )
}