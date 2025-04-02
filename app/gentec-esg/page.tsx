"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { LeafIcon, UsersIcon, ScaleIcon } from "lucide-react";
import Scrollbutton from "@/components/ScrollButton";

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
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/static/media/warehouse2.png"
          alt="Environmental, Social, and Governance"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
                Environmental, Social and Governance (ESG)
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                GENTEC drives sustainability through ethical operations,
                environmental responsibility, and strong governance, ensuring
                long-term value for stakeholders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#environmental"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <LeafIcon className="w-5 h-5" />
                  <span>Environmental</span>
                </a>
                <a
                  href="#social"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <UsersIcon className="w-5 h-5" />
                  <span>Social</span>
                </a>
                <a
                  href="#governance"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm border border-white/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <ScaleIcon className="w-5 h-5" />
                  <span>Governance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Scroll Margins */}
      <div className="container mx-auto px-4 py-16">
        {/* Environmental Section */}
        <div id="environmental" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <LeafIcon className="w-5 h-5" />
                <span className="font-semibold">Environmental</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sustainable Resource Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Committed to sustainable resource management through
                comprehensive environmental strategies, focusing on emissions
                reduction and strict compliance with environmental regulations.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Environmental Commitment
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Emissions Reduction Strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Sustainable Resource Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Environmental Compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Conservation Initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Environmental Impact Assessments</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/warehouse7.png"
                alt="Environmental Initiatives"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div id="social" className="scroll-mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100 order-2 md:order-1">
              <Image
                src="/static/media/people3.png"
                alt="Social Initiatives"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <UsersIcon className="w-5 h-5" />
                <span className="font-semibold">Social</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Community and Employee Empowerment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Focusing on local capacity development, employee welfare, and
                meaningful community engagement initiatives that create
                sustainable social impact.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Social Development Priorities
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Local Capacity Building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Employee Development Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Community Engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Diversity and Inclusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Health and Safety Initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Skills Transfer Programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Section */}
        <div id="governance" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">
                <ScaleIcon className="w-5 h-5" />
                <span className="font-semibold">Governance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ethical Business Practices
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Maintaining the highest standards of ethical business practices,
                ensuring regulatory compliance, and implementing transparent
                corporate policies that build trust and integrity.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Governance Framework
                </h3>
                <ul className="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Transparent Decision-Making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Regulatory Compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Ethical Business Conduct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Corporate Accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Risk Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Stakeholder Transparency</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/static/media/gentec9.png"
                alt="Governance Practices"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* ESG Commitment Section */}
        <div className="bg-gray-50 py-16 mt-16 rounded-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our ESG Commitment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                By integrating ESG principles into our operations, GENTEC
                ensures long-term value creation for stakeholders and
                contributes to a more sustainable future.
              </p>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-4">
                      Environmental
                    </h3>
                    <p className="text-gray-600">
                      Sustainable resource management, emissions reduction, and
                      compliance with environmental regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-4">
                      Social
                    </h3>
                    <p className="text-gray-600">
                      Local capacity development, employee welfare, and
                      community engagement initiatives.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-4">
                      Governance
                    </h3>
                    <p className="text-gray-600">
                      Ethical business practices, regulatory compliance, and
                      transparent corporate policies.
                    </p>
                  </div>
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

export default ESGContent;
