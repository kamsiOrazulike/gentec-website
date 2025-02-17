/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
// import HeroSketch from "./components/HeroSketch";
import ServiceCarousel from "./components/Carousel";
import ClientMarquee from "./components/Marquee";
import HeroCarousel from "./components/HeroCarousel";

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
    {
      name: "Manpower Resource Management & Training",
      description:
        "Expert professionals to power your projects and train your workforce.",
      isNew: false,
    },
    {
      name: "Project Management Services",
      description:
        "We provide project management services for the entire project lifecycle.",
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
      <HeroCarousel />

      {/* About Us Section */}
      <section className="relative py-20 bg-gray-50 px-8 overflow-hidden">
        {/* Dot Matrix Background */}
        <div>
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
              backgroundSize: "10px 10px",
            }}
          />
          {/* Top Fade */}
          <div
            className="absolute top-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgb(249 250 251) 0%, transparent 100%)",
            }}
          />
          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to top, rgb(249 250 251) 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Who we <span className="text-red-600">Are</span>
              </h2>
              <p className="text-gray-600 mb-12">
                Genesis Technical Company Limited (GENTEC), founded in 1997, is
                a world-class oil and gas technical services company with a
                strong customer focus and commitment to providing exceptional
                services.
              </p>
              <Link
                href="/about-us"
                className="border border-black text-black px-8 py-3 rounded-nonehover:bg-white hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 mt-4 text-base"
              >
                Learn More About Us
              </Link>
            </div>
            <div>
              <Image
                src="/static/imgs/image6.png"
                alt="Gentec Facilities"
                width={800}
                height={500}
                className="w-full rounded-lg shadow-lg"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gray-50 px-8">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What we <span className="text-red-600">Do</span>
          </h2>
          <ServiceCarousel services={services} />
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Dot Matrix Background */}
        <div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
              backgroundSize: "10px 10px",
            }}
          />
          {/* Top Fade */}
          <div
            className="absolute top-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to bottom, white 0%, transparent 100%)",
            }}
          />
          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 z-10"
            style={{
              background: "linear-gradient(to top, white 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900">
              Our <span className="text-red-600">Clients</span>
            </h2>
            <p className="text-gray-600 mt-4">
              We've had the privilege of working with leading companies in the
              oil and gas industry
            </p>
          </div>
          <ClientMarquee clients={clients} />
        </div>
      </section>
    </main>
  );
}
