import Image from "next/image";

const VARIANTS = {
  gold: {
    gradient: "fffff",
    text: "from-[#d8a64a] to-[#f1d9a7]",
    border: "border-gray-300",
  },
  blue: {
    gradient: "fffff",
    text: "from-[#4f46e5] to-[#06b6d4]",
    border: "border-indigo-200",
  },
  dark: {
    gradient: "fffff",
    text: "from-[#38bdf8] to-[#818cf8]",
    border: "border-gray-600",
  },
};

export default function StatsSection({
  stats = [],
  image = "",
  variant = "gold",
  className = "",
}) {
  const styles = VARIANTS[variant] || VARIANTS.gold;

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>

      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`}
      />

      {/* PATTERN */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.05),transparent_40%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16">

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 text-center gap-y-10 sm:gap-y-12 mb-16">
          {stats.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${i !== stats.length - 1 ? `md:border-r ${styles.border}` : ""
                }`}
            >
              <h2
                className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${styles.text}`}
              >
                {item.value}
              </h2>

              <p
                className={`mt-2 text-md md:text-lg font-medium ${variant === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ===== IMAGE ===== */}
        {image && (
          <div className="flex justify-center items-end">
            <div className="w-full max-w-4xl">
              <Image
                src={image}
                alt="app preview"
                width={1000}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                priority
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}