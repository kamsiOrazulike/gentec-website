"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { WarehouseIcon, Users, Ship, Truck } from "lucide-react";
import Scrollbutton from "@/components/ScrollButton";

const LogisticsManagementContent = () => {
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
          src="/static/media/warehouse5.png"
          alt="Logistics Management"
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
                Logistics & Warehousing
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">
                Our logistics and warehousing services are tailored to support seamless
                supply chain operations in remote and high-demand project environments.
              </p>
              <div className="overflow-x-auto">
                <div className="flex gap-4 text-sm whitespace-nowrap">
                  <a
                    href="#warehouse"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <WarehouseIcon className="w-5 h-5" />
                    <span>Warehouse</span>
                  </a>
                  <a
                    href="#crew-management"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>Crew Management</span>
                  </a>
                  <a
                    href="#manpower"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>Manpower Supply</span>
                  </a>
                  <a
                    href="#transport"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Truck className="w-5 h-5" />
                    <span>Transportation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Scroll Margins */}
      <div className="container mx-auto px-4 py-16">
        {/* Warehouse Section */}
        <div id="warehouse" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <WarehouseIcon className="w-5 h-5" />
                <span className="font-semibold">Material Handling & Storage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Secure Storage Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Secure, well-managed warehousing solutions for bulk and specialised
                equipment, supported by reliable and efficient inventory control systems.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Storage Management Capabilities
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Bulk Equipment Storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Specialized Equipment Handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Digital Inventory Tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Secure Facility Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Equipment Maintenance Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Real-Time Inventory Control</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/warehouse6.png"
                alt="Warehouse Operations"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Crew Change Management Section */}
        <div id="crew-management" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/people3.png"
                alt="Crew Change Management"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Truck className="w-5 h-5" />
                <span className="font-semibold">Project Logistics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                End-to-End Logistics Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                End-to-end transportation and freight solutions — including heavy-lift,
                over-dimensional, and time-critical cargo — executed with precision and reliability.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Logistics Capabilities
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Heavy-Lift Transportation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Over-Dimensional Cargo Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Time-Critical Delivery Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Freight Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Precision Execution Planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Reliable Project Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Manpower Supply Section */}
        <div id="manpower" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Customs & Regulatory Compliance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Seamless Importation Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Expertise in importation protocols and documentation ensures smooth
                border clearance and zero delays for critical project materials and equipment.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Compliance Capabilities
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Importation Protocol Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Documentation Expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Border Clearance Facilitation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Zero-Delay Logistics Planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Regulatory Compliance Assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Customs Process Optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/working8.png"
                alt="Manpower Supply"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Transportation Section */}
        <div id="transport" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <div className="h-1/2 relative">
                <Image
                  src="/static/media/gentec8.png"
                  alt="Marine Transport"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="h-1/2 relative">
                <Image
                  src="/static/media/working6.png"
                  alt="Land Transport"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <div className="flex space-x-1">
                  <Truck className="w-5 h-5" />
                  <Ship className="w-5 h-5" />
                </div>
                <span className="font-semibold">Transportation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Comprehensive Logistics Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Reliable and efficient logistics solutions for the movement of
                heavy equipment, materials, and personnel across project sites,
                ensuring seamless, safe, and timely transportation through
                advanced logistical strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
                    <Ship className="w-5 h-5 text-red-600" />
                    Marine Transport Capabilities
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Specialized Offshore Support Vessels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Advanced Marine Logistics Planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Comprehensive Safety Protocols</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Environmental Compliance Management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
                    <Truck className="w-5 h-5 text-red-600" />
                    Land Transport Solutions
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Specialized Heavy Equipment Transport</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Secure Material Handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Comprehensive Logistics Coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Regulatory Compliance Assurance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default LogisticsManagementContent;
