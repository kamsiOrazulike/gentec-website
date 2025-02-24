"use client";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import TabSystem from "@/components/TabSystem";
import ProjectsContent from "./tabs/Projects";
import AchievementsContent from "./tabs/Achievements";

export default function ProjectsPage() {
  const tabs = [
    {
      id: "projects",
      label: "Projects",
      content: <ProjectsContent />,
    },
    {
      id: "achievements",
      label: "Achievements",
      content: <AchievementsContent />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-red-800 relative overflow-hidden">
      {/* Background Elements - setting to a lower z-index */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-yellow-600 filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[48vh] z-10 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Projects & Achievements
          </h1>
          <p className="text-md md:text-lg max-w-3xl mx-auto">
            Showcasing our major projects and industry recognition
          </p>
        </div>
      </section>

      {/* Tab container with higher z-index to ensure it's clickable */}
      <div className="bg-white min-h-screen md:mx-20 relative z-20">
        <TabSystem tabs={tabs} defaultActiveTab="projects" />
      </div>

      <div className="h-16 bg-transparent relative z-10"></div>
      <ScrollButton />
    </main>
  );
}
