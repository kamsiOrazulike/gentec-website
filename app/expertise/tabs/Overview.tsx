// OverviewContent.tsx
import React from "react";

const inspectionServices = [
  "Dye Penetrant Inspection",
  "Magnetic Particle Inspection",
  "Hardness Testing",
  "Positive Material Identification",
  "Close Visual Inspection",
  "Eddy Current Inspection",
  "BHA Inspection",
  "Radiographic Testing",
  "Ultrasonic Testing",
];

const OverviewContent = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Core Expertise Section */}
      <section className="relative pb-12 overflow-hidden">
        {/* Services - Single Column Layout */}
        <div className="space-y-10 mt-8">
          {/* Civil Mechanical Construction */}
          <div className="border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold text-black mb-6">
              CIVIL MECHANICAL CONSTRUCTION
            </h3>
            <p className="text-gray-700 mb-4">
              GENTEC provides reliable civil and mechanical construction
              solutions with precision and compliance, including:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"
                  />
                </svg>
                <span className="text-gray-700">
                  Structural steel fabrication and assembly
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700">
                  Equipment installation and commissioning
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span className="text-gray-700">
                  Piping systems design and construction
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-gray-700">
                  Industrial infrastructure development
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-gray-700">
                  Adherence to industry safety standards
                </span>
              </li>
            </ul>
          </div>

          {/* NDT Inspection Services */}
          <div className="border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold text-black mb-6">
              NON-DESTRUCTIVE TESTING (NDT) & INSPECTION
            </h3>
            <p className="text-gray-700 mb-4">We offer:</p>
            <ul className="space-y-4">
              {inspectionServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services (truncated for brevity) */}
          <div className="border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold text-black mb-6">
              PIPELINE ENGINEERING, CONSTRUCTION, REPAIR AND MAINTENANCE
            </h3>
            <p className="text-gray-700">
              We construct, repair, and maintain pipelines transporting oil,
              gas, petroleum products, and industrial fluids. Our engineering
              team provides consulting, design, and execution for oil & gas
              pipeline projects, gas utilities, storage, and production
              facilities.
            </p>
          </div>

          {/* Supply Chain Management Section */}
          <div className="mt-10 border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold text-black mb-6">
              SUPPLY CHAIN MANAGEMENT
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  GENERAL PROCUREMENT
                </h4>
                <p className="text-gray-700 ml-9">
                  GENTEC provides cost-effective technical procurement
                  solutions, leveraging strong global and local supplier
                  relationships. We ensure the timely sourcing of high-quality
                  materials and services while optimizing costs and maintaining
                  strict quality control.
                </p>
              </div>

              {/* Additional Supply Chain Sections */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewContent;
