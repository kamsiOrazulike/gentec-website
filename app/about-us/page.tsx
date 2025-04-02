"use client";
import React from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import TabSystem from "@/components/TabSystem";
import OverviewContent from "./tabs/Overview";
import ValuesContent from "./tabs/Values";
import LeadershipContent from "./tabs/Leadership";

export default function About() {
  const tabs = [
    {
      id: "overview",
      label: "Company Overview",
      content: <OverviewContent />,
    },
    {
      id: "values",
      label: "Priorities & Values",
      content: <ValuesContent />,
    },
    {
      id: "leadership",
      label: "Leadership",
      content: <LeadershipContent />,
    },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/media/jackuprig.png"
          alt="Gentec Warehouse"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-90"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-red-950/20 to-red-800/30"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Vision Section */}
        <div className="relative py-20">
          <div className="max-w-4xl mx-auto text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
            <p className="text-md md:text-lg max-w-2xl mx-auto">
              To be a world-class Oil and Gas Development company. Delivering
              exceptional value through continuous innovation, expertise, and
              commitment to excellence.
            </p>
          </div>
        </div>

        {/* Content Section with Tab System */}
        <div className="container mx-auto px-4 md:px-6 pb-16">
          <TabSystem tabs={tabs} defaultActiveTab="overview" />
        </div>
      </div>
      <ScrollButton />
    </main>
  );
}
