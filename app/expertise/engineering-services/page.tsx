"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { WrenchIcon, PiIcon, PencilRulerIcon } from "lucide-react";
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
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/static/media/gentec3.png"
          alt="Engineering Services"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
                Engineering Services
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                We provide specialized engineering solutions that enhance the
                performance, reliability, and safety of energy infrastructure.
              </p>
              <div className="overflow-x-auto">
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a
                    href="#design"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <PencilRulerIcon className="w-5 h-5" />
                    <span>Design</span>
                  </a>
                  <a
                    href="#maintenance"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <WrenchIcon className="w-5 h-5" />
                    <span>Maintenance</span>
                  </a>
                  <a
                    href="#pipe-inspection"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
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
                <span className="font-semibold">Design</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tailored Engineering Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Creating tailored engineering solutions for oil and gas
                facilities, pipelines, and industrial systems, optimizing
                performance and safety through comprehensive design approaches.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Engineering Design Capabilities
                </h3>
                <p className="text-gray-600 mb-4">
                  Delivering innovative designs that integrate advanced
                  technologies for efficiency, sustainability, and regulatory
                  compliance. Our approach combines cutting-edge technological
                  insights with deep industry expertise to create robust,
                  forward-thinking engineering solutions.
                </p>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Facility Process Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>3D Modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Regulatory Compliance</span>
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
                  Mechanical and Electrical Maintenance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Critical Asset Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Delivering expert maintenance services to ensure seamless
                operation, reduce downtime, and extend the lifespan of critical
                assets through proactive and comprehensive maintenance
                strategies.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Maintenance Strategy
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Predictive Maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Condition Monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Emergency Response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Asset Lifecycle Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pipe Inspection Section */}
        <div id="pipe-inspection" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <PiIcon className="w-5 h-5" />
                <span className="font-semibold">Pipe Inspection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Pipeline Integrity Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Utilizing advanced inspection techniques to assess pipeline
                integrity, prevent potential failures, and enhance overall
                operational safety through comprehensive and state-of-the-art
                non-destructive testing methodologies.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Inspection Techniques
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Ultrasonic Examination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Visual Integrity Checks</span>
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
