"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Clients from "@/components/Client";
import OurBlog from "@/components/OurBlog";
import Header from "@/components/Header";
import Whatwedo from "@/components/Whatwedo";
import Contactform from "@/components/Contactform";



const cards = [
    {
        title: "Future Proof Solutions",
        description:
            "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
        icon: "/icons/aboutus-process1.svg",
        color: "from-cyan-400 to-blue-500",
    },
    {
        title: "Appealing UI/UX",
        description:
            "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
        icon: "/icons/aboutus-process2.svg",
        color: "from-pink-500 to-purple-500",
    },
    {
        title: "Agile Operation",
        description:
            "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
        icon: "/icons/aboutus-process3.svg",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Versatile Tech Stark",
        description:
            "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
        icon: "/icons/aboutus-process4.svg",
        color: "from-pink-500 to-red-500",
    },
    {
        title: "Responsive Design",
        description:
            "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
        icon: "/icons/aboutus-process5.svg",
        color: "from-indigo-500 to-blue-500",
    },
    {
        title: "Client-Centric Approach",
        description:
            "Our expert teams rely on modern tools and technology that provides a wide range of opportunities to build products and solutions that are scalable",
        icon: "/icons/aboutus-process6.svg",
        color: "from-cyan-400 to-blue-400",
    },
];

const milestones = [
    {
        title: "Project Kickoff",
        percent: "20% Payment",
        color: "bg-[#4B407D]",
        icon: "/icons/payment1.svg",
    },
    {
        title: "PRD and Design Sign Off",
        percent: "20% Payment",
        color: "bg-[#2A5C9A]",
        icon: "/icons/payment2.svg",
    },
    {
        title: "Release 1",
        percent: "20% Payment",
        color: "bg-[#09A69A]",
        icon: "/icons/payment3.svg",
    },
    {
        title: "Release 2",
        percent: "20% Payment",
        color: "bg-[#0ED47D]",
        icon: "/icons/payment4.svg",
    },
    {
        title: "Live",
        percent: "20% Payment",
        color: "bg-[#59E472]",
        icon: "/icons/payment5.svg",
    },
];



