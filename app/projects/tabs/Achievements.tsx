import React, { useEffect, useRef } from "react";
import { Award, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AchievementItem = {
  year: string;
  organization: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const AchievementsContent = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ScrollTrigger.getAll().length) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

    const timeline = timelineRef.current;
    if (!timeline) return;

    gsap.set(".timeline-item", {
      opacity: 0,
      x: 30,
    });

    gsap.fromTo(
      ".timeline-item",
      {
        opacity: 0,
        x: 30,
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

    // Animate year markers
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

  const achievements: AchievementItem[] = [
    {
      year: "2022",
      title: "Officer of the Order of the Niger (OON)",
      description:
        "Renowned Pan-African titan, Ichie Dr. Nnaeto Orazulike, was bestowed the prestigious national accolade, the Officer of the Order of the Niger (OON) by President Muhammadu Buhari GCFR. The dazzling ceremony unfolded in the vibrant heart of Abuja.",
      organization: "Federal Government of Nigeria",
      icon: Award,
    },
    {
      year: "2022",
      title: "FATE Foundation Model Entrepreneur of the Year Award",
      description:
        "Ichie Dr. Nnaeto Orazulike (OON), Founder of Genesis Group, won this award for remarkable leadership, sectoral impact, and job creation.",
      organization: "FATE Foundation",
      icon: Users,
    },
    {
      year: "2021",
      title: "NACCIMA Award for Entertainment and Hospitality Excellence",
      description:
        "Genesis Group MD, Ichie Dr. Nnaeto Orazulike (OON) honored at NACCIMA 2021 Awards for entertainment and hospitality excellence alongside notable leaders including Ngozi Okonjo-Iweala.",
      organization: "NACCIMA",
      icon: Award,
    },
    {
      year: "2023",
      title: "National Productivity Merit Award (NPOM)",
      description:
        "Conferment of National Productivity Merit Award on Genesis Group by President Muhammadu Buhari GCFR in recognition of outstanding contributions to national productivity and economic development.",
      organization: "National Productivity Centre",
      icon: Award,
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Awards & Achievements
      </h2>

      {/* Timeline Container */}
      <div ref={timelineRef} className="space-y-12 relative">
        {/* Timeline Line */}
        <div
          className="timeline-line absolute top-0 bottom-0 left-3 md:left-8 w-0.5 bg-gradient-to-b from-red-600/70 via-red-600 to-red-600/20"
          style={{ height: "0%" }}
        ></div>

        {achievements.map((item, index) => (
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
              {/* Year and Organization */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <span className="inline-flex items-center text-red-600 font-medium mb-2 md:mb-0">
                  <span className="mr-2">{item.year}</span>
                  <span className="inline-block h-4 w-0.5 bg-gray-300 mx-2 hidden md:block"></span>
                  <span className="text-gray-600 text-sm md:text-base">
                    {item.organization}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsContent;
