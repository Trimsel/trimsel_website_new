import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Testimonial from "@/components/testimonial";


export default function WebDevelopment() {
    return (
        <main>

        <Header />

        <section className="relative overflow-hidden bg-[#E4F3FF]">
  {/* Content */}
  <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pt-28 pb-16 sm:px-6 sm:pt-28 lg:grid-cols-2 lg:items-start lg:px-8 lg:pt-32">

    {/* LEFT CONTENT */}
    <div className="flex flex-col items-start">
      <h1 className="mb-6 text-4xl font-semibold text-black">
        Top-Rated Web Development
        Company in Chennai –
        Built for Growth & Performance.
      </h1>

      <p className="max-w-xl mb-8 text-lg">
        An AI-driven logistics optimization platform that revolutionizes how
        businesses plan, execute, and manage transportation. Real-time
        insights enable smarter decisions, while end-to-end visibility ensures
        greater transparency across every stage of the supply chain.
      </p>

      <div>
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 px-6 py-4 rounded-md bg-gradient-to-r from-[#29B375] to-[#2E70C3] text-white font-medium hover:scale-105 transition-all shadow-lg"
                                >
                                Get a Free Consultation
                                <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
                                </Link>
                            </div>
    </div>

    {/* RIGHT IMAGE */}
<div className="relative flex items-center justify-center overflow-hidden py-8 lg:py-0">

{/* Glow blob */}
<div className="absolute h-72 w-72 rounded-full bg-blue-200 opacity-50 blur-3xl" />

{/* Scale wrapper */}
<div className="flex items-center justify-center scale-[0.6] -my-28 origin-center sm:scale-[0.85] sm:-my-14 lg:scale-100 lg:my-0">

  {/* Outer container — fixed size, never changes */}
  <div className="relative h-[540px] w-[540px]">

    {/* Web1 — dashboard/card, top-right */}
    <div className="absolute top-8 left-28 z-10 h-[75%] w-[95%]">
      <Image
        src="/Web1.svg"
        alt="Web1"
        fill
        className="object-contain opacity-90 drop-shadow-lg"
        priority
      />
    </div>

    {/* Web2 — robot, bottom-left */}
    <div className="absolute bottom-28 left-12 z-20 h-[70%] w-[70%]">
      <Image
        src="/Web2.svg"
        alt="AI Robot"
        fill
        className="object-contain drop-shadow-2xl animate-shake"
        priority
      />
    </div>

  </div>
</div>
</div>

  </div>
</section>

        <Client />

        <Contactform />

        <Testimonial />

        <OurBlog />

        <Footer />
        </main>
    )
}