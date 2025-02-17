/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Wrench, Activity, Settings, Cog } from "lucide-react";

export default function ExpertisePage() {
  const services = [
    {
      icon: Wrench,
      title: "Well Logging and Evaluation",
      description:
        "Advanced well logging techniques to gather precise and comprehensive data about wellbores and surrounding formations.",
      services: [
        "Gamma Ray Logging",
        "Spontaneous Potential (SP) Logging",
        "Electrical Resistivity Logging",
        "Sonic Logging",
        "Density Logging",
        "Temperature Logging",
      ],
    },
    {
      icon: Activity,
      title: "Well Clean out and Remediation",
      description:
        "Range of mechanical and chemical methods to remove debris, scale, and other obstructions from oil and gas wells.",
      services: [
        "Mechanical Cleanout",
        "Chemical Cleanout",
        "Coiled Tubing Cleanout",
        "Remedial Cementing",
        "Matrix Acidizing",
        "Hydraulic Fracturing",
      ],
    },
    {
      icon: Settings,
      title: "Workover Operations",
      description:
        "Complex workover operations with utmost precision, efficiency, and safety.",
      services: [
        "Tubing Change-out",
        "Pump Replacement",
        "Zone Isolation",
        "Scale and Paraffin Removal",
        "Casing Repair",
        "Artificial Lift Optimization",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Image Section */}
      <div className="relative h-[55vh] w-full">
        <img
          src="/static/stock_imgs/4.png"
          alt="GENTEC Expertise"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            At GENTEC we deliver services at all stages of the oil and gas
            lifecycle. Our expertise covers all stages of the facility
            lifecycle, from concept design through to decommissioning.
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <Cog className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Expertise</h2>
          </div>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            We ensure projects are delivered safely, without incident or impact
            on the environment, reduce costs, on budget, boost efficiency and
            enhance productivity, while meeting corporate sustainability
            measures and compliance with governmental guidelines.
          </p>
        </div>

        {/* Services Sections */}
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <service.icon className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-8">{service.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.services.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
