/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";

export default function Expertise() {
  const inspectionServices = [
    "Dye Penetrant Inspection",
    "Magnetic Particle Inspection",
    "Hardness Testing",
    "Positive Material Identification",
    "Close Visual Inspection",
    "Eddy Current Inspection",
    "BHA Inspection",
    "Radiographic Testing",
    "Ultrasonic Testing",
  ];

  const fabricationServices = [
    "Grillage steelwork",
    "Pipe supports",
    "Walkways",
    "Handrails & ladders",
    "Lifting beams",
    "Pipework",
    "Material handling equipment",
    "Modular steelwork",
    "Equipment refurbishment",
  ];

  return (
    <main className="relative min-h-screen bg-image9 bg-fixed bg-cover bg-no-repeat ">
      {/* Hero Section - Keep your existing hero */}
      <section className="relative h-[48vh]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Expertise
            </h1>
            <p className="text-md md:text-lg max-w-3xl mx-auto">
              Delivering world-class oil and gas services with technical
              excellence and innovation
            </p>
          </div>
        </div>
      </section>
      <div className="lg:mx-20">
        {/* Combined Offshore Drilling and Subsea Engineering Section */}
        <section className="relative pt-8 pb-20 bg-white px-8 overflow-hidden">
          <div className="text-center text-black px-4">
            <h1 className="text-xl font-bold mb-8">
              Our <span className="text-red-600">Core</span> Expertise
            </h1>
          </div>
          {/* Divider */}
          <div className="absolute top-16 left-0 w-full flex items-center justify-center my-8">
            <div className="w-full border-t border-gray-200"></div>
            <div className="absolute bg-white px-4">
              <img
                src="/logo2.svg"
                alt="GENTEC Logo"
                className="w-16 h-16 opacity-20"
              />
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:overflow-y-auto">
            {/* Offshore Drilling */}
            <div className="lg:order-1 lg:pr-4">
              <div className="lg:max-w-lg">
                <Image
                  src="/static/clients/shelfdrilling.webp"
                  alt="Offshore Drilling"
                  width={50}
                  height={50}
                  className="w-1/5 mb-6"
                  quality={90}
                  draggable="false"
                />
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Offshore <span className="text-red-600">Drilling</span>
                </h2>
                <p className="text-gray-600">
                  Our partnership with SHELF DRILLING, the world's largest
                  contractor of jack-up rigs, gives us the capacity to provide
                  shallow water drilling services for oil and natural gas
                  operators throughout the major unconventional platforms in
                  Nigeria.
                </p>
              </div>
              <Image
                src="/static/imgs/image5.png"
                alt="Offshore Drilling"
                width={800}
                height={500}
                className="w-full h-[300px] object-cover object-center rounded-lg shadow-lg mt-6"
                quality={90}
                draggable="false"
              />
            </div>

            {/* Subsea Engineering */}
            <div className="lg:order-2 lg:pl-4 pt-4">
              <div className="lg:max-w-lg flex justify-end">
                <Image
                  src="/static/clients/kreuz.jpg"
                  alt="Subsea Engineering"
                  width={50}
                  height={50}
                  className="w-1/5 mb-6"
                  quality={90}
                  draggable="false"
                />
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Subsea <span className="text-red-600">Engineering</span>
              </h2>
              <p className="text-gray-600">
                Currently in partnership with KREUZ SUBSEA PTE LIMITED of
                SINGAPORE, providing integrated manned and unmanned offshore
                subsea services with in-house project management and
                installation engineering expertise.
              </p>
              <Image
                src="/static/imgs/gentec3.jpg"
                alt="Subsea Engineering"
                width={800}
                height={500}
                className="w-full h-[300px] object-cover object-center rounded-lg shadow-lg mt-6"
                quality={90}
                draggable="false"
              />
            </div>
          </div>
        </section>

        {/* Technical Services Section */}
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
            {/* Fade Overlays */}
            <div
              className="absolute top-0 left-0 right-0 h-40 z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgb(249 250 251) 0%, transparent 100%)",
              }}
            />
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
                  Technical <span className="text-red-600">Services</span>
                </h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  NDT Inspection Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inspectionServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Image
                  src="/static/imgs/gentec6.jpg"
                  alt="Technical Services"
                  width={800}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                  quality={90}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fabrication Capabilities Section */}
        <section className="relative py-20 bg-white px-8">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Fabrication <span className="text-red-600">Capabilities</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fabricationServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Image
                  src="/static/imgs/gentec8.jpg"
                  alt="Fabrication Capabilities"
                  width={800}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                  quality={90}
                  draggable="false"
                />
                <Image
                  src="/static/imgs/gentec5.jpg"
                  alt="Fabrication Capabilities"
                  width={800}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                  quality={90}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-16 bg-transparent"></div>{" "}
      {/* Spacer to show background image */}
      <ScrollButton />
    </main>
  );
}
