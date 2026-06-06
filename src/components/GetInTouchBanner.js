import Image from "next/image";
import Link from "next/link";

/**
 * Shared GET IN TOUCH banner used across all service pages.
 *
 * Props:
 *   eyebrow     – small coloured label above the heading
 *   heading     – main H2
 *   description – optional body paragraph
 *   ctaText     – button label
 *   ctaLink     – button href
 *   image       – right-side illustration path
 *   imageAlt    – alt text for the illustration
 *   bgClass     – Tailwind background class(es) for the card (colour or gradient)
 *   darkBg      – set true when the card background is dark so heading/text become white
 */
export default function GetInTouchBanner({
  eyebrow = "GET INTO TOUCH",
  heading = "Got an Idea? Let's Make It Real.",
  description = "Whether you're starting from scratch or scaling an existing product, tell us what you're working on and our software development team in Chennai will figure out the best way to build it together.",
  ctaText = "Talk to Our Experts",
  ctaLink = "/contact-us",
  image = "/Home/getintouch.svg",
  imageAlt = "Contact Trimsel",
  bgClass = "bg-[#F2DFFF]",
  darkBg = false,
}) {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="flex justify-center px-4 sm:px-6">
        <div
          className={`relative w-full max-w-6xl px-6 py-10 sm:px-12 md:py-12 min-h-[280px] md:min-h-[320px] rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between ${bgClass}`}
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10 w-full md:w-[60%] lg:w-1/2 text-left">
            <h3 className="text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              {eyebrow}
            </h3>

            <h2
              className={`mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl ${
                darkBg ? "text-white" : "text-gray-900"
              }`}
            >
              {heading}
            </h2>

            {description && (
              <p
                className={`mt-4 font-medium text-sm sm:text-base max-w-lg ${
                  darkBg ? "text-white/90" : "text-black"
                }`}
              >
                {description}
              </p>
            )}

            <Link
              href={ctaLink}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
            >
              {ctaText}
              <Image
                src="/Home/right-arrow.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full md:w-[40%] lg:w-1/2 flex justify-end items-end self-stretch">
            <Image
              src={image}
              alt={imageAlt}
              width={700}
              height={700}
              className="md:absolute md:bottom-0 md:right-0 w-full h-[280px] sm:h-[320px] md:h-[420px] object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
