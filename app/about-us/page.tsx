/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Building2,
  Users,
  Wrench,
  Globe,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function About() {
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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Image Section */}
      <div className="relative h-[55vh] w-full">
        <img
          src="/static/stock_imgs/5.png"
          alt="GENTEC Facilities"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Founded in 1997, Genesis Technical Company Limited (GENTEC) is a
            wholly owned subsidiary of the Genesis Group of Companies,
            delivering world-class oil and gas services with a strong customer
            focus.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            Our reputation is founded on the ability to deliver world-class
            services with a strong customer focus and commitment to providing
            services that meets applicable regulatory and client requirements.
            At GENTEC, we conduct periodic audits to continually monitor and
            improve our processes, making us a partner of choice to major Oil
            and Gas companies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center mb-6">
              We operate a diversified business with special focus on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Warehousing, Logistics and Procurement",
                "NDT Inspection Services",
                "Engineering Design and Project Management",
                "Electrical and Electronic Engineering Services",
                "Mechanical and Hydraulics Engineering",
                "Construction and Fabrication",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
