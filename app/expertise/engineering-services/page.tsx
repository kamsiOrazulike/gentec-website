"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { WrenchIcon, PiIcon, PencilRulerIcon, Building2 } from "lucide-react";
import Scrollbutton from "@/components/ScrollButton";

const EngineeringServicesContent = () => {
  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const initScrolling = async () => {
      const gsapModule = await import("gsap");
      const ScrollToPluginModule = await import("gsap/ScrollToPlugin");

      const gsap = gsapModule.default;
      const ScrollToPlugin = ScrollToPluginModule.default;

      gsap.registerPlugin(ScrollToPlugin);

      // Add click handlers to all anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();

          const element = anchor as HTMLAnchorElement;
          const targetId = element.getAttribute("href");

          if (targetId) {
            const target = document.querySelector(targetId);

            if (target) {
              gsap.to(window, {
                duration: 1,
                scrollTo: {
                  y: target,
                  offsetY: 80,
                },
                ease: "power2.out",
              });
            }
          }
        });
      });
    };

    initScrolling();
  }, []);

  return (
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full">
        <Image
          src="/static/media/gentec3.png"
          alt="Engineering Services"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-48 md:pb-24">
            {/* Adjusted height, padding, and spacing for mobile */}
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-md">
                Engineering, Procurement & Construction (EPC)
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">
                We deliver fully integrated EPC solutions that cover the entire project lifecycle,
                from concept design through detailed engineering to procurement, construction, 
                and commissioning—all tailored to meet international quality standards and local 
                content requirements in the Nigerian oil and gas industry.
              </p>
              <div className="overflow-x-auto">
                <div className="flex gap-4 text-sm whitespace-nowrap">
                  <a
                    href="#design"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <PencilRulerIcon className="w-5 h-5" />
                    <span>Design</span>
                  </a>
                  <a
                    href="#maintenance"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <WrenchIcon className="w-5 h-5" />
                    <span>Maintenance</span>
                  </a>
                  <a
                    href="#pipe-inspection"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <PiIcon className="w-5 h-5" />
                    <span>Pipe Inspection</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Scroll Margins */}
      <div className="container mx-auto px-4 py-16">
        {/* Design Section */}
        <div id="design" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <PencilRulerIcon className="w-5 h-5" />
                <span className="font-semibold">Engineering & Design</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Engineering Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Robust front-end and detailed engineering for pipelines, flow stations,
                and modular systems, optimized for performance, safety, and scalability.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Engineering Capabilities
                </h3>
                <p className="text-gray-600 mb-4">
                  Our engineering expertise enables us to design and optimize complex
                  systems that meet the highest industry standards while ensuring
                  cost-effectiveness and operational efficiency.
                </p>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Pipeline Engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Flow Station Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Modular System Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Safety Engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Scalability Planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/warehouse2.png"
                alt="Design Engineering"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Mechanical & Electrical Maintenance Section */}
        <div id="maintenance" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/working5.png"
                alt="Mechanical & Electrical Maintenance"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <WrenchIcon className="w-5 h-5" />
                <span className="font-semibold">
                  Procurement
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Strategic Sourcing Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Strategic sourcing of certified materials and equipment through global supply
                networks, ensuring cost-efficiency, quality assurance, and timely delivery.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Procurement Advantages
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Global Supply Network Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Certified Materials Sourcing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Cost Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Quality Assurance Protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Efficient Delivery Systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Section */}
        <div id="pipe-inspection" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">Construction & Modular Fabrication</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Infrastructure Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Execution of large-scale infrastructure and modular units, including tank
                farms, processing plants, and skid systems built for reliability, fast-track
                deployment, and regulatory compliance.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Construction Capabilities
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Tank Farm Construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Processing Plant Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Skid System Fabrication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Modular Unit Assembly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Regulatory Compliance Management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-1/2 relative">
                <Image
                  src="/static/media/pipe3.png"
                  alt="Pipe Inspection"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="h-1/2 relative">
                <Image
                  src="/static/media/working8.png"
                  alt="Technical Team"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scrollbutton />
    </div>
  );
};

export default EngineeringServicesContent;
