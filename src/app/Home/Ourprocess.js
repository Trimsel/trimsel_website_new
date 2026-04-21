"use client";

import Image from "next/image";

export default function Fivestage() {
  return (
    <section className="bg-[url('/Home/Fivestagebg.svg')] bg-contain bg-center bg-no-repeat text-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
          OUR PROCESS
        </h3>
        <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
          How We Take Your Project From Brief to Launched Product
        </h2>
        <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
          Every project we take on follows the same structured process, not
          because it's rigid, but because it works. These five stages ensure
          nothing is skipped, no assumptions are made, and the product that
          ships matches the one that was scoped.
        </p>

        {/* ===== MOBILE / TABLET LAYOUT (< lg) ===== */}
        <div className="lg:hidden flex flex-col gap-16 mt-16">
          {/* Stage 01 */}
          <div className="relative bg-[#44ABD3] text-white p-8 rounded-2xl rounded-br-none min-h-[320px] flex flex-col justify-between mx-auto w-full max-w-sm">
            <div className="absolute -top-12 left-6">
              <Image
                src="/icons/stage1.svg"
                alt="Ideation"
                width={100}
                height={100}
              />
            </div>
            <span className="absolute top-4 right-6 text-6xl font-bold opacity-30">
              01
            </span>
            <h3 className="text-2xl font-bold mt-20">Ideation and Analysis.</h3>
            <p className="text-black font-medium leading-relaxed opacity-90 mt-3">
              Every project starts with a discovery workshop,understanding your
              business goals, user needs, technical constraints, and competitive
              landscape. We define scope, validate feasibility, and agree on
              success metrics before a single line of code is written.
            </p>
          </div>

          {/* Stage 02 */}
          <div className="relative flex flex-col justify-center p-6 mx-auto w-full max-w-sm border-0">
            <div className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl">
              <span className="absolute top-0 right-0 h-[4px] w-full bg-gradient-to-r from-white via-[#5AC56B] to-[#5AC56B] rounded-full"></span>
              <span className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-[#5AC56B] via-[#5AC56B] to-white rounded-full"></span>
            </div>
            <div className="absolute -top-12 left-6">
              <Image
                src="/icons/stage2.svg"
                alt="Design"
                width={100}
                height={100}
              />
            </div>
            <span className="absolute top-4 right-6 text-6xl font-bold opacity-30">
              02
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-20 mb-3">
              UI/UX Design & Prototyping.
            </h3>
            <p className="text-black font-medium leading-relaxed opacity-90">
              Wireframes, interactive prototypes, and high-fidelity designs
              created before development begins so you can see and test the
              experience early. We design for usability, conversion, and
              consistency across every screen and platform.
            </p>
          </div>

          {/* Stage 03 */}
          <div className="relative bg-[#E16DB4] text-white p-8 rounded-2xl rounded-bl-none min-h-[320px] flex flex-col justify-between mx-auto w-full max-w-sm">
            <div className="absolute -top-12 left-6">
              <Image
                src="/icons/stage3.svg"
                alt="Architecture"
                width={100}
                height={100}
              />
            </div>
            <span className="absolute top-4 right-6 text-6xl font-bold opacity-30">
              03
            </span>
            <h3 className="text-2xl font-bold mt-20">
              Architecture and DevOps.
            </h3>
            <p className="text-black font-medium leading-relaxed opacity-90 mt-3">
              Before development begins, our architects design the system for
              how it needs to perform at scale not just at launch. We select the
              right tech stack, define the cloud infrastructure on AWS, Azure,
              or GCP, and set up CI/CD pipelines and DevOps workflows from day
              one.
            </p>
          </div>

          {/* Stage 04 */}
          <div className="relative bg-[#A576C2] text-white p-8 rounded-2xl rounded-bl-none min-h-[320px] flex flex-col justify-between mx-auto w-full max-w-sm">
            <div className="absolute -top-12 left-6">
              <Image
                src="/icons/stage5.svg"
                alt="Development"
                width={100}
                height={100}
              />
            </div>
            <span className="absolute top-4 right-6 text-6xl font-bold opacity-30">
              04
            </span>
            <h3 className="text-2xl font-bold mt-20">
              Full-Stack Development & Delivery
            </h3>
            <p className="text-black font-medium leading-relaxed opacity-90 mt-3">
              Development runs in agile sprints with regular demos, code
              reviews, and QA testing built into every cycle. Our full-stack
              team handles frontend, backend, APIs, and third-party integrations
              for web platforms, mobile apps, or both, shipping incrementally so
              you see progress every two weeks.
            </p>
          </div>

          {/* Stage 05 */}
          <div className="relative flex flex-col justify-center p-6 mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl">
              <span className="absolute top-0 right-0 h-[4px] w-full bg-gradient-to-r from-white via-[#5AC56B] to-[#5AC56B] rounded-full"></span>
              <span className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-[#5AC56B] via-[#5AC56B] to-white rounded-full"></span>
            </div>
            <div className="absolute -top-12 left-6">
              <Image
                src="/icons/stage4.svg"
                alt="Support"
                width={100}
                height={100}
              />
            </div>
            <span className="absolute top-4 right-6 text-6xl font-bold opacity-30">
              05
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-20">
              24/7 Maintenance and Support
            </h3>
            <p className="text-black font-medium leading-relaxed opacity-90 mt-2">
              Launch is not the finish line, it's the starting point. After
              go-live, our team monitors performance, applies security patches,
              ships feature updates, and responds to issues around the clock.
              Every client gets a dedicated support channel, not a ticket queue.
            </p>
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT (>= lg) — preserves original design exactly ===== */}
        <div className="hidden lg:block">
          {/* ROW 1 */}
          <div className="relative grid grid-cols-3 justify-items-center gap-x-8 gap-y-20 mt-12">
            {/* Stage 01 */}
            <div className="relative bg-[#44ABD3] text-white p-10 rounded-2xl rounded-br-none min-h-[380px] w-[320px] flex flex-col justify-between">
              <Image
                src="/icons/stagearrow1.svg"
                alt="arrow"
                width={70}
                height={40}
                className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-60"
              />
              <div className="absolute -top-8 left-10">
                <Image
                  src="/icons/stage1.svg"
                  alt="Ideation"
                  width={120}
                  height={120}
                  className="relative -top-6 -left-6"
                />
              </div>
              <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                01
              </span>
              <h3 className="text-2xl font-bold mt-24">
                Ideation and Analysis.
              </h3>
              <p className="text-black font-medium leading-relaxed opacity-90">
                Every project starts with a discovery workshop,understanding
                your business goals, user needs, technical constraints, and
                competitive landscape. We define scope, validate feasibility,
                and agree on success metrics before a single line of code is
                written.
              </p>
            </div>

            {/* Stage 02 */}
            <div className="relative flex flex-col justify-center p-4 max-w-xs top-24">
              <div className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl">
                <span className="absolute top-0 right-0 h-[4px] w-full bg-gradient-to-r from-white via-[#5AC56B] to-[#5AC56B] rounded-full"></span>
                <span className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-[#5AC56B] via-[#5AC56B] to-white rounded-full"></span>
              </div>
              <Image
                src="/icons/stagearrow2.svg"
                alt="arrow"
                width={80}
                height={40}
                className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-60"
              />
              <div className="absolute -top-8 left-10">
                <Image
                  src="/icons/stage2.svg"
                  alt="Design"
                  width={120}
                  height={120}
                  className="relative -top-6 -left-6"
                />
              </div>
              <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                02
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                UI/UX Design & Prototyping.
              </h3>
              <p className="text-black font-medium leading-relaxed opacity-90">
                Wireframes, interactive prototypes, and high-fidelity designs
                created before development begins so you can see and test the
                experience early. We design for usability, conversion, and
                consistency across every screen and platform.
              </p>
            </div>

            {/* Stage 03 */}
            <div className="relative bg-[#E16DB4] text-white p-10 rounded-2xl rounded-bl-none min-h-[380px] w-[320px] flex flex-col justify-between">
              <Image
                src="/icons/stagearrow3.svg"
                alt="arrow"
                width={120}
                height={160}
                className="absolute left-1/2 -bottom-32 -translate-x-1/2 opacity-60"
              />
              <div className="absolute -top-8 left-10">
                <Image
                  src="/icons/stage3.svg"
                  alt="Architecture"
                  width={120}
                  height={120}
                  className="relative -top-6 -left-6"
                />
              </div>
              <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                03
              </span>
              <h3 className="text-2xl font-bold mt-24">
                Architecture and DevOps.
              </h3>
              <p className="text-black font-medium leading-relaxed opacity-90">
                Before development begins, our architects design the system for
                how it needs to perform at scale not just at launch. We select
                the right tech stack, define the cloud infrastructure on AWS,
                Azure, or GCP, and set up CI/CD pipelines and DevOps workflows
                from day one.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="relative grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 mt-40">
            {/* Stage 05 */}
            <div className="relative flex flex-col justify-center p-4 max-w-xs top-20">
              <div className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl">
                <span className="absolute top-0 right-0 h-[4px] w-full bg-gradient-to-r from-white via-[#5AC56B] to-[#5AC56B] rounded-full"></span>
                <span className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-[#5AC56B] via-[#5AC56B] to-white rounded-full"></span>
              </div>
              <div className="absolute -top-8 left-10">
                <Image
                  src="/icons/stage5.svg"
                  alt="Support"
                  width={120}
                  height={120}
                  className="relative -top-6 -left-6"
                />
              </div>
              <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                05
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-16">
                24/7 Maintenance and Support
              </h3>
              <p className="text-black font-medium leading-relaxed opacity-90 mt-2">
                Launch is not the finish line, it's the starting point. After
                go-live, our team monitors performance, applies security
                patches, ships feature updates, and responds to issues around
                the clock. Every client gets a dedicated support channel, not a
                ticket queue.
              </p>
            </div>

            {/* Stage 04 */}
            <div className="relative bg-[#A576C2] text-white p-10 rounded-2xl rounded-bl-none min-h-[380px] w-[420px] flex flex-col justify-between">
              <Image
                src="/icons/stagearrow4.svg"
                alt="arrow"
                width={120}
                height={60}
                className="absolute -left-36 top-1/2 -translate-y-1/2 opacity-60"
              />
              <div className="absolute -top-8 left-10">
                <Image
                  src="/icons/stage4.svg"
                  alt="Development"
                  width={120}
                  height={120}
                  className="relative -top-6 -left-6"
                />
              </div>
              <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                04
              </span>
              <h3 className="text-2xl font-bold mt-20">
                Full-Stack Development & Delivery
              </h3>
              <p className="text-black font-medium leading-relaxed opacity-90">
                Development runs in agile sprints with regular demos, code
                reviews, and QA testing built into every cycle. Our full-stack
                team handles frontend, backend, APIs, and third-party
                integrations for web platforms, mobile apps, or both, shipping
                incrementally so you see progress every two weeks.
              </p>
            </div>
          </div>
        </div>
        {/* end desktop layout */}
      </div>
    </section>
  );
}
