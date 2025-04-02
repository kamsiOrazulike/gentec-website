/* eslint-disable @typescript-eslint/no-unused-vars */
import { Award, Users, Building, MapPin } from "lucide-react";
import React from "react";

export type TimelineItem = {
  type: "project" | "achievement";
  year: string;
  title: string;
  description: string;
  organization?: string;
  client?: string;
  location?: string;
  icon: React.ElementType;
};

export const timelineData: TimelineItem[] = [
  // Projects
  {
    type: "project",
    year: "2020",
    client: "Shell Petroleum Development Company",
    title: "Offshore Platform Maintenance Project",
    description:
      "Comprehensive maintenance and upgrade of offshore drilling platforms including equipment overhaul and safety systems modernization.",
    location: "Lagos, Nigeria",
    icon: Building,
  },
  {
    type: "project",
    year: "2019",
    client: "ExxonMobil Nigeria",
    title: "Drilling Equipment Supply Program",
    description:
      "Strategic procurement and supply of specialized drilling equipment for deepwater operations.",
    location: "Port Harcourt, Nigeria",
    icon: Building,
  },
  {
    type: "project",
    year: "2018",
    client: "Total E&P Nigeria",
    title: "Technical Support Services",
    description:
      "Provision of technical support services for drilling operations including equipment maintenance and personnel training.",
    location: "Delta State, Nigeria",
    icon: Building,
  },

  // Achievements
  {
    type: "achievement",
    year: "2022",
    title: "Officer of the Order of the Niger (OON)",
    description:
      "Renowned Pan-African titan, Ichie Dr. Nnaeto Orazulike, was bestowed the prestigious national accolade, the Officer of the Order of the Niger (OON) by President Muhammadu Buhari GCFR. The dazzling ceremony unfolded in the vibrant heart of Abuja.",
    organization: "Federal Government of Nigeria",
    icon: Award,
  },
  {
    type: "achievement",
    year: "2022",
    title: "FATE Foundation Model Entrepreneur of the Year Award",
    description:
      "Ichie Dr. Nnaeto Orazulike (OON), Founder of Genesis Group, won this award for remarkable leadership, sectoral impact, and job creation.",
    organization: "FATE Foundation",
    icon: Users,
  },
  {
    type: "achievement",
    year: "2021",
    title: "NACCIMA Award for Entertainment and Hospitality Excellence",
    description:
      "Genesis Group MD, Ichie Dr. Nnaeto Orazulike (OON) honored at NACCIMA 2021 Awards for entertainment and hospitality excellence alongside notable leaders including Ngozi Okonjo-Iweala.",
    organization: "NACCIMA",
    icon: Award,
  },
  {
    type: "achievement",
    year: "2023",
    title: "National Productivity Merit Award (NPOM)",
    description:
      "Conferment of National Productivity Merit Award on Genesis Group by President Muhammadu Buhari GCFR in recognition of outstanding contributions to national productivity and economic development.",
    organization: "National Productivity Centre",
    icon: Award,
  },
];

// Sort timeline items by year in descending order
export const sortedTimelineData = timelineData.sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);
