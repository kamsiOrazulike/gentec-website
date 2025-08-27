"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { LeafIcon, UsersIcon, ScaleIcon } from "lucide-react";
import Scrollbutton from "@/components/ScrollButton";
import HeroSketch from "@/components/HeroSketch";

const ESGContent = () => {
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
    <div>
      <div className="bg-[#006400] relative overflow-hidden">
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <div className="-mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6 order-2 lg:order-1">
              <h2 className="text-xl tracking-wider text-green-200 font-light">2025 Gentec profile</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Environmental, Social and Governance <span className="text-green-200">(ESG)</span>
              </h1>
              
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed mt-4">
                At GenTec, sustainability and safety are core pillars of
                our operations. We are committed to creating long-term
                value for our stakeholders through responsible
                environmental stewardship, ethical governance, and
                rigorous health and safety standards for our workforce
                and communities.
              </p>
              
              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href="#environmental"
                  className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <LeafIcon className="w-5 h-5" />
                  <span>Environmental</span>
                </a>
                <a
                  href="#social"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-green-200/30 transition-colors flex items-center justify-center gap-2"
                >
                  <UsersIcon className="w-5 h-5" />
                  <span>Social</span>
                </a>
                <a
                  href="#governance"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-green-200/30 transition-colors flex items-center justify-center gap-2"
                >
                  <ScaleIcon className="w-5 h-5" />
                  <span>Governance</span>
                </a>
              </div>
            </div>
            
            {/* Right Column - HeroSketch Globe Component */}
            <div className="order-1 lg:order-2 flex justify-center items-center py-6 lg:py-16">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
                {/* Import HeroSketch component */}
                <div className="absolute inset-0 z-10 globe-container">
                  <HeroSketch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our ESG Commitment Section (White Background) */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center">
              Our ESG Commitment
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              {/* Environmental Stewardship Section */}
              <div id="environmental" className="scroll-mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-full mb-4">
                      <LeafIcon className="w-5 h-5" />
                      <span className="font-semibold">Environmental</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">
                      Environmental Stewardship:
                    </h3>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-green-800 text-lg leading-relaxed mb-6">
                      We are dedicated to reducing our environmental footprint through
                      sustainable practices, efficient resource management, and 
                      compliance with stringent environmental regulations.
                    </p>
                    
                    <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
                      <h3 className="font-bold text-green-800 mb-4 text-xl">
                        Our Environmental Initiatives
                      </h3>
                      <ul className="text-green-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Emissions Reduction & Carbon Footprint Management</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Sustainable Resource Utilization</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Environmental Compliance & Certification</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Ecosystem Preservation Initiatives</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Comprehensive Environmental Impact Assessments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Responsibility Section */}
              <div id="social" className="scroll-mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-full mb-4">
                      <UsersIcon className="w-5 h-5" />
                      <span className="font-semibold">Social</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">
                      Social Responsibility:
                    </h3>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-green-800 text-lg leading-relaxed mb-6">
                      We invest in local communities, focusing on capacity building, employee
                      welfare, and fostering social inclusion through targeted
                      initiatives that support Nigerian content development.
                    </p>
                    
                    <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
                      <h3 className="font-bold text-green-800 mb-4 text-xl">
                        Our Social Development Programs
                      </h3>
                      <ul className="text-green-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Local Content Development & Implementation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Comprehensive Employee Development Programs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Strategic Community Engagement & Investment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Workplace Diversity and Inclusion</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Rigorous Health, Safety & Environment Standards</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Technology & Knowledge Transfer Programs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Governance Section */}
              <div id="governance" className="scroll-mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-full mb-4">
                      <ScaleIcon className="w-5 h-5" />
                      <span className="font-semibold">Governance</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">
                      Governance:
                    </h3>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-green-800 text-lg leading-relaxed mb-6">
                      We uphold the highest standards of integrity with a strong focus on transparent
                      decision-making, ethical business practices, and rigorous
                      regulatory compliance across our operations.
                    </p>
                    
                    <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
                      <h3 className="font-bold text-green-800 mb-4 text-xl">
                        Our Governance Framework
                      </h3>
                      <ul className="text-green-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Transparent Corporate Decision-Making</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Stringent Regulatory Compliance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Ethical Business Conduct & Anti-Corruption</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Clear Corporate Accountability Structure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Comprehensive Risk Management Framework</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span>Stakeholder Engagement & Transparency</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full Green Banner */}
      <div className="bg-green-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10">
          <Image 
            src="/static/media/gentec9.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Commitment to Sustainability
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              By integrating ESG principles into our operations, GENTEC
              ensures long-term value creation for stakeholders and
              contributes to a more sustainable future for Nigeria and beyond.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-green-300/30">
                <LeafIcon className="w-10 h-10 text-green-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-green-300 mb-3">
                  Environmental
                </h3>
                <p className="text-white/80">
                  Sustainable resource management, emissions reduction, and
                  compliance with environmental regulations.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-green-300/30">
                <UsersIcon className="w-10 h-10 text-green-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-green-300 mb-3">
                  Social
                </h3>
                <p className="text-white/80">
                  Local capacity development, employee welfare, and
                  community engagement initiatives.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-green-300/30">
                <ScaleIcon className="w-10 h-10 text-green-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-green-300 mb-3">
                  Governance
                </h3>
                <p className="text-white/80">
                  Ethical business practices, regulatory compliance, and
                  transparent corporate policies.
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

export default ESGContent;
