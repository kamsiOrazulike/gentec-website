/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import {
  Building2,
  Users,
  Wrench,
  Globe,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

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

  const services = [
    "Warehousing, Logistics and Procurement",
    "NDT Inspection Services",
    "Engineering Design and Project Management",
    "Electrical and Electronic Engineering Services",
    "Mechanical and Hydraulics Engineering",
    "Construction and Fabrication",
  ];

  const tabs = [
    { id: "overview", label: "Company Overview" },
    { id: "values", label: "Priorities & Values" },
    { id: "milestones", label: "Milestones" },
    { id: "leadership", label: "Leadership" },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/static/stock_imgs/4.png")',
          backgroundAttachment: "fixed",
          opacity: "0.05",
        }}
      />

      {/* Tab Content Background */}
      <div className="absolute inset-0 bg-image4 bg-cover bg-fixed bg-no-repeat z-0" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Vision Section */}
        <div className="relative">
          <div className="relative h-[55vh] w-full">
            <img
              src="/static/stock_imgs/4.png"
              alt="GENTEC Facilities"
              className="w-full h-full object-cover object-center brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vision
              </h1>
              <p className="text-md md:text-xl">
                To be a world-class Oil and Gas Development company. Delivering
                exceptional value through continuous innovation, expertise, and
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
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

        {/* Tab Content */}
        <div className="min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white shadow-md">
              {/* Tab Content */}
              <div className="min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="bg-white shadow-md">
                    {activeTab === "overview" && (
                      <div className="p-8 space-y-12">
                        {/* Main Overview Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                          {/* Image Section */}
                          <div className="relative h-[400px]">
                            <img
                              src="/static/imgs/image5.png"
                              alt="GENTEC Operations"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Company Description */}
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                              Genesis Technical Company Limited (GENTEC)
                            </h2>

                            <p className="text-gray-600 text-lg mb-6">
                              Founded in 1997, GENTEC is a wholly owned
                              subsidiary of the Genesis Group of Companies,
                              delivering world-class oil and gas services with a
                              strong customer focus.
                            </p>

                            <p className="text-gray-600 mb-6">
                              Our strategy is to maintain a dedicated focus on
                              technical services and leverage decades of
                              industry experience and an outstanding track
                              record to provide best-in-class operations for our
                              customers.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                              GENTEC is:
                            </h3>

                            <div className="space-y-4">
                              {features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
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
                            <p className="text-gray-600 text-lg">
                              GENTEC's dedicated focus on technical excellence,
                              geographic diversity, safe operations, customer
                              relationships and experienced management team make
                              us the preferred choice for customers, employees
                              and stakeholders.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "values" && (
                      <div className="p-8 space-y-8">
                        <div className="flex items-center space-x-3 justify-center mb-6">
                          <Award className="w-8 h-8 text-red-600" />
                          <h2 className="text-2xl font-bold text-gray-900">
                            Our Commitment
                          </h2>
                        </div>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
                          Our reputation is founded on the ability to deliver
                          world-class services with a strong customer focus and
                          commitment to providing services that meets applicable
                          regulatory and client requirements. At GENTEC, we
                          conduct periodic audits to continually monitor and
                          improve our processes, making us a partner of choice
                          to major Oil and Gas companies.
                        </p>

                        <div className="flex items-center space-x-3 justify-center mb-6">
                          <ShieldCheck className="w-8 h-8 text-red-600" />
                          <h2 className="text-2xl font-bold text-gray-900">
                            Our Services
                          </h2>
                        </div>
                        <p className="text-gray-600 text-center mb-8">
                          We operate a diversified business with special focus
                          on:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                          {services.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center p-4 bg-gray-50"
                            >
                              <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
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
                              <h3 className="font-semibold text-gray-900">
                                1997
                              </h3>
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
                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                          Leadership Team
                        </h2>
                        <p className="text-gray-600 text-center max-w-3xl mx-auto">
                          Our experienced management team brings decades of
                          industry expertise and leadership to drive our
                          company's success.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
