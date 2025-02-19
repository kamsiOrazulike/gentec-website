/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
// import HeroSketch from "./components/HeroSketch";
import ServiceCarousel from "./components/Carousel";
import ClientMarquee from "./components/Marquee";
import HeroCarousel from "./components/HeroCarousel";
import ScrollButton from "./components/ScrollButton";

export default function Home() {
  const services = [
    {
      name: "Drilling & Drilling Support Services",
      description:
        "Comprehensive drilling solutions with expert support to enhance well performance, efficiency, and safety.",
      isNew: true,
      imageSrc: "/static/imgs/image5.png",
    },
    {
      name: "Engineering, Procurement & Construction Management (EPCM)",
      description:
        "Integrated EPCM services, from project planning to execution, ensuring efficiency in oil and gas infrastructure development.",
      isNew: false,
      imageSrc: "/static/stock_imgs/2.png",
    },
    {
      name: "Operations & Maintenance",
      description:
        "End-to-end operations and maintenance solutions to optimize asset performance, reliability, and lifecycle efficiency.",
      isNew: true,
      imageSrc: "/static/stock_imgs/9.jpg",
    },
    {
      name: "Manpower Supply & Management",
      description:
        "Tailored workforce solutions, providing skilled professionals to meet operational demands and drive productivity.",
      isNew: true,
      imageSrc: "/static/imgs/gentec6.jpg",
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
    <main className="relative min-h-screen bg-white">
      {/* Content Container */}
      {/* Hero Section */}
      <HeroCarousel />
      {/* About Us Section */}
      <section className="relative py-20 bg-white px-8 overflow-hidden">
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

      {/* Metrics Section */}
      <section className="relative py-20 bg-white">
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
        {/* Section Container */}
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Header */}
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Engineering <span className="text-red-600">Excellence</span>
          </h2>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Metric 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                40,000+
              </div>
              <div className="text-gray-600">Dives and more</div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L14 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                11 Mill
              </div>
              <div className="text-gray-600">Man-hours subsea work</div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L12 2L3 7V17L12 22L21 17V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L12 22M12 12L3 7M12 12L21 7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Projects</div>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Repeat Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-white px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Text Content */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Services</span>
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  We offer comprehensive solutions tailored to meet your
                  industry needs. Our expert team brings years of experience and
                  innovative approaches to every project, ensuring excellence in
                  delivery across all our service offerings.
                </p>
                <p className="mt-4">
                  From initial consultation to project completion, we maintain
                  the highest standards of quality and safety while delivering
                  value to our clients.
                </p>
              </div>
              <Link
                href="/projects"
                className="border border-black text-black px-8 py-3 rounded-none hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 inline-block text-base"
              >
                View All Projects
              </Link>
            </div>

            {/* Carousel */}
            <div className="lg:w-2/3">
              <ServiceCarousel services={services} />
            </div>
          </div>
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
      <ScrollButton />
    </main>
  );
}
