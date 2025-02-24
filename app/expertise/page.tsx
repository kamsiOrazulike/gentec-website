"use client";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import TabSystem from "@/components/TabSystem";
import OverviewContent from "./tabs/Overview";
import OffshoreContent from "./tabs/Offshore";
import SubseaContent from "./tabs/Subsea";

export default function Expertise() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: <OverviewContent />,
    },
    {
      id: "offshore",
      label: "Offshore Drilling",
      content: <OffshoreContent />,
    },
    {
      id: "subsea",
      label: "Subsea Engineering",
      content: <SubseaContent />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-red-950 to-red-800 ">
      {/* Background Elements - setting to a lower z-index */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-yellow-600 filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[48vh] z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Expertise
            </h1>
            <p className="text-md md:text-lg max-w-3xl mx-auto">
              Delivering world-class oil and gas services with technical
              excellence and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Tab container with higher z-index to ensure it's clickable */}
      <div className="bg-white min-h-screen md:mx-20 relative z-20">
        <TabSystem tabs={tabs} defaultActiveTab="overview" />
      </div>

      <div className="h-16 bg-transparent relative z-10"></div>
      <ScrollButton />
    </main>
  );
}
