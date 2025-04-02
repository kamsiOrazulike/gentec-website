"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";

export default function Expertise() {
  const expertiseAreas = [
    {
      id: "oil-gas-services",
      title: "Oil & Gas Services",
      description:
        "Expert construction, procurement, and drilling operations with strategic partnerships.",
      longDescription:
        "Our Oil & Gas Services division provides comprehensive solutions across the entire value chain, from exploration to production. With decades of experience and cutting-edge technology, we deliver reliable services in construction, procurement, and drilling operations through strategic partnerships.",
      image: "/static/media/gentec2.png",
      link: "/expertise/oil-gas-services",
      buttonText: "Explore Oil & Gas Services",
      features: [
        "Construction & Procurement",
        "Drilling Operations",
        "Strategic Partnerships with Shelf Drilling",
      ],
    },
    {
      id: "engineering-services",
      title: "Engineering Services",
      description:
        "Specialized mechanical & electrical maintenance, pipe inspection, and design solutions.",
      longDescription:
        "GENTEC's Engineering Services delivers specialized technical solutions with a focus on safety and efficiency. Our team provides comprehensive mechanical and electrical maintenance, advanced pipe inspection services, and innovative design solutions for complex engineering challenges.",
      image: "/static/media/gentec4.png",
      link: "/expertise/engineering-services",
      buttonText: "View Engineering Capabilities",
      features: [
        "Mechanical & Electrical Maintenance",
        "Pipe Inspection & Testing",
        "Engineering Design Solutions",
      ],
    },
    {
      id: "logistics-management",
      title: "Logistics Management",
      description:
        "Comprehensive logistics including warehouse, crew change, manpower, and transport services.",
      longDescription:
        "Our Logistics Management division ensures seamless operations with efficient warehouse management, crew change coordination, and transportation services. We offer end-to-end logistics solutions that minimize downtime and maximize productivity for our clients.",
      image: "/static/media/warehouse8.png",
      link: "/expertise/logistics-management",
      buttonText: "Learn About Logistics",
      features: [
        "Warehouse Management",
        "Crew Change Coordination",
        "Manpower Supply",
        "Marine & Land Transport",
      ],
    },
    {
      id: "exploration-production",
      title: "Exploration & Production",
      description:
        "Ede Exploration and Shallow Production Offshore Platform operations.",
      longDescription:
        "GENTEC's Exploration & Production division specializes in shallow offshore operations through Ede Exploration and Production Limited. With advanced technology and experienced personnel, we conduct safe and efficient offshore platform operations while maintaining the highest environmental standards.",
      image: "/static/media/jackuprig.png",
      link: "/expertise/exploration-production",
      buttonText: "Discover E&P Operations",
      features: [
        "Ede Exploration Operations",
        "Shallow Production Management",
        "Offshore Platform Maintenance",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/static/media/warehouse5.png"
            alt="GENTEC Expertise"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Overlay with gradient for better readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>

        <div className="pt-32 pb-12 container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              Our Expertise
            </h1>
            <p className="text-md md:text-xl text-white max-w-3xl mx-auto mb-10">
              Delivering world-class services across oil & gas, engineering,
              logistics, and exploration with technical excellence and
              innovation
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="bg-white relative z-20">
        {expertiseAreas.map((area, index) => (
          <section
            key={area.id}
            id={area.id}
            className={`py-16 px-6 md:px-16 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div
              className={`max-w-full mx-auto grid grid-cols-1 ${
                index % 2 === 0
                  ? "md:grid-cols-[3fr_2fr]"
                  : "md:grid-cols-[2fr_3fr] md:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  {area.longDescription}
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Key Services:
                  </h3>
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={area.link}
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300 font-medium"
                >
                  {area.buttonText}
                </Link>
              </div>

              {/* Image */}
              <div
                className={`relative h-72 md:h-[450px] rounded-xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="relative z-20 bg-red-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to partner with Us?
          </h2>
          <p className="text-lg mb-8">
            Get in touch with our team to discuss how our expertise can support your
            business needs.
          </p>
            <button
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              }
            }}
            className="inline-block bg-white text-red-900 px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors duration-300"
            >
            Contact Us Today
            </button>
        </div>
      </section>

      <ScrollButton />
    </main>
  );
}
