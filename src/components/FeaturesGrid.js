import Image from "next/image";

const gridCols = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function FeaturesGrid({
  eyebrow,
  heading,
  description,
  features = [],
  columns = 3,
  dark = false,
  sectionClass = "bg-white",
}) {
  const cols = gridCols[columns] || gridCols[3];

  if (dark) {
    return (
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto bg-black rounded-3xl p-8 shadow-2xl border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[900px] h-[200px] bg-[linear-gradient(90deg,#4686FF,#9005E5,#1D55C7)] rounded-2xl opacity-60 blur-[280px]" />
          </div>

          <div className="mb-8">
            {eyebrow && (
              <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                {eyebrow}
              </h3>
            )}
            <h2 className="mt-4 text-center text-2xl text-white md:text-4xl font-semibold">
              {heading}
            </h2>
            {description && (
              <p className="mt-4 max-w-5xl mx-auto text-center text-white font-medium">
                {description}
              </p>
            )}
          </div>

          <div className={`grid ${cols} gap-6`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-5">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                {feature.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${sectionClass} py-16`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {eyebrow && (
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            {eyebrow}
          </h3>
        )}
        <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            {description}
          </p>
        )}

        <div className={`mt-12 grid ${cols} gap-6`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={40}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              {feature.description && (
                <p className="text-base text-gray-700 font-medium leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
