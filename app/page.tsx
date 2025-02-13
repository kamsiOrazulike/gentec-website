/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const services = [
    {
      name: "Warehousing & Logistics",
      description:
        "91,000 square meters of open yard warehousing space with comprehensive logistics solutions.",
      isNew: true,
    },
    {
      name: "Engineering Services",
      description:
        "Complete engineering design, project management, and NDT inspection services.",
      isNew: false,
    },
    {
      name: "Technical Support",
      description:
        "OEM equipment representation with comprehensive after-sales support and maintenance.",
      isNew: true,
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Content Container */}
      <div
        className="relative z-10 min-h-screen"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(25,25,25,0.8))",
        }}
      >
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/api/placeholder/1920/1080"
              alt="Gentec Facilities"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                  World-Class Oil and Gas Services
                </h1>
                <p className="text-white/60 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8">
                  Delivering exceptional warehousing, logistics, and engineering
                  solutions since 1997.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm sm:text-base text-white/70 uppercase tracking-wider font-medium">
                  Our Services
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 hover:border-white/30 rounded-lg overflow-hidden transition-colors duration-300 p-6"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <h3 className="text-white text-lg font-medium">
                        {service.name}
                      </h3>
                      {service.isNew && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
