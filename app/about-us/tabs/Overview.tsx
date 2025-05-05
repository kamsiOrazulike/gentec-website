/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Building2, Users, Wrench, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Our People",
    description:
      "A diverse and mobile pool of skilled professionals including highly capable account managers, purchasing specialists, logistics personnel, and inspection specialists supported by our expert engineers and project managers.",
  },
  {
    icon: Wrench,
    title: "Technology",
    description:
      "Successfully identifying market needs to develop effective technologies that meet clients' key drivers of safety, productivity, schedule and cost through collaboration with clients, suppliers and partners.",
  },
  {
    icon: Building2,
    title: "Assets",
    description:
      "Operating a flexible, high-performance fleet of equipment with 91,000 square meters of open yard warehousing space, supported by cranes, trucks, and earth moving equipment.",
  },
  {
    icon: Globe,
    title: "Local Presence",
    description:
      "Building local businesses founded on local leadership and high-quality in-country personnel, delivering responsive support while contributing to local economies and communities.",
  },
];

const OverviewContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 md:space-y-12">
      {/* Main Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Image Section - responsive sizing */}
        <div className="relative flex flex-col justify-between">
          <img
            src="/static/media/warehouse10.png"
            alt="GENTEC Operations"
            className="w-full mb-2 h-full object-cover rounded-lg"
          />
          <img
            src="/static/media/warehouse4.png"
            alt="GENTEC Operations"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Company Description */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
            Genesis Technical Company Limited (GENTEC)
          </h2>

          <p className="text-gray-600 text-sm md:text-md mb-4 md:mb-6">
            Founded in 1997, GENTEC is a wholly owned subsidiary of the Genesis
            Group of Companies, delivering world-class oil and gas technical services
            in Nigeria. Our identity as a world-class oil and gas technical services
            company is strengthened by our indigenous workforce of over 2,500 professionals—99%
            of whom are Nigerian—underscoring our commitment to local content, talent
            development, and national capacity building.
          </p>

          <p className="text-gray-600 text-sm md:text-md mb-4 md:mb-6">
            Through strategic joint ventures, including Shelf Drilling Nigeria and Genesis
            Kreuz Subsea, we strengthen our technical expertise and extend our service
            capabilities across the value chain. Guided by a &quot;Can-Do&quot; mindset, we
            champion innovation, operational excellence, and strict regulatory compliance in
            every engagement.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
            GENTEC is:
          </h3>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer-like Section with Logo Divider */}
      <div className="relative mt-8 md:mt-16 pt-8 md:pt-16">
        <div className="absolute top-0 left-0 w-full flex items-center justify-center">
          <div className="w-full border-t border-gray-200"></div>
          <div className="absolute bg-white px-4">
            <img
              src="/logo2.svg"
              alt="GENTEC Logo"
              className="w-12 h-12 md:w-16 md:h-16 opacity-20"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto pt-6">
          <p className="text-gray-600 text-sm md:text-md">
            GENTEC's dedicated focus on technical excellence, geographic
            diversity, safe operations, customer relationships and experienced
            management team make us the preferred choice for customers,
            employees and stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
