import React, { useEffect, useRef } from "react";
import { MapPin, Building } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectItem = {
  year: string;
  client: string;
  title: string;
  description: string;
  location: string;
  icon: React.ElementType;
};

const ProjectsContent = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ScrollTrigger.getAll().length) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

    const timeline = timelineRef.current;
    if (!timeline) return;
    gsap.set(".timeline-item", {
      opacity: 0,
      x: -30,
    });
    gsap.fromTo(
      ".timeline-item",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      ".year-marker",
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      ".timeline-line",
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects: ProjectItem[] = [
    {
      year: "2020",
      client: "Shell Petroleum Development Company",
      title: "Offshore Platform Maintenance Project",
      description:
        "Comprehensive maintenance and upgrade of offshore drilling platforms including equipment overhaul and safety systems modernization.",
      location: "Lagos, Nigeria",
      icon: Building,
    },
    {
      year: "2019",
      client: "ExxonMobil Nigeria",
      title: "Drilling Equipment Supply Program",
      description:
        "Strategic procurement and supply of specialized drilling equipment for deepwater operations.",
      location: "Port Harcourt, Nigeria",
      icon: Building,
    },
    {
      year: "2018",
      client: "Total E&P Nigeria",
      title: "Technical Support Services",
      description:
        "Provision of technical support services for drilling operations including equipment maintenance and personnel training.",
      location: "Delta State, Nigeria",
      icon: Building,
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Major Projects
      </h2>

      {/* Timeline Container */}
      <div ref={timelineRef} className="space-y-12 relative">
        {/* Timeline Line */}
        <div
          className="timeline-line absolute top-0 bottom-0 left-3 md:left-8 w-0.5 bg-gradient-to-b from-red-600/70 via-red-600 to-red-600/20"
          style={{ height: "0%" }}
        ></div>

        {projects.map((item, index) => (
          <div
            key={index}
            className="timeline-item border-l-0 pl-10 md:pl-16 relative"
          >
            {/* Year Marker */}
            <div className="year-marker absolute -left-3 md:left-0 top-0 w-6 h-6 rounded-full bg-red-600 border-2 border-white flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            {/* Card */}
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-lg border border-gray-100 shadow">
              {/* Year and Client */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <span className="inline-flex items-center text-red-600 font-medium mb-2 md:mb-0">
                  <span className="mr-2">{item.year}</span>
                  <span className="inline-block h-4 w-0.5 bg-gray-300 mx-2 hidden md:block"></span>
                  <span className="text-gray-600 text-sm md:text-base">
                    {item.client}
                  </span>
                </span>

                {/* Icon for type */}
                <div className="bg-red-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  {item.icon && <item.icon className="w-5 h-5 text-red-600" />}
                </div>
              </div>

              {/* Title and Description */}
              <div className="mb-4">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
