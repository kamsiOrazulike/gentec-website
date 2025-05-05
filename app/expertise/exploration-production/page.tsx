/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Droplets, Gauge, BarChart3Icon } from "lucide-react";
import Scrollbutton from "@/components/ScrollButton";

const ExplorationProductionContent = () => {
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
          src="/static/media/jackuprig.png"
          alt="Exploration & Production"
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
                Exploration & Production
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">
                We enhance upstream performance through strategic field support, technical
                innovation, and strict adherence to safety standards — helping partners
                optimize hydrocarbon recovery and unlock asset value.
              </p>
              <div className="overflow-x-auto">
                <div className="flex gap-4 text-sm whitespace-nowrap">
                  <a
                    href="#ede"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Droplets className="w-5 h-5" />
                    <span>EDE E&P Limited</span>
                  </a>
                  <a
                    href="#ppl229"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Gauge className="w-5 h-5" />
                    <span>PPL 229 Asset</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-red-500 text-white py-3 text-center font-bold tracking-wider">
        <div className="container mx-auto">OPERATOR OF PPL 229</div>
      </div>

      {/* Content Sections with Scroll Margins */}
      <div className="container mx-auto px-4 py-16">
        {/* EDE Exploration Section */}
        <div id="ede" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/static/media/edelogo.png"
                    alt="EDE E&P Logo"
                    width={40}
                    height={40}
                  />
                  <span className="font-semibold">
                    EDE Exploration & Production Limited
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                EDE Exploration and Production Limited
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A full-cycle energy company focused on the exploration, development,
                and production of hydrocarbons, contributing to Nigeria's energy
                security and resource optimization.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Company Overview:
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Leading upstream operator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Technical & operational support from GenTec</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Focus on efficient resource management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Contribution to national energy security</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/gentec10.png"
                alt="Offshore Operations"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* PPL 229 Section */}
        <div id="ppl229" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/ede1.png"
                alt="PPL 229 Asset Map"
                fill
                className="object-contain bg-white"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Gauge className="w-5 h-5" />
                <span className="font-semibold">
                  Petroleum Prospecting License (PPL) 229
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Petroleum Prospecting License (PPL) 229
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Awarded in 2022, PPL 229 covers 61.33 sq. km in shallow offshore waters
                with a depth of approximately 72 feet. The block includes the Ede Field —
                a confirmed oil and gas field — along with several other discovered but
                undeveloped hydrocarbon prospects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Asset Highlights:
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>One Discovered Gas and Oil Field</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>3 Wells and 2 Sidetracks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Multiple Hydrocarbon Reservoirs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Water Depth ~72 Feet</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Strategic Significance:
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Strategic Offshore Location</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Promising Hydrocarbon Reserves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Advanced Exploration Potential</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Key Asset for Future Growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Quality and Drill Stem Tests Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
              <BarChart3Icon className="w-5 h-5" />
              <span className="font-semibold">Excellent Quality Data</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Seismic and Well Data Analysis
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our comprehensive data analysis validates key hydrocarbon-bearing
              reservoirs and demonstrates exceptional well deliverability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
              <Image
                src="/static/media/data1.png"
                alt="Seismic to Well Ties"
                fill
                className="object-contain bg-white"
                quality={90}
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Seismic to Well Ties
                  </h3>
                  <p>
                    Our advanced geological analysis validates the key
                    hydrocarbon-bearing reservoirs through precise seismic to
                    well correlations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
              <Image
                src="/static/media/data2.png"
                alt="Well Log Data"
                fill
                className="object-contain bg-white"
                quality={90}
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Drill Stem Tests</h3>
                  <p>
                    Comprehensive drill stem tests have conclusively proven the
                    well deliverability, demonstrating a production capacity of
                    approximately 3,000 barrels per day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Seismic Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Precise correlation between seismic data and well logs
                  validates the key hydrocarbon-bearing reservoirs, ensuring
                  accurate geological interpretation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Reservoir Potential
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced analysis demonstrates the significant hydrocarbon
                  potential, with drill stem tests confirming substantial
                  production capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scrollbutton />
    </div>
  );
};

export default ExplorationProductionContent;
