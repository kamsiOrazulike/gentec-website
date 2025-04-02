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
          src="/static/media/jackuprig.png"
          alt="Exploration & Production"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
                Exploration & Production
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                Our upstream operations focus on Ede Exploration and Shallow
                Production Offshore Platform operations with cutting-edge
                technology and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#exploration"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Droplets className="w-5 h-5" />
                  <span>Ede Exploration</span>
                </a>
                <a
                  href="#production"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Gauge className="w-5 h-5" />
                  <span>Shallow Production</span>
                </a>
                <a
                  href="#metrics"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <BarChart3Icon className="w-5 h-5" />
                  <span>Performance Metrics</span>
                </a>
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
        {/* Ede Exploration Section */}
        <div id="exploration" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Droplets className="w-5 h-5" />
                <span className="font-semibold">Ede Exploration</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Discovering New Reserves
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Ede Exploration division is at the forefront of discovering
                and evaluating new hydrocarbon reserves. Using advanced seismic
                technology and geological expertise, we identify promising
                prospects and assess their commercial viability.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Exploration Capabilities:
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      Advanced seismic data acquisition and processing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Geological and geophysical studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Reservoir analysis and modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Prospect evaluation and risk assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Exploration drilling planning and execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Resource estimation and development planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/exploration.png"
                alt="Ede Exploration"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Shallow Production Section */}
        <div id="production" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/offshore-platform.png"
                alt="Offshore Platform"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <Gauge className="w-5 h-5" />
                <span className="font-semibold">Shallow Production</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Offshore Platform Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                As an operator of shallow water production facilities, we manage
                the entire lifecycle of offshore platforms, ensuring safe,
                efficient, and environmentally responsible operations. Our
                experienced team optimizes production while maintaining the
                highest standards of safety and environmental stewardship.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Production Operations:
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Platform management and operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Production optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Well monitoring and intervention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Facility maintenance and integrity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Environmental monitoring and compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Technical Expertise:
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Reservoir management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Production engineering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Facilities engineering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Operations optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Decommissioning planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Performance Metrics Section */}
        <div id="metrics" className="scroll-mt-24">
          <div className="space-y-6 text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
              <BarChart3Icon className="w-5 h-5" />
              <span className="font-semibold">Performance Metrics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Track Record
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our key performance
              indicators, showcasing our dedication to operational efficiency,
              safety, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-red-600 mb-3">99.5%</div>
              <div className="text-gray-900 font-medium">Production Uptime</div>
              <div className="text-sm text-gray-500 mt-2">
                Industry-leading operational reliability
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-red-600 mb-3">15+</div>
              <div className="text-gray-900 font-medium">Years Experience</div>
              <div className="text-sm text-gray-500 mt-2">
                Proven expertise in the field
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-red-600 mb-3">5,000+</div>
              <div className="text-gray-900 font-medium">Barrels Per Day</div>
              <div className="text-sm text-gray-500 mt-2">
                Consistent production capacity
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-red-600 mb-3">0</div>
              <div className="text-gray-900 font-medium">
                Environmental Incidents
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Commitment to environmental protection
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
