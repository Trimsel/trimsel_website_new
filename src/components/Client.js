"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { clientsData1, clientsData2 } from "@/data/clientlogo";

const Marquee = dynamic(() => import("react-fast-marquee"));

export default function Clients() {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
          OUR CLIENTS
        </h3>

        <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          Real Clients. Real Challenges. Real Results.
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
          Behind every logo is a challenge we solved from building AI-powered
          platforms and IoT systems to launching mobile apps and scaling digital
          marketing campaigns. 200+ projects delivered across FinTech,
          HealthTech, logistics, and SaaS for clients in India, UAE, and the US.
          We don't just build for clients, we build with them.
        </p>
      </div>

      {/* Row 1 */}
      <div className="mt-10 w-full">
        <Marquee
          speed={40}
          direction="right"
          pauseOnHover
          gradient={false}
          autoFill={true}
        >
          {clientsData1.map((client, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center transition duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={110}
                height={66}
                className="h-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 (reverse direction) */}
      <div className="mt-12 w-full">
        <Marquee
          speed={40}
          direction="left"
          pauseOnHover
          gradient={false}
          autoFill={true}
        >
          {clientsData2.map((client, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center transition duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={110}
                height={66}
                className="h-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
