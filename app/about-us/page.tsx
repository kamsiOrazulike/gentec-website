/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Building2, Users, Wrench, Globe, Award } from "lucide-react";
import ScrollButton from "@/components/ScrollButton";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const features = [
    {
      icon: Users,
      title: "Our People",
      description:
        "A diverse and mobile pool of skilled professionals including highly capable account managers, purchasing specialists, logistics personnel, and inspection specialists supported by our expert engineers and project managers.",
    },
    {
      icon: Wrench,
      title: "Technology",
      description:
        "Successfully identifying market needs to develop effective technologies that meet clients' key drivers of safety, productivity, schedule and cost through collaboration with clients, suppliers and partners.",
    },
    {
      icon: Building2,
      title: "Assets",
      description:
        "Operating a flexible, high-performance fleet of equipment with 91,000 square meters of open yard warehousing space, supported by cranes, trucks, and earth moving equipment.",
    },
    {
      icon: Globe,
      title: "Local Presence",
      description:
        "Building local businesses founded on local leadership and high-quality in-country personnel, delivering responsive support while contributing to local economies and communities.",
    },
  ];

  const tabs = [
    { id: "overview", label: "Company Overview" },
    { id: "values", label: "Priorities & Values" },
    { id: "milestones", label: "Milestones" },
    { id: "leadership", label: "Leadership" },
  ];

  return (
    <main className="min-h-screen bg-image4 bg-cover bg-fixed bg-no-repeat relative">
      {/* Tab Content Background */}
      <div className="absolute inset-0 z-0" />
      {/* Content Container */}
      <div className="relative z-10">
        {/* Vision Section */}
        <div className="relative">
          <div className="relative h-[48vh] bg-transparent w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vision
              </h1>
              <p className="text-md md:text-lg">
                To be a world-class Oil and Gas Development company. Delivering
                exceptional value through continuous innovation, expertise, and
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section with Tabs */}
        <div className="bg-white min-h-screen md:mx-20">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-center">
                <div className="overflow-x-auto scrollbar-hide max-w-full">
                  <nav className="flex space-x-8 min-w-max" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === tab.id
                            ? "border-red-600 text-red-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-4">
            {activeTab === "overview" && (
              <div className="p-8 space-y-12">
                {/* Main Overview Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Image Section */}
                  <div className="relative h-[400px]">
                    <img
                      src="/static/imgs/image6.png"
                      alt="GENTEC Operations"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Company Description */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Genesis Technical Company Limited (GENTEC)
                    </h2>

                    <p className="text-gray-600 text-md mb-6">
                      Founded in 1997, GENTEC is a wholly owned subsidiary of
                      the Genesis Group of Companies, delivering world-class oil
                      and gas services with a strong customer focus.
                    </p>

                    <p className="text-gray-600 mb-6">
                      Our strategy is to maintain a dedicated focus on technical
                      services and leverage decades of industry experience and
                      an outstanding track record to provide best-in-class
                      operations for our customers.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      GENTEC is:
                    </h3>

                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <feature.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer-like Section with Logo Divider */}
                <div className="relative mt-16 pt-16">
                  <div className="absolute top-0 left-0 w-full flex items-center justify-center">
                    <div className="w-full border-t border-gray-200"></div>
                    <div className="absolute bg-white px-4">
                      <img
                        src="/logo2.svg"
                        alt="GENTEC Logo"
                        className="w-16 h-16 opacity-20"
                      />
                    </div>
                  </div>

                  <div className="text-center max-w-3xl mx-auto">
                    <p className="text-gray-600 text-md">
                      GENTEC's dedicated focus on technical excellence,
                      geographic diversity, safe operations, customer
                      relationships and experienced management team make us the
                      preferred choice for customers, employees and
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Left Column - Image */}
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/static/imgs/gentec1.jpg"
                      alt="Gentec Values"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>

                  {/* Right Column - Our Commitment */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-6">
                      <Award className="w-8 h-8 text-red-600" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        Our Commitment
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-8">
                      Our reputation is founded on the ability to deliver
                      world-class services with a strong customer focus and
                      commitment to providing services that meets applicable
                      regulatory and client requirements. At GENTEC, we conduct
                      periodic audits to continually monitor and improve our
                      processes, making us a partner of choice to major Oil and
                      Gas companies.
                    </p>
                  </div>
                </div>
                {/* Corporate Social Responsibility Section */}
                <div>
                  <div className="relative h-[300px] mb-8 rounded-lg overflow-hidden">
                    <Image
                      src="/static/imgs/gentec10.jpg"
                      alt="Corporate Social Responsibility"
                      fill
                      className="object-cover object-top"
                      quality={90}
                    />
                  </div>
                  <div className="flex items-center space-x-3 justify-center mb-6">
                    <Globe className="w-8 h-8 text-red-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Corporate Social Responsibility
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-8">
                    GENTEC is committed to a practical and open approach to
                    Corporate and Social Responsibility (CSR). Our CSR program
                    focuses on doing the right thing, managing risks, and
                    investing sustainably in the communities we serve. We
                    carefully consider environmental and social impacts and
                    strive to manage them responsibly to ensure long-term
                    business success.
                  </p>

                  <ul className="text-gray-700 space-y-4 mb-8">
                    <li>
                      Acting with respect for people, communities, and the
                      environment, while maintaining honesty and openness with
                      stakeholders.
                    </li>
                    <li>
                      Ensuring compliance with health, safety, environmental,
                      and social regulations while fostering continuous
                      improvement.
                    </li>
                    <li>
                      Prioritizing emergency preparedness and contingency
                      planning to respond to incidents effectively.
                    </li>
                    <li>
                      Promoting a culture where accidents and near-misses are
                      reported, investigated, and lessons learned are shared.
                    </li>
                    <li>
                      Consulting with stakeholders on health, safety,
                      environmental, and social performance to align with
                      community expectations.
                    </li>
                    <li>
                      Displaying this policy at all GENTEC premises and making
                      it publicly available.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "milestones" && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Company Milestones
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">1997</h3>
                      <p className="text-gray-600">
                        Founded as Genesis Technical Company Limited
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "leadership" && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Leadership Team
                </h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
                  Our experienced management team brings decades of industry
                  expertise and leadership to drive our company's success.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {/* CEO Profile */}
                  <div className="flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 mb-4 relative">
                      <div className="absolute inset-0 bg-gray-200"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      ICHIE (DR.) NNAETO ORAZULIKE
                    </h3>
                    <p className="font-bold text-sm text-red-600 mb-3">
                      GROUP MANAGING DIRECTOR
                    </p>
                    <p className="text-gray-600 text-sm">
                      Dr. Orazulike holds a Bachelor of Science degree in
                      Accounting from the University of Nigeria and also
                      graduated from the prestigious Executive Training Program
                      (OPM) at Harvard Business School.
                    </p>
                  </div>

                  {/* Executive Director Profile */}
                  <div className="flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 mb-4 relative">
                      <div className="absolute inset-0 bg-gray-200"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      OBIORA ORAZULIKE
                    </h3>
                    <p className="font-bold text-sm text-red-600 mb-3">
                      EXECUTIVE DIRECTOR
                    </p>
                    <p className="text-gray-600 text-sm">
                      Mr. Obiora Orazulike runs the steel trading unit of
                      GENTEC. He is an accountancy graduate of the University of
                      Nigeria, Nsukka; he also holds a Master's degree in
                      Business Administration from Durham Business School,
                      Durham, United Kingdom.
                    </p>
                  </div>

                  {/* Compliance Director Profile */}
                  <div className="flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 mb-4 relative">
                      <div className="absolute inset-0 bg-gray-200"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      UWOJEYA DANIEL
                    </h3>
                    <p className="font-bold text-sm text-red-600 mb-3">
                      EXECUTIVE DIRECTOR, COMPLIANCE
                    </p>
                    <p className="text-gray-600 text-sm">
                      Mr. Uwojeya Daniel is a Chartered Accountant, a Fellow of
                      both the Institute of Chartered Accountants of Nigeria
                      (ICAN) and the Chartered Institute of Taxation of Nigeria
                      (CITN).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next Tab Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                {/* Previous Tab */}
                {tabs.findIndex((tab) => tab.id === activeTab) > 0 && (
                  <button
                    onClick={() => {
                      const currentIndex = tabs.findIndex(
                        (tab) => tab.id === activeTab
                      );
                      handleTabChange(tabs[currentIndex - 1].id);
                    }}
                    className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2"
                  >
                    <span>←</span>
                    Previous:{" "}
                    {
                      tabs[tabs.findIndex((tab) => tab.id === activeTab) - 1]
                        ?.label
                    }
                  </button>
                )}

                {/* Next Tab */}
                {tabs.findIndex((tab) => tab.id === activeTab) <
                  tabs.length - 1 && (
                  <button
                    onClick={() => {
                      const currentIndex = tabs.findIndex(
                        (tab) => tab.id === activeTab
                      );
                      handleTabChange(tabs[currentIndex + 1].id);
                    }}
                    className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2 ml-auto"
                  >
                    Next:{" "}
                    {
                      tabs[tabs.findIndex((tab) => tab.id === activeTab) + 1]
                        ?.label
                    }
                    <span>→</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-transparent"></div>{" "}
      {/* Spacer to show background image */}
      <ScrollButton />
    </main>
  );
}
