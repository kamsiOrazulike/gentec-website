"use client";
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import ScrollButton from "@/components/ScrollButton";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      year: "2020",
      client: "Shell Petroleum Development Company",
      title: "Offshore Platform Maintenance Project",
      description:
        "Comprehensive maintenance and upgrade of offshore drilling platforms including equipment overhaul and safety systems modernization.",
      location: "Lagos, Nigeria",
      type: "projects",
    },
    {
      year: "2019",
      client: "ExxonMobil Nigeria",
      title: "Drilling Equipment Supply Program",
      description:
        "Strategic procurement and supply of specialized drilling equipment for deepwater operations.",
      location: "Port Harcourt, Nigeria",
      type: "projects",
    },
    {
      year: "2018",
      client: "Total E&P Nigeria",
      title: "Technical Support Services",
      description:
        "Provision of technical support services for drilling operations including equipment maintenance and personnel training.",
      location: "Delta State, Nigeria",
      type: "projects",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-red-800">
      <div className="max-w-7xl mx-auto px-4 pt-48 pb-16">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Major Projects
        </h1>

        {/* Project Type Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === "projects"
                ? "bg-white text-red-900"
                : "border border-white text-white hover:bg-white/10"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === "achievements"
                ? "bg-white text-red-900"
                : "border border-white text-white hover:bg-white/10"
            }`}
          >
            Achievements
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects
            .filter((project) => project.type === activeTab)
            .map((project, index) => (
              <div
                key={index}
                className="border-l-2 border-white/20 pl-8 relative group"
              >
                {/* Year Marker */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600 border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/20">
                  {/* Year and Client */}
                  <div className="mb-4">
                    <span className="text-red-300 font-medium">
                      {project.year}
                    </span>
                    <h3 className="text-white text-xl font-semibold mt-1">
                      {project.client}
                    </h3>
                  </div>

                  {/* Project Title and Description */}
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-200">{project.description}</p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-200">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <ScrollButton />
    </main>
  );
};

export default ProjectsPage;
