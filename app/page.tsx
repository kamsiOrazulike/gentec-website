/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import HeroSketch from "./components/HeroSketch";

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

  const clients = [
    { name: "Oando", logo: "/static/clients/oando.png" },
    { name: "Baker Hughes", logo: "/static/clients/baker_hughes.png" },
    { name: "CG Century Group", logo: "/static/clients/cg.webp" },
    { name: "Chevron", logo: "/static/clients/Chevron.png" },
    { name: "Total", logo: "/static/clients/total.png" },
    { name: "CIMAT", logo: "/static/clients/cimat.png" },
    { name: "Midwestern Oil & Gas", logo: "/static/clients/midwestern.png" },
    { name: "Nigeria LNG Limited", logo: "/static/clients/lng_ltd.webp" },
    { name: "Transocean", logo: "/static/clients/transocean.png" },
    { name: "Schlumberger", logo: "/static/clients/Schlumberger.png" },
    { name: "Shelf Drilling", logo: "/static/clients/shelfdrilling.webp" },
    { name: "Shell", logo: "/static/clients/shell.png" },
    { name: "Walter Smith", logo: "/static/clients/wsmith.jpg" },
    { name: "WAV", logo: "/static/clients/waventures.jpeg" },
    { name: "Kreuz Subsea", logo: "/static/clients/kreuz.jpg" },
  ];

  return (
    <main className="relative min-h-screen bg-gray-50">
      {/* Content Container */}
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-8">
        <div className="absolute inset-0 z-0">
          <img
            src="/static/imgs/image3.png"
            alt="Gentec Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Space for p5.js sketch */}
            <div className="h-full overflow-hidden">
              <HeroSketch />
            </div>

            {/* Right side - Text content */}
            <div className="text-center lg:text-left px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                World-Class Oil and Gas
                <span className="text-red-600"> Services</span>
              </h1>
              <p className="text-gray-600 text-md sm:text-xl mb-8">
                Delivering exceptional warehousing, logistics, and engineering
                solutions since 1997.
              </p>
              <button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 
                  text-white px-4 py-1 rounded-lg text-md font-medium transition-all duration-300
                  shadow-md hover:shadow-lg border border-red-400 hover:border-red-500"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gray-50 px-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="w-full bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm sm:text-base text-gray-600 uppercase tracking-wider font-medium">
                Our Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 hover:border-red-200 rounded-lg overflow-hidden 
              transition-all duration-300 p-6 shadow-md hover:shadow-lg hover:scale-[1.02]
              group"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <h3 className="text-gray-800 group-hover:text-red-600 text-md font-medium transition-colors duration-300">
                      {service.name}
                    </h3>
                    {service.isNew && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-right">
              <Link
                href="/services"
                className="text-red-600 hover:text-red-700 transition-colors duration-300 inline-block"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 bg-gray-50 px-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About <span className="text-red-600">Gentec</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Genesis Technical Company Limited (GENTEC), founded in 1997, is
                a world-class oil and gas technical services company with a
                strong customer focus and commitment to providing exceptional
                services.
              </p>
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 
                text-white px-6 py-2.5 rounded-lg text-sm font-medium 
                hover:from-red-700 hover:to-red-800 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/69/cd/fa/69cdfa2745f27f739b4300dee47dcae2.jpg"
                alt="Gentec Facilities"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative py-20 bg-white px-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-red-600">Clients</span>
            </h2>
            <p className="text-gray-600 mt-4">
              We've had the privilege of working with leading companies in the
              oil and gas industry
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300 relative w-full h-20"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw"
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
