import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Clients from "@/components/Client";
import OurBlog from "@/components/OurBlog";
import Header from "@/components/Header";



const items = [
    {
        title: "Future Proof Solutions",
        desc: "We build scalable and future-ready systems that grow with your business using modern technologies.",
        img: "/icons/icon1.png",
    },
    {
        title: "Appealing UI/UX",
        desc: "Our design approach focuses on user experience, making products intuitive, engaging, and visually stunning.",
        img: "/icons/icon2.png",
    },
    {
        title: "Agile Operation",
        desc: "We follow agile methodologies to deliver faster, adapt quickly, and ensure continuous improvement.",
        img: "/icons/icon3.png",
    },
    {
        title: "Versatile Tech Stack",
        desc: "Our expertise spans multiple technologies, allowing us to choose the best tools for every project.",
        img: "/icons/icon4.png",
    },
    {
        title: "Responsive Design",
        desc: "We ensure seamless performance across all devices with fully responsive and optimized layouts.",
        img: "/icons/icon5.png",
    },
    {
        title: "Client-Centric Approach",
        desc: "We prioritize client needs, delivering tailored solutions that align perfectly with business goals.",
        img: "/icons/icon6.png",
    },
];



export default function aboutus() {
    return (
        <>
            <Header />

            <section className="w-full relative">

                {/* TOP SECTION */}
                <div className="bg-gradient-to-r from-[#dbeafe] via-[#e0f2fe] to-[#fef3c7] px-6 py-12">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-20 ml-4">

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
                <div className="absolute right-8 top-[25%] z-20 w-40 h-40">
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
                    <img
                        src="/aboutus-Heroimage.svg"
                        alt="team"
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
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start ml-8">

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
                                <img src="/icons/our-value.svg" alt="values"
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


            <section className="bg-[#f5f7fb] py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* BLACK CONTAINER */}
                    <div className="relative overflow-hidden rounded-[40px]">

                        {/* SLANTED LAYER */}
                        <div className="clip-slant-rounded bg-gradient-to-br from-[#05060a] via-[#0b0f19] to-[#05060a] p-12 md:p-16">

                            {/* HEADER */}
                            <div className="grid md:grid-cols-2 gap-10 mb-12">

                                <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                                    What drives Us On To The <br /> Excellence Path
                                </h2>

                                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                    Our expert teams rely on modern tools and technology that
                                    provide a wide range of opportunities to build scalable and
                                    efficient digital solutions.
                                </p>
                            </div>

                            {/* GRID */}
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition"
                                    >
                                        {/* IMAGE ICON */}
                                        <div className="mb-4">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="text-white font-semibold text-lg mb-2">
                                            {item.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* GLOW EFFECT */}
                            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
                            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Getintouch */}
            <section className="bg-white py-24">
                <div className="flex justify-center px-4 sm:px-6">
                    <div className="relative w-full max-w-6xl rounded-xl bg-blue-500 px-5 py-8 shadow-md sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* LEFT CONTENT */}
                            <div>
                                <h3 className="text-sm font-semibold tracking-[0.22em] text-[#1C75BC] sm:text-base">
                                    GET IN TOUCH
                                </h3>

                                <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                                    You want to improve your business processes using the cloud,
                                    but you’re not sure how to handle it right?
                                </h2>

                                <Link
                                    href="/contact"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg">
                                    Contact Us
                                    <Image
                                        src="/Home/right-arrow.svg"
                                        width={20}
                                        height={20}
                                        alt="RightArrow"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Clients />

            <OurBlog />

            <Footer />
        </>
    )
}