import React from "react";
import Image from "next/image";
import { Droplets, Gauge } from "lucide-react";

const ExplorationProductionContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header Section */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/static/media/jackuprig.png"
          alt="Exploration & Production"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Exploration & Production
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Our upstream operations focus on Ede Exploration and Shallow
              Production Offshore Platform operations with cutting-edge
              technology and expertise.
            </p>
          </div>
        </div>
      </div>
      {/* Disclaimer Banner */}
      <div className="bg-gray-200 text-black/60 p-3 text-center rounded-lg mb-2">
        <p className="text-md font-bold tracking-wider">OPERATOR OF PPL 229</p>
      </div>
      {/* Ede Exploration Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <Droplets className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Ede Exploration
            </h2>
          </div>
          <p className="text-gray-600">
            The Ede Exploration division is at the forefront of discovering and
            evaluating new hydrocarbon reserves. Using advanced seismic
            technology and geological expertise, we identify promising prospects
            and assess their commercial viability.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">
              Exploration Capabilities:
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Advanced seismic data acquisition and processing</li>
              <li>• Geological and geophysical studies</li>
              <li>• Reservoir analysis and modeling</li>
              <li>• Prospect evaluation and risk assessment</li>
              <li>• Exploration drilling planning and execution</li>
              <li>• Resource estimation and development planning</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <Image
            src="/static/media/exploration.jpg"
            alt="Ede Exploration"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
      </div>

      {/* Operator Shallow Production Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden order-2 md:order-1">
          <Image
            src="/static/media/offshore-platform.jpg"
            alt="Offshore Platform"
            fill
            className="object-cover"
            quality={85}
          />
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <div className="flex items-center space-x-3 mb-4">
            <Gauge className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Operator Shallow Production Offshore Platform
            </h2>
          </div>
          <p className="text-gray-600">
            As an operator of shallow water production facilities, we manage the
            entire lifecycle of offshore platforms, ensuring safe, efficient,
            and environmentally responsible operations. Our experienced team
            optimizes production while maintaining the highest standards of
            safety and environmental stewardship.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Production Operations:
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Platform management and operations</li>
                <li>• Production optimization</li>
                <li>• Well monitoring and intervention</li>
                <li>• Facility maintenance and integrity</li>
                <li>• Environmental monitoring and compliance</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Technical Expertise:
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Reservoir management</li>
                <li>• Production engineering</li>
                <li>• Facilities engineering</li>
                <li>• Operations optimization</li>
                <li>• Decommissioning planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics Section */}
      <div className="bg-gray-50 p-6 rounded-lg mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Key Performance Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">99.5%</div>
            <div className="text-sm text-gray-600">Production Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5,000+</div>
            <div className="text-sm text-gray-600">Barrels Per Day</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">0</div>
            <div className="text-sm text-gray-600">Environmental Incidents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorationProductionContent;
