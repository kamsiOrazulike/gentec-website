import React from "react";
import Image from "next/image";
import { LucideHardHat, Building2 } from "lucide-react";

const OilGasServicesContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header Section */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/static/media/working6.png"
          alt="Oil & Gas Services"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oil & Gas Services
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Comprehensive services supporting oil and gas operations with
              expertise in construction, procurement, and drilling operations.
            </p>
          </div>
        </div>
      </div>

      {/* Construction & Procurement Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Construction & Procurement
            </h2>
          </div>
          <p className="text-gray-600">
            Our integrated Construction & Procurement division delivers
            end-to-end project solutions, from initial planning to final
            implementation. With dedicated teams in both Construction and
            Procurement departments, we ensure efficient project delivery while
            maintaining the highest quality standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Construction</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Project management and execution</li>
                <li>• Civil and structural engineering</li>
                <li>• Installation and commissioning</li>
                <li>• Quality assurance and control</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Procurement</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Strategic sourcing</li>
                <li>• Vendor qualification and management</li>
                <li>• Supply chain optimization</li>
                <li>• Inventory management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <Image
            src="/static/media/working2.png"
            alt="Construction & Procurement"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
      </div>

      {/* Drilling Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden order-2 md:order-1">
          <Image
            src="/static/media/working9.png"
            alt="Drilling Operations"
            fill
            className="object-cover"
            quality={85}
          />
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <div className="flex items-center space-x-3 mb-4">
            <LucideHardHat className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Drilling
            </h2>
          </div>
          <p className="text-gray-600">
            Our Drilling division provides comprehensive drilling solutions
            through strategic partnerships and specialized support services. We
            combine advanced technology with industry expertise to optimize
            drilling operations and maximize efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Rigs (Partnership with Shelf Drilling)
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Jack-up rig operations</li>
                <li>• Advanced drilling technologies</li>
                <li>• Operational optimization</li>
                <li>• Safety management systems</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Drilling Support Services
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Mud engineering</li>
                <li>• Well completion</li>
                <li>• Equipment maintenance</li>
                <li>• Technical consultancy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilGasServicesContent;
