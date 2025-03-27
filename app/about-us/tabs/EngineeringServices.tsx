import React from "react";
import Image from "next/image";
import { WrenchIcon, PiIcon, PencilRulerIcon } from "lucide-react";

const EngineeringServicesContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header Section */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/static/media/warehouse8.jpg"
          alt="Engineering Services"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engineering Services
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Comprehensive engineering solutions including mechanical &
              electrical maintenance, pipe inspection, and design services for
              the oil and gas industry.
            </p>
          </div>
        </div>
      </div>

      {/* Mechanical & Electrical Maintenance Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <WrenchIcon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Mechanical & Electrical Maintenance
            </h2>
          </div>
          <p className="text-gray-600">
            Our Mechanical & Electrical Maintenance team ensures the reliable
            operation of critical equipment and systems. We provide preventive
            and corrective maintenance services to maximize uptime and extend
            asset lifecycle.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Key Services:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Preventive maintenance programs</li>
              <li>• Equipment troubleshooting and repair</li>
              <li>• System upgrades and modernization</li>
              <li>• Reliability-centered maintenance</li>
              <li>• Emergency response services</li>
              <li>• Electrical system testing and certification</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <Image
            src="/static/media/working5.jpg"
            alt="Mechanical & Electrical Maintenance"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
      </div>

      {/* Pipe Inspection & Design Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative order-last md:order-first h-[600px] md:h-full rounded-lg overflow-hidden">
          <div className="h-1/2 relative">
            <Image
              src="/static/media/pipe3.jpg"
              alt="Pipe Inspection"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="h-1/2 relative">
            <Image
              src="/static/media/people5.jpg"
              alt="Design Services"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
        </div>

        <div className="space-y-8">
          {/* Pipe Inspection */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <PiIcon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Pipe Inspection
              </h2>
            </div>
            <p className="text-gray-600">
              Our Pipe Inspection services utilize advanced non-destructive
              testing methods to ensure pipeline integrity and compliance with
              industry standards. We identify potential issues before they lead
              to costly failures.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Inspection Techniques:
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Ultrasonic testing</li>
                <li>• Radiographic inspection</li>
                <li>• Magnetic particle testing</li>
                <li>• Visual inspection</li>
                <li>• Hydrostatic testing</li>
              </ul>
            </div>
          </div>

          {/* Design Services */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center space-x-3">
              <PencilRulerIcon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Design
              </h2>
            </div>
            <p className="text-gray-600">
              Our Design team provides innovative engineering solutions tailored
              to meet specific project requirements. From concept development to
              detailed engineering, we ensure optimal performance, safety, and
              efficiency.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Design Capabilities:
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Process engineering</li>
                <li>• Mechanical engineering</li>
                <li>• Electrical system design</li>
                <li>• Instrumentation and control</li>
                <li>• 3D modeling and simulations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServicesContent;
