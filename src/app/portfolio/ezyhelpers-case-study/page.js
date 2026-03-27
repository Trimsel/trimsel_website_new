import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudySection from "@/components/CaseStudySection";
import StatsSection from "@/components/StatsSection";
import CaseStudyHero from "@/components/CaseStudyHero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CTASection from "@/components/CTA";
import CaseStudiesSection from "@/components/relatedcasestudy";



export default function XaberCaseStudy() {
    return (
        <main>
            <Header />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden bg-[#A6E3FA]">
                {/* CONTAINER */}
                <div className="max-w-7xl mx-auto px-6 py-12 md:pt-8 md:pb-16 grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="z-10 mt-8 md:mt-0">
                        <p className="text-sm md:text-base font-medium text-black/70 mb-6">
                            Home • Portfolio • <span className="text-blue-600 font-medium">EzyHelpers</span>
                        </p>

                        <div className="flex gap-2 sm:gap-3 mb-6 flex-wrap">
                            {["iOS & Android", "Web", "Desktop"].map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm md:text-base font-medium bg-white/70 rounded-lg text-black"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
                            Home Service and House Work Application
                        </h1>


                        <p className="mb-8 max-w-xl text-base sm:text-lg">
                            Ezyhelpers.com a platform to solve the discovery, skilling, training, hiring, and retention problems in the Domestic and Hospitality sector through a Technology-enabled marketplace.
                        </p>

                        <Link
                            href="/contactus"
                            className="inline-flex items-center gap-2 bg-[#1968FC] hover:bg-[#1968FC] text-white px-6 py-3 rounded-lg font-medium transition"
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

                    {/* RIGHT IMAGE */}
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-0">
                        <Image
                            src="/projects/project1.svg"
                            alt="EzyHelpers App"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </section>



            <section>
                <CaseStudySection
                    tag="OVERVIEW"
                    title="Xaber – Uber Clone App That Automates and Drives Growth for Businesses"
                    description1="Uber clone is an on-demand taxi booking software that helps expand business reach by providing taxi services to customers anytime. Any services like taxi booking, carpooling, taxi renting, car sharing, etc., are all managed within the platform."
                    description2="If you are an entrepreneur or business owner and wish to start your ride-hailing business online, we provide a white label Uber clone app solution for any range of businesses."

                    bgColor="#F9FAFB"
                    cardBg="#A6E3FA"
                    buttonBg="#1968FC"
                    lineColor="#1968FC"

                    details={[
                        { label: "Client", value: "Xaber – Uber Clone" },
                        { label: "Industry", value: "Services, Local Business" },
                        { label: "Duration", value: "3 Months" },
                        { label: "Platforms", value: "iOS, Android, Web & Desktop" },
                    ]}
                />
            </section>

            <section>
                <StatsSection
                    variant="blue"
                    stats={[
                        { value: "3.6K+", label: "Downloads" },
                        { value: "1.2K+", label: "Active Users" },
                        { value: "590+", label: "Request A Ride" },
                    ]}
                    image="/EzyHelpersstatus.svg"
                />
            </section>

            <section className="mt-10">
                <CaseStudyHero
                    tag="THE CHALLENGE"
                    title="Xaber – Uber Clone App That Automates and Drives Growth for Businesses"
                    description="If you want to take your taxi business digital, go for Uber like app development by partnering with us. We have integrated the top features and user experiences from every successful taxi booking app in the market. Our expert team of developers will customize and follow a proven Uber clone app development process. This will let you differentiate it from the competition while keeping it easy to use for your customers and unique to you to ensure success for your business."
                    image="/xaber-challenge.svg"
                    bgColor="#E6C57E"
                />
            </section>

            <section>
                <ProblemSection
                    tag="PROBLEM FACED"
                    title="It allows the customers to analyze their water consumption towards preserving and reducing the water leakage"
                    description1="KarIoT is a technology that automates water management systems with the help of IoT solutions. It allows the customers to analyze their water consumption towards preserving and reducing the water leakage.Hence, we bring to you Karikala IoT (KarIoT). Our smart water solution which does not just record the water reading but present to you in a simple and understandable text on your smart phone."
                    description2="KarIoT provides 360° view of the supply and distribution of water system. Govt. officials can make informed decisions to ensure correct LPCD is provided with the required quality of water for each individuals."
                    bgColor="from-[#D9F3FF] to-[#AEE4FF]"
                    bgImage="/drop.svg"
                />
            </section>


            <section className="bg-[#E6CF85]">
                <SolutionSection
                    tag="THE SOLUTION"
                    title="Uber Clone For Your Ride-Hailing Business Success"
                    description="If you want to take your taxi business digital, go for Uber like app development by partnering with us. We have integrated the top features and user experiences from every successful taxi booking app in the market. Our expert team of developers 
                    will customize and follow a proven Uber clone app development process. This will let you differentiate it from the competition while keeping it easy to use for your customers and unique to you to ensure success for your business."
                    bgColor="#E6CF85"
                    image="/xaber-solution.svg"
                    imageClass="md:w-[400px] lg:w-[500px] xl:w-[600px]"
                />
            </section>


            <section>
                <CTASection
                    title="Launch your food delivery business in days"
                    subtitle="START YOUR BUSINESS"
                    bgGradient="from-yellow-400 to-orange-500"
                    image="/.svg"
                />
            </section>


            <section>
                <CaseStudiesSection
                    tag="RELATED CASE STUDIES"
                    heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
                    studies={[
                        {
                            title: "EzyHelpers",
                            description:
                                "Quisque a pretium nulla, at porttitor eros. Mauris pharetra nisl sit amet mauris efficitur malesuada.",
                            image: "/images/ezyhelpers.png",
                            link: "/case-study/ezyhelpers",
                        },
                        {
                            title: "KarIOT",
                            description:
                                "Quisque a pretium nulla, at porttitor eros. Mauris pharetra nisl sit amet mauris efficitur malesuada.",
                            image: "/images/kariot.png",
                            link: "/case-study/kariot",
                        },
                    ]}
                />
            </section>


            <Footer />
        </main>
    )
}