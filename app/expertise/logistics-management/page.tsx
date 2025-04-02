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
        // Use arrow function to maintain the correct 'this' context
        anchor.addEventListener("click", (e) => {
          e.preventDefault();

          // Use anchor as a proper HTMLAnchorElement
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
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/static/media/warehouse5.png"
          alt="Logistics Management"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
                Logistics Management
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                Comprehensive logistics solutions including warehouse
                operations, crew change management, manpower supply, and
                transport services for the oil and gas industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#warehouse"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <WarehouseIcon className="w-5 h-5" />
                  <span>Warehouse</span>
                </a>
                <a
                  href="#crew-management"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Users className="w-5 h-5" />
                  <span>Crew & Manpower</span>
                </a>
                <a
                  href="#transport"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Ship className="w-5 h-5" />
                  <span>Transport</span>
                </a>
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
                <span className="font-semibold">Warehouse</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                State-of-the-Art Facilities
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our state-of-the-art warehouse facilities ensure efficient
                storage, handling, and distribution of materials and equipment.
                We implement advanced inventory management systems to optimize
                storage space and minimize operational costs.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Warehouse Services:
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Inventory management and control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Material receipt and dispatch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Specialized equipment storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Just-in-time delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Quality inspection and verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Real-time stock monitoring</span>
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

        {/* Crew & Manpower Section */}
        <div id="crew-management" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/people3.png"
                alt="Crew and Manpower"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Crew Change Management</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Seamless Crew Rotations
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provide seamless crew rotation services for offshore and
                  onshore operations. Our crew change management ensures
                  operational continuity and compliance with work-rest
                  regulations.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Coordination of crew rotations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Travel arrangements and logistics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Immigration and documentation support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Emergency crew change management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Manpower Supply</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Skilled Personnel
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Manpower Supply division provides skilled and experienced
                  personnel for various positions in the oil and gas industry.
                  We ensure that all personnel meet the required qualifications
                  and certifications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transport Section */}
        <div id="transport" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <div className="flex space-x-1">
                  <Ship className="w-5 h-5" />
                  <Truck className="w-5 h-5" />
                </div>
                <span className="font-semibold">Marine & Land Transport</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Comprehensive Transport Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our transport division offers comprehensive marine and land
                transportation solutions for equipment, materials, and
                personnel. We maintain a fleet of vessels and vehicles to ensure
                timely and secure delivery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
                    <Ship className="w-5 h-5 text-red-600" />
                    Marine Transport
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Supply vessels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Crew boats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Offshore support vessels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Marine logistics planning</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
                    <Truck className="w-5 h-5 text-red-600" />
                    Land Transport
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Specialized equipment transport</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Personnel transportation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Material delivery services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Route optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-1/2 relative">
                <Image
                  src="/static/media/marine-transport.png"
                  alt="Marine Transport"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="h-1/2 relative">
                <Image
                  src="/static/media/land-transport.png"
                  alt="Land Transport"
                  fill
                  className="object-cover"
                  quality={85}
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

export default LogisticsManagementContent;
