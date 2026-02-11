"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { clientsData1, clientsData2 } from "@/data/clientlogo";

export default function Clients() {
    return (
        <section className="bg-white text-black py-16">
            <div className="container mx-auto">

                {/* Heading */}
                <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                    OUR CLIENTS
                </h3>

                <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                    We’re a Trusted Growth Partner
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700 font-medium">
                    At Trimsel, there is continuous learning that happens as we work on various projects. We also love to update and upgrade with the latest innovations in the field of technology and apps.
                </p>

                {/* Row 1 */}
                <div className="mt-10">
                    <Marquee speed={40}
                        direction="right"
                        pauseOnHover gradient gradientColor={[255, 255, 255]}>
                        {clientsData1.map((client, index) => (
                            <div
                                key={index}
                                className="mx-10 flex items-center justify-center transition duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={100}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Row 2 (reverse direction) */}
                <div className="mt-8">
                    <Marquee
                        speed={40}
                        direction="left"
                        pauseOnHover
                        gradient
                        gradientColor={[255, 255, 255]}
                    >
                        {clientsData2.map((client, index) => (
                            <div
                                key={index}
                                className="mx-10 flex items-center justify-center transition duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={120}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
        </section>
    );
}
