import Image from "next/image";

const industries = [
  {
    name: "Healthcare",
    bg: "#CBE6FC",
    icon: "/icons/Healthcare.svg",
    alt: "Healthcare software development and app solutions",
  },
  {
    name: "On-Demand",
    bg: "#ACFFCE",
    icon: "/icons/on-demand.svg",
    alt: "On-demand service app development",
  },
  {
    name: "Entertainment",
    bg: "#EDAFF7",
    icon: "/icons/Entertainment.svg",
    alt: "Entertainment platform development",
  },
  {
    name: "Logistics",
    bg: "#FAD4B6",
    icon: "/icons/Logistics.svg",
    alt: "Logistics and supply chain app development",
  },
  {
    name: "E-Commerce",
    bg: "#FDA8A6",
    icon: "/icons/ecommerce.svg",
    alt: "E-commerce website and app development",
  },
  {
    name: "Real Estate",
    bg: "#F9DF89",
    icon: "/icons/real-estate.svg",
    alt: "Real estate app and platform development",
  },
  {
    name: "Food Delivery",
    bg: "#FFCACE",
    icon: "/icons/food-delivery.svg",
    alt: "Food delivery app development",
  },
  {
    name: "Grocery",
    bg: "#DCCFCB",
    icon: "/icons/grocery.svg",
    alt: "Grocery delivery app development",
  },
  {
    name: "Travel",
    bg: "#A3D5FD",
    icon: "/icons/travel.svg",
    alt: "Travel app and booking platform development",
  },
  {
    name: "Restaurant",
    bg: "#D4F7AA",
    icon: "/icons/restaurant.svg",
    alt: "Restaurant management app development",
  },
  {
    name: "Media",
    bg: "#E080F9",
    icon: "/icons/media.svg",
    alt: "Media streaming platform development",
  },
  {
    name: "EduTech",
    bg: "#7AEE7F",
    icon: "/icons/edutech.svg",
    alt: "EdTech and education app development",
  },
];

/**
 * IndustriesWeServe
 *
 * Props:
 *   eyebrow     {string} — blue label above heading
 *   heading     {string} — main h2
 *   description {string} — body paragraph
 */
export default function IndustriesWeServe({
  eyebrow = "INDUSTRIES WE SERVE",
  heading = "Deep Experience Across the Sectors That Matter.",
  description = "From healthcare and on-demand platforms to logistics, e-commerce, and SaaS — our custom software development and mobile app teams bring the technical depth to build solutions that fit how your industry actually operates. We've delivered across 12+ sectors and counting.",
}) {
  return (
    <section className="bg-[#F5F6FF]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            {eyebrow}
          </h2>
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            {heading}
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            {description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {industries.map((item) => (
            <div
              key={item.name}
              className="flex h-[100px] w-[120px] sm:h-[110px] sm:w-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-white/60 shadow-md transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={40}
                height={40}
                className="object-contain sm:w-[48px] sm:h-[48px]"
              />
              <span className="text-center text-xs sm:text-sm font-semibold text-black">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
