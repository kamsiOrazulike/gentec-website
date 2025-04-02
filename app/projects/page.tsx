"use client";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import TimelineContent from "./Timeline";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-red-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-yellow-600 filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[30vh] z-10 flex items-center justify-center">
        <div className="text-center text-white px-4 pt-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Projects & Achievements
          </h1>
          <p className="text-md md:text-lg max-w-3xl mx-auto">
            A journey of innovation, recognition, and impact
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="bg-transparent min-h-screen relative z-20 py-12 px-4 md:px-12">
        <TimelineContent />
      </div>

      <ScrollButton />
    </main>
  );
}
