"use client";
import Link from "next/link";
import Image from "next/image";
import ServiceCarousel from "./components/Carousel";
import ClientMarquee from "./components/Marquee";
import HeroCarousel from "./components/HeroCarousel";
import ScrollButton from "./components/ScrollButton";
import AnimatedCounter from "./components/AnimatedCount";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const aboutSectionRef = useRef(null);
  const metricsSectionRef = useRef(null);
  const expertiseSectionRef = useRef(null);
  const clientsSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".metric-item",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: metricsSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".expertise-text",
        { opacity: 0, x: -40 },
        {
          scrollTrigger: {
            trigger: expertiseSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".expertise-carousel",
        { opacity: 0, x: 40 },
        {
          scrollTrigger: {
            trigger: expertiseSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".clients-header",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: clientsSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    return () => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const expertiseAreas = [
    {
      name: "Drilling & Well Services",
      description:
        "We provide comprehensive drilling solutions through our joint venture with Shelf Drilling, combining field-proven techniques with advanced technologies to ensure safe, efficient, and productive operations across onshore and offshore locations in Nigeria and West Africa.",
      isNew: false,
      imageSrc: "/static/media/gentec2.png",
      link: "oil-gas-services",
    },
    {
      name: "Engineering, Procurement & Construction (EPC)",
      description:
        "As experts in integrated project delivery, we provide comprehensive EPC solutions covering the entire project lifecycle from concept engineering and detailed design to procurement, construction, and commissioning, all tailored to meet international quality standards in the oil and gas industry.",
      isNew: false,
      imageSrc: "/static/media/gentec4.png",
      link: "engineering-services",
    },
    {
      name: "Pipeline Services",
      description:
        "Our end-to-end pipeline solutions ensure safe, efficient, and regulatory-compliant transport of hydrocarbons across diverse terrains.",
      isNew: false,
      imageSrc: "/static/media/pipe2.png",
      link: "oil-gas-services",
    },
    {
      name: "Fabrication",
      description:
        "We deliver precision-engineered fabrication services, offering scalable solutions built to meet the rigorous demands of the oil and gas sector.",
      isNew: false,
      imageSrc: "/static/media/working3.png",
      link: "engineering-services",
    },
    {
      name: "Logistics & Warehousing",
      description:
        "Our comprehensive logistics and warehousing services include 91,000 square meters of open yard warehousing space supported by cranes, trucks, and earth moving equipment, ensuring seamless supply chain operations in remote and high-demand project environments across Nigeria.",
      isNew: false,
      imageSrc: "/static/media/warehouse8.png",
      link: "logistics-management",
    },
    {
      name: "Exploration & Production",
      description:
        "We enhance upstream performance through strategic field support, technical innovation, and strict adherence to safety standards—helping partners optimize hydrocarbon recovery and unlock asset value.",
      isNew: true,
      imageSrc: "/static/media/jackuprig.png",
      link: "exploration-production",
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
      {/* Hero Section */}
      <div className="hero-content">
        <HeroCarousel />
      </div>

      {/* About Us Section */}
      <section
        ref={aboutSectionRef}
        className="relative py-20 bg-white px-8 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="about-text">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Who we <span className="text-red-600">Are</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Genesis Technical Company Limited (GENTEC), founded in 1997, is
                a wholly Nigerian-owned integrated oilfield services company with an
                indigenous workforce of over 2,500 professionals—99% of whom are Nigerian—underscoring
                our commitment to local content development, technology transfer, and national capacity building.
              </p>
              <p className="text-gray-600 mb-12">
                Through strategic joint ventures, including Shelf Drilling Nigeria and Genesis Kreuz Subsea,
                we deliver comprehensive services across the entire oil and gas value chain. Driven by our &quot;Can-Do&quot; mindset,
                we consistently provide innovative solutions, operational excellence, and strict regulatory compliance with a focus on
                health, safety, and environmental standards in every project we undertake.
              </p>
              <Link
                href="/about-us"
                className="border border-black text-black px-8 py-3 rounded-nonehover:bg-white hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 mt-4 text-base"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <Image
                src="/static/media/warehouse2.png"
                alt="Gentec Facilities"
                width={800}
                height={500}
                className="w-full rounded-lg shadow-lg"
                quality={90}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsSectionRef} className="relative py-20 bg-white">
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
            <div className="metric-item flex flex-col items-center text-center">
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
                <AnimatedCounter endValue={40000} suffix="+" useCommas={true} />
              </div>
              <div className="text-gray-600">Dives and more</div>
            </div>

            {/* Metric 2 */}
            <div className="metric-item flex flex-col items-center text-center">
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
                <AnimatedCounter endValue={11} suffix=" Mill" />
              </div>
              <div className="text-gray-600">Man-hours subsea work</div>
            </div>

            {/* Metric 3 */}
            <div className="metric-item flex flex-col items-center text-center">
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
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter endValue={150} suffix="+" />
              </div>
              <div className="text-gray-600">Projects</div>
            </div>

            {/* Metric 4 */}
            <div className="metric-item flex flex-col items-center text-center">
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
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter endValue={100} suffix="%" />
              </div>
              <div className="text-gray-600">Repeat Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Changed from Services */}
      <section
        ref={expertiseSectionRef}
        className="relative py-20 bg-white px-8"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Text Content */}
            <div className="expertise-text lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Expertise</span>
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  We provide comprehensive solutions across four key business
                  areas, delivering technical excellence and innovative
                  approaches to every project. Our expert teams bring years of
                  experience and industry knowledge to meet the unique
                  challenges of the oil and gas sector.
                </p>
                <p className="mt-4">
                  From engineering services to exploration and production, we
                  maintain the highest standards of quality and safety while
                  delivering exceptional value to our clients.
                </p>
              </div>
              <Link
                href="/expertise"
                className="border border-black text-black px-8 py-3 rounded-none hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 inline-block text-base"
              >
                Explore Our Expertise
              </Link>
            </div>

            {/* Carousel */}
            <div className="expertise-carousel lg:w-2/3">
              <ServiceCarousel services={expertiseAreas} />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        ref={clientsSectionRef}
        className="relative py-20 bg-white overflow-hidden"
      >
        {/* Background elements */}
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
          <div className="clients-header text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900">
              Our <span className="text-red-600">Clients</span>
            </h2>
            <p className="text-gray-600 mt-4">
              We&apos;ve had the privilege of working with leading companies in
              the oil and gas industry
            </p>
          </div>
          <ClientMarquee clients={clients} />
        </div>
      </section>
      <ScrollButton />
    </main>
  );
}
