import React from "react";
import Image from "next/image";
import { WarehouseIcon, Users, Ship, Truck } from "lucide-react";

const LogisticsManagementContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header Section */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/static/media/warehouse2.png"
          alt="Logistics Management"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Logistics Management
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Comprehensive logistics solutions including warehouse operations,
              crew change management, manpower supply, and transport services
              for the oil and gas industry.
            </p>
          </div>
        </div>
      </div>

      {/* Warehouse Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <WarehouseIcon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Warehouse
            </h2>
          </div>
          <p className="text-gray-600">
            Our state-of-the-art warehouse facilities ensure efficient storage,
            handling, and distribution of materials and equipment. We implement
            advanced inventory management systems to optimize storage space and
            minimize operational costs.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">
              Warehouse Services:
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Inventory management and control</li>
              <li>• Material receipt and dispatch</li>
              <li>• Specialized equipment storage</li>
              <li>• Just-in-time delivery</li>
              <li>• Quality inspection and verification</li>
              <li>• Real-time stock monitoring</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <Image
            src="/static/media/warehouse3.png"
            alt="Warehouse Operations"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
      </div>

      {/* Crew & Manpower Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden order-2 md:order-1">
          <Image
            src="/static/media/people5.png"
            alt="Crew and Manpower"
            fill
            className="object-cover"
            quality={85}
          />
        </div>

        <div className="space-y-8 order-1 md:order-2">
          {/* Crew Change Management */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Crew Change Management
              </h2>
            </div>
            <p className="text-gray-600">
              We provide seamless crew rotation services for offshore and
              onshore operations. Our crew change management ensures operational
              continuity and compliance with work-rest regulations.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Coordination of crew rotations</li>
                <li>• Travel arrangements and logistics</li>
                <li>• Immigration and documentation support</li>
                <li>• Emergency crew change management</li>
              </ul>
            </div>
          </div>

          {/* Manpower Supply */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Manpower Supply
              </h2>
            </div>
            <p className="text-gray-600">
              Our Manpower Supply division provides skilled and experienced
              personnel for various positions in the oil and gas industry. We
              ensure that all personnel meet the required qualifications and
              certifications.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Technical and operational staff</li>
                <li>• Pre-qualification and verification</li>
                <li>• Training and certification management</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Marine & Land Transport Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex space-x-2">
              <Ship className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              <Truck className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Marine & Land Transport
            </h2>
          </div>
          <p className="text-gray-600">
            Our transport division offers comprehensive marine and land
            transportation solutions for equipment, materials, and personnel. We
            maintain a fleet of vessels and vehicles to ensure timely and secure
            delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Marine Transport
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Supply vessels</li>
                <li>• Crew boats</li>
                <li>• Offshore support vessels</li>
                <li>• Marine logistics planning</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Land Transport
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Specialized equipment transport</li>
                <li>• Personnel transportation</li>
                <li>• Material delivery services</li>
                <li>• Route optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <div className="h-1/2 relative">
            <Image
              src="/static/media/marine-transport.png"
              alt="Marine Transport"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="h-1/2 relative">
            <Image
              src="/static/media/land-transport.png"
              alt="Land Transport"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsManagementContent;
