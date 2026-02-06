"use client";
import Image from "next/image";


export default function Clients() {
    return (
        <section className="bg-white text-black py-16">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h3 className="text-center text-2xl font-semibold tracking-widest">
                    WHO WE ARE
                </h3>

                <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                    We’re Experts At Helping Businesses Reach Their True Potential
                </h2>

                <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
                    Transform your business processes by migrating from legacy solutions
                    to modern technology and developments that guarantee growth, optimization, and ROI for your business.
                    Trimsel was founded at the right moment to meet the challenges faced by businesses and enable them to meet their digital transformation goals.
                    Established in 2020 in Chennai, Trimsel and its robust team of developers and consultants have provided Product Engineering and
                    Digital Transformation services to Fortune 500 companies and start-up enterprises globally.
                </p>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/icons/work1.svg"
                            alt="Projects"
                            width={40}
                            height={40}
                        />
                        <div className="text-3xl sm:text-4xl font-bold">30+</div>
                        <p className="mt-2 text-sm font-medium text-gray-600">
                            Web & Mobile Products
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/icons/work2.svg"
                            alt="Projects"
                            width={40}
                            height={40}
                        />
                        <div className="text-3xl sm:text-4xl font-bold">2000+</div>
                        <p className="mt-2 text-sm font-medium text-gray-600">
                            Million Users Touched
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/icons/work3.svg"
                            alt="Projects"
                            width={40}
                            height={40}
                        />
                        <div className="text-3xl sm:text-4xl font-bold">110+</div>
                        <p className="mt-2 text-sm font-medium text-gray-600">
                            Project Launched
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/icons/work4.svg"
                            alt="Projects"
                            width={40}
                            height={40}
                        />
                        <div className="text-3xl sm:text-4xl font-bold">99%</div>
                        <p className="mt-2 text-sm font-medium text-gray-600">
                            customer satisfaction
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}