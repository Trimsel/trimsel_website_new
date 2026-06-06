import Image from "next/image";
import Link from "next/link";

export default function ServiceCardsGrid({
  eyebrow,
  heading,
  description,
  services = [],
  bgColor = "bg-[#f0efeb]",
  dark = false,
  containerClass = null,
}) {
  const header = (
    <div className="mb-8">
      {eyebrow && (
        <h3 className={`text-[#1C75BC] text-center text-2xl font-semibold tracking-widest`}>
          {eyebrow}
        </h3>
      )}
      <h2 className={`mt-4 text-center text-2xl md:text-4xl font-semibold ${dark ? "" : ""}`}>
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 max-w-5xl mx-auto text-center font-medium ${dark ? "text-white" : "text-black"}`}>
          {description}
        </p>
      )}
    </div>
  );

  const cards = (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service, index) => (
        <div
          key={index}
          className={`rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 ${
            dark ? "bg-[#141421]" : "bg-white"
          }`}
        >
          {/* Top: Icon + Title + Description */}
          <div>
            <div className="mb-5">
              <div className="relative w-14 h-14">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="relative z-10 object-contain w-12 h-12"
                />
              </div>
            </div>

            <h3 className={`text-base font-bold mb-3 ${dark ? "text-[#1ea7d7]" : "text-gray-900"}`}>
              {service.title}
            </h3>

            <p className={`text-md leading-relaxed ${dark ? "font-medium" : "text-gray-500"}`}>
              {service.description}
            </p>
          </div>

          {/* Bottom: Arrow Link (only when href is a real URL) */}
          {service.href && service.href !== "#" && (
            <div className="mt-6">
              <Link
                href={service.href}
                className="inline-flex items-center justify-center"
              >
                <Image
                  src="/icons/mobile-stage-arrow.svg"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  if (dark) {
    return (
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0b0b14] to-[#120a1f] rounded-3xl p-8 md:p-12 text-white">
          {header}
          {cards}
        </div>
      </section>
    );
  }

  if (containerClass) {
    return (
      <section className={`${bgColor} py-16 px-4 md:px-12`}>
        <div className={containerClass}>
          <div className="max-w-6xl mx-auto">
            {header}
            {cards}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${bgColor} px-4 md:px-10 py-16`}>
      {header}
      {cards}
    </section>
  );
}
