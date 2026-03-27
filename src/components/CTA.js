import Image from "next/image";
import Link from "next/link";

export default function CTASection({
    title,
    subtitle,
    buttonText = "Get Started →",
    bgGradient = "from-orange-400 to-orange-600",
    image,
    href = "/contactus",
    buttonBg = "bg-white",
    buttonTextColor = "text-black",
    arrowIcon = "/Home/right-arrow.svg",
}) {
    return (
        <section className="w-full px-6 py-16">
            <div
                className={`max-w-7xl mx-auto rounded-2xl px-8 py-10 md:px-12 md:py-12 
        flex flex-col md:flex-row items-center justify-between 
        bg-gradient-to-r ${bgGradient} relative overflow-hidden`}
            >
                {/* LEFT CONTENT */}
                <div className="max-w-xl text-white z-10">
                    <h3 className="text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-3xl lg:text-4xl">
                        {subtitle}
                    </h3>

                    <h2 className="mt-2 text-2xl text-white font-semibold leading-tight sm:text-3xl md:text-3xl lg:text-4xl">
                        {title}
                    </h2>

                    {/* ✅ Dynamic Button */}
                    <Link
                        href={href}
                        className={`${buttonBg} ${buttonTextColor} inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium transition hover:opacity-90 mt-6`}
                    >
                        <span>{buttonText}</span>

                        {arrowIcon && (
                            <Image
                                src={arrowIcon}
                                alt="arrow"
                                width={16}
                                height={16}
                                className="object-contain"
                            />
                        )}
                    </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative mt-10 md:mt-0 md:w-[40%] flex justify-center">
                    <Image
                        src={image}
                        alt="cta"
                        width={350}
                        height={350}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}