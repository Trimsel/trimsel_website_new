import Image from "next/image";

export default function SolutionSection({
  tag = "THE SOLUTION",
  title,
  description,
  image,
  imageClass = "",
}) {
  return (
    <section className="w-full relative overflow-hidden py-8 md:py-16 flex items-center">

      {/* ===== RIGHT IMAGE - DESKTOP ===== */}
      <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-0 justify-end h-full items-center">
        <div className={`relative ${imageClass || "w-[500px] lg:w-[650px] xl:w-[750px]"}`}>
          <Image
            src={image}
            alt="solution desktop"
            width={1000}
            height={800}
            className="w-full h-auto object-contain object-right"
            priority
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="max-w-xl px-6 md:pl-12 lg:pl-16 z-10 py-6 md:py-12">

            {/* TAG */}
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              {tag}
            </h3>

            {/* TITLE */}
            <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              {title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-700 text-md md:lg font-medium leading-relaxed">
              {description}
            </p>

          </div>

          {/* ===== RIGHT IMAGE - MOBILE ===== */}
          <div className="flex justify-center md:hidden px-6 mt-4 pb-10">

            <div className="relative w-full max-w-[280px]">

              <Image
                src={image}
                alt="solution mobile"
                width={1000}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />

            </div>

          </div>

        </div>
      </div>
    </section >
  );
}