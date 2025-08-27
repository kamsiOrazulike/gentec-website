"use client";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import TimelineContent from "./Timeline";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-amber-600 relative overflow-hidden">
      {/* Solid gold background instead of gradient and shapes */}

      {/* Hero Section */}
      <section className="relative h-[40vh] z-10 flex items-center justify-center">
        <div className="text-center text-white px-4 pt-36 md:pt-40">
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
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Celebrating Excellence & Innovation</h2>
          <p className="text-white/90 text-lg text-center max-w-3xl mx-auto">
            Explore our journey of achievements and landmark projects that showcase our commitment to excellence, 
            innovation, and sustainable growth in the industry.
          </p>
        </div>
        <TimelineContent />
      </div>

      <ScrollButton />
    </main>
  );
}