export default function aboutus() {
    return (
        <>
            <Header />

            <section className="w-full relative">

                {/* TOP SECTION */}
                <div className="bg-gradient-to-r from-[#dbeafe] via-[#e0f2fe] to-[#fef3c7] px-6 py-12">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-20 lg:ml-4">

                        <div>
                            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                                Who are{" "}
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                                    We
                                </span>{" "}
                                ?
                            </h1>

                            <p className="mt-4 text-gray-700 font-medium text-sm sm:text-base flex items-center whitespace-nowrap">
                                <span className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2 font-medium text-sm sm:text-base max-w-lg">
                                    Mission
                                </span>
                                Critical Digital Solutions for Complete Business Transformations
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-800 font-medium text-sm sm:text-base max-w-lg">
                                Transform your business processes by migrating from legacy
                                solutions to modern technology and developments that guarantee
                                growth, optimization, and ROI for your business.
                            </p>
                        </div>

                    </div>
                </div>

                {/* FLOATING BUTTON (MAIN FIX) */}
                <div className="absolute right-4 md:right-8 top-[38%] md:top-[25%] z-20 w-24 h-24 md:w-40 md:h-40">
                    <Image
                        src="/Discuss-your-project-idea1.svg"
                        alt="Discuss project"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* IMAGE SECTION */}
                <div className="relative">
                    <Image
                        src="/aboutus-Heroimage.svg"
                        alt="team"
                        width={80}
                        height={80}
                        className="w-full h-[500px] object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-between px-10">
                        <h1 className="text-[200px] font-bold text-white/20">M</h1>
                        <h1 className="text-[200px] font-bold text-white/20">M</h1>
                    </div>
                </div>

            </section>


            {/* Works */}
            <section className="bg-white text-black py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Heading */}
                    <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                        WHO WE ARE
                    </h3>

                    <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                        We&apos;re Experts At Helping Businesses Reach Their True Potential
                    </h2>

                    <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
                        Transform your business processes by migrating from legacy solutions
                        to modern technology and developments that guarantee growth,
                        optimization, and ROI for your business. Trimsel was founded at the
                        right moment to meet the challenges faced by businesses and enable
                        them to meet their digital transformation goals. Established in 2020
                        in Chennai, Trimsel and its robust team of developers and
                        consultants have provided Product Engineering and Digital
                        Transformation services to Fortune 500 companies and start-up
                        enterprises globally.
                    </p>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/icons/about-whatwedo1.svg"
                                alt="Projects"
                                width={50}
                                height={50}
                            />
                            <div className="text-3xl sm:text-4xl font-bold">150+</div>
                            <p className="mt-2 text-sm font-medium text-black">
                                Products launched
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/icons/about-whatwedo2.svg"
                                alt="Projects"
                                width={50}
                                height={50}
                            />
                            <div className="text-3xl sm:text-4xl font-bold">$200M</div>
                            <p className="mt-2 text-sm font-medium text-black">
                                Raised by our clients
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/icons/about-whatwedo3.svg"
                                alt="Projects"
                                width={50}
                                height={50}
                            />
                            <div className="text-3xl sm:text-4xl font-bold">1000+</div>
                            <p className="mt-2 text-sm font-medium text-black">
                                Tech experts On-board
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/icons/about-whatwedo4.svg"
                                alt="Projects"
                                width={50}
                                height={50}
                            />
                            <div className="text-3xl sm:text-4xl font-bold">100%</div>
                            <p className="mt-2 text-sm font-medium text-black">
                                Bootstrapped
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f7fb] py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start lg:ml-8">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-gray-800 leading-snug">
                            Reinventing Business Environments with the Power of Technology.
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">
                            Minitzon delivers nothing but the best digital solutions to our
                            clients with a customer-centric approach. We are determined to elevate
                            your business to global competitors by using cutting-edge technology
                            implemented by masterminds in the digital world. Our experts address
                            complex business challenges with forwarding and scalable solutions
                            that hold steady for long-term goals and bring holistic change to your
                            business.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">
                            Minitzon delivers nothing but the best digital solutions to our
                            clients with a customer-centric approach. We are determined to elevate
                            your business to global competitors by using cutting-edge technology
                            implemented by masterminds in the digital world.
                        </p>

                        {/* BUTTON */}
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg items-center gap-2 shadow-md font-medium transition"
                        >
                            Talk To Our Expert
                            <Image
                                src="/Home/right-arrow.svg"
                                width={20}
                                height={20}
                                alt="RightArrow"
                            />
                        </Link>
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="space-y-6">

                        {/* CARD 1 */}
                        <div className="relative bg-blue-200 rounded-2xl p-6 shadow-sm">

                            {/* Corner Cut */}
                            <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut"></div>

                            <div className="flex flex-col items-start gap-3">

                                {/* ICON */}
                                <Image src="/icons/our-value.svg" alt="values"
                                    width={40}
                                    height={40} />

                                {/* TITLE */}
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Our Values
                                </h3>

                                {/* CONTENT */}
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    At Minitzon, we focus on offering digital solutions developed
                                    with cutting-edge technology, so our clients always stay ahead
                                    of the curve. With mission-critical solutions, we hold a
                                    comprehensive approach to the requirement at hand.
                                </p>

                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="relative bg-blue-200 rounded-2xl p-6 shadow-sm">

                            {/* Corner Cut */}
                            <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut"></div>

                            <div className="flex flex-col items-start gap-3">

                                {/* ICON */}
                                <Image src="/icons/our-approach.svg" alt="values"
                                    width={40}
                                    height={40} />

                                {/* TITLE */}
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Our Approach
                                </h3>

                                {/* CONTENT */}
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    At Minitzon, we focus on offering digital solutions developed
                                    with cutting-edge technology, so our clients always stay ahead
                                    of the curve. With mission-critical solutions, we hold a
                                    comprehensive approach to the requirement at hand.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto bg-[#0a0a0af2] rounded-[40px] px-8 py-14 md:px-16 md:py-20 shadow-2xl">

                    {/* HEADER */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-16 items-start">
                        <h2 className="text-3xl md:text-[42px] font-bold text-white leading-[1.15]">
                            What drives Us On To The Excellence Path
                        </h2>

                        <p className="text-white/80 text-md font-medium md:text-base leading-relaxed md:pt-3">
                            Our expert teams rely on modern tools and technology that provides a wide
                            range of opportunities to build products and solutions that are scalable.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#1c1d21] p-8 md:p-10 rounded-[28px] hover:-translate-y-2 transition duration-300"
                            >
                                {/* ICON */}
                                <div className="mb-8 w-20 h-20 relative -ml-2">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                                    {card.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-[#a1a1aa] text-md font-medium md:text-[15px] leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <Whatwedo />


            <section className="bg-[#f5f7fb] py-16 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* TOP GRID */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div className="md:ml-6">
                            {/* BADGE */}
                            <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                                PAYMENT MILESTONES
                            </h3>

                            {/* HEADING */}
                            <h2 className="mb-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                                What are the payment milestones in the plan?
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="mt-4 max-w-5xl mx-auto text-black font-medium">
                                We have designed the most flexible payment methods so that you feel
                                safe and secure while we ensure the value we provide during each
                                release meets your expectation. The payment is equally divided into
                                five milestones where you are requested to pay 20% during each
                                milestone.
                                <br /><br />
                                This ensures that you feel confident and pay as you go. Currently,
                                we don’t accept revenue sharing or equity-based payment since we
                                might not understand the industry insights. We ensure you get great
                                value and a world-class product worth the amount you pay.
                            </p>
                        </div>

                        {/* RIGHT VIDEO CARD */}
                        <div className="relative md:-ml-6">
                            {/* VIDEO CARD */}
                            <div className="mt-12">
                                <Image
                                    src="/payment-milestone.svg"
                                    alt="payment"
                                    width={500}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TIMELINE */}
                    <div className="mt-8 relative">

                        {/* FULL DOTTED LINE */}
                        <div className="hidden md:block absolute top-7 left-0 right-0 mx-[8%] border-t-2 border-dashed border-gray-300"></div>

                        {/* ARROWS (BETWEEN ITEMS) */}
                        <div className="hidden md:block absolute top-7 left-0 w-full pointer-events-none">
                            <div className="relative w-full h-full">

                                {/* 4 arrows between 5 items */}
                                {[1, 2, 3, 4].map((pos) => (
                                    <Image
                                        key={pos}
                                        src="/icons/payment-arrow.svg"
                                        alt="arrow"
                                        width={18}
                                        height={18}
                                        className="absolute -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: `${(pos * 100) / 5}%`, // perfectly between items
                                            top: "50%",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* STEPS */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">

                            {milestones.map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center">

                                    {/* ICON */}
                                    <div className="relative z-10">
                                        <div className={`absolute inset-0 ${item.color} blur-md opacity-40 rounded-full`} />

                                        <div className={`relative w-14 h-14 ${item.color} rounded-full flex items-center justify-center shadow-md`}>
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={22}
                                                height={22}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* TITLE */}
                                    <p className="mt-4 text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </p>

                                    {/* SUBTEXT */}
                                    <p className="text-md font-medium text-gray-600">
                                        {item.percent}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>


            {/* Getintouch */}
            <section className="bg-white py-24">
                <div className="flex justify-center px-4 sm:px-6">
                    <div className="relative w-full max-w-6xl rounded-xl bg-[#DEFFCE] px-5 py-8 shadow-md sm:px-8 sm:py-10">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* LEFT CONTENT */}
                            <div>
                                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                                    GET IN TOUCH
                                </h3>

                                <h2 className="mt-2 text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl">
                                    Reach out to us to identify business challenges and get efficient digital solutions.
                                </h2>

                                <Link
                                    href="/contact"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg">
                                    Get Started
                                    <Image
                                        src="/Home/right-arrow.svg"
                                        width={20}
                                        height={20}
                                        alt="RightArrow"
                                    />
                                </Link>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="relative flex justify-center md:justify-end">
                                <Image
                                    src="/aboutus-getintouch.svg"
                                    alt="Contact illustration"
                                    width={700}
                                    height={700}
                                    className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Clients />

            <Contactform />

            <OurBlog />

            <Footer />
        </>
    )
}