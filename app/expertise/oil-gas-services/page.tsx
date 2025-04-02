/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Building2, LucideHardHat, Ship, Users } from "lucide-react";
import Scrollbutton from "@/components/ScrollButton";

const OilGasServicesContent = () => {
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
          src="/static/media/gentec5.png"
          alt="Oil & Gas Services"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24">
            {/* Adjusted height, padding, and spacing for mobile */}
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-md">
                Oil & Gas Services
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">
                Our oil and gas services cover the full spectrum of project
                execution, from infrastructure development to resource
                extraction, ensuring efficiency and safety at every stage.
              </p>
              <div className="overflow-x-auto">
                <div className="flex gap-4 text-sm whitespace-nowrap">
                  <a
                    href="#construction"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Construction</span>
                  </a>
                  <a
                    href="#procurement"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <LucideHardHat className="w-5 h-5" />
                    <span>Procurement</span>
                  </a>
                  <a
                    href="#drilling"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <LucideHardHat className="w-5 h-5" />
                    <span>Drilling</span>
                  </a>
                  <a
                    href="#subsea"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Ship className="w-5 h-5" />
                    <span>Subsea</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Scroll Margins */}
      <div className="container mx-auto px-4 py-16">
        {/* Construction Section */}
        <div id="construction" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">Construction</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Infrastructure Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Building robust infrastructure for the oil and gas sector,
                including pipelines, refineries, and storage facilities, with a
                focus on durability and compliance.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Key Construction Services:
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Pipeline Construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Refinery Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Storage Facility Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Structural Engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Compliance Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Project Execution</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/warehouse5.png"
                alt="Construction Services"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Procurement Section */}
        <div id="procurement" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/working8.png"
                alt="Procurement Services"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <LucideHardHat className="w-5 h-5" />
                <span className="font-semibold">Procurement</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Strategic Sourcing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sourcing high-quality materials and equipment to ensure seamless
                project execution, cost efficiency, and operational excellence.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Procurement Capabilities:
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Strategic Sourcing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Vendor Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Supply Chain Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Cost Efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Quality Assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Logistics Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Drilling Section */}
        <div id="drilling" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Image
                  src="/static/clients/shelfdrilling.webp"
                  alt="Shelf Drilling Logo"
                  width={50}
                  height={25}
                  className="mr-2"
                />
                <span className="font-semibold">Offshore Drilling</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Offshore <span className="text-red-600">Drilling</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our partnership with SHELF DRILLING, the world's largest
                contractor of jack-up rigs, gives us the capacity to provide
                shallow water drilling services for oil and natural gas
                operators throughout the major unconventional platforms in
                Nigeria.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Partnership Highlights
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Access to latest drilling technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Highly skilled operational personnel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Comprehensive shallow water drilling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Proven track record in Nigerian market</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/jackuprig.png"
                alt="Offshore Drilling"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Subsea Section */}
        <div id="subsea" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/gentec3.png"
                alt="Subsea Engineering"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Image
                  src="/static/clients/kreuz.jpg"
                  alt="Kreuz Subsea Logo"
                  width={50}
                  height={25}
                  className="mr-2"
                />
                <span className="font-semibold">Subsea Engineering</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Subsea <span className="text-red-600">Services</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Currently in partnership with KREUZ SUBSEA PTE LIMITED of
                SINGAPORE, providing integrated manned and unmanned offshore
                subsea services with in-house project management and
                installation engineering expertise.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Partnership Capabilities
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Integrated offshore subsea services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>In-house project management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Advanced installation engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>State-of-the-art subsea technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default OilGasServicesContent;
