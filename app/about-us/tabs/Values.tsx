import React from "react";
import Image from "next/image";
import { Award, Globe } from "lucide-react";

const ValuesContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        {/* Left Column - Image (responsive height) */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/static/media/core_values.png"
            alt="Gentec Values"
            fill
            className="object-contain bg-transparent py-4"
            quality={90}
          />
        </div>

        {/* Right Column - Our Commitment */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-6">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Our Commitment
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-8">
            Our reputation is founded on the ability to deliver world-class
            services with a strong customer focus and commitment to providing
            services that meet applicable regulatory and client requirements. At
            GENTEC, we adhere to the highest international standards with ISO
            9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications. We
            conduct periodic audits to continually monitor and improve our
            processes, making us a partner of choice to major Oil and Gas
            companies in Nigeria and beyond.
          </p>
        </div>
      </div>

      {/* Corporate Social Responsibility Section */}
      <div>
        <div className="flex items-center space-x-3 justify-center mb-4 md:mb-6">
          <Globe className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Corporate Social Responsibility
          </h2>
        </div>
        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-8">
          GENTEC is committed to a practical and open approach to Corporate and
          Social Responsibility (CSR). As a Nigerian company with deep roots in
          the communities where we operate, our CSR program focuses on doing the
          right thing, managing risks, promoting Nigerian content development,
          and investing sustainably in the communities we serve. We carefully
          consider environmental and social impacts and strive to manage them
          responsibly to ensure long-term business success.
        </p>

        <ul className="text-gray-700 text-sm md:text-base space-y-3 md:space-y-4 mb-6 md:mb-8 px-4">
          <li>
            Acting with respect for people, communities, and the environment,
            while maintaining honesty and openness with stakeholders.
          </li>
          <li>
            Ensuring compliance with health, safety, environmental, and social
            regulations while fostering continuous improvement through our
            ISO-certified management systems.
          </li>
          <li>
            Prioritizing emergency preparedness and contingency planning to
            respond to incidents effectively across all operational sites.
          </li>
          <li>
            Promoting a culture where accidents and near-misses are reported,
            investigated, and lessons learned are shared throughout the
            organization.
          </li>
          <li>
            Consulting with local stakeholders on health, safety, environmental,
            and social performance to align with community expectations and
            provide sustainable development opportunities.
          </li>
          <li>
            Supporting local content development through skills transfer,
            employment opportunities, and capacity building in our host
            communities.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ValuesContent;
