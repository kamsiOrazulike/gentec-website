/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const SubseaContent = () => {
  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        <div className="w-full mx-auto px-4 md:px-8">
          {/* Logo - responsive sizing */}
          <Image
            src="/static/clients/kreuz.jpg"
            alt="Subsea Engineering"
            width={100}
            height={50}
            className="w-1/3 md:w-1/5 mb-4 md:mb-6"
            quality={90}
            draggable="false"
          />

          {/* Title and content - stacked on mobile, side-by-side on desktop */}
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Subsea <span className="text-red-600">Engineering</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Currently in partnership with KREUZ SUBSEA PTE LIMITED of
                SINGAPORE, providing integrated manned and unmanned offshore
                subsea services with in-house project management and
                installation engineering expertise.
              </p>
            </div>

            {/* Image - full width on mobile, partial width on desktop */}
            <div className="w-full md:w-2/3 md:pl-8">
              <Image
                src="/static/imgs/gentec3.jpg"
                alt="Subsea Engineering"
                width={400}
                height={300}
                className="w-full h-64 md:h-[300px] object-cover object-center rounded-lg shadow-lg"
                quality={90}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
          Kreuz Subsea Partnership
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Our collaboration with Kreuz Subsea enables us to offer
              comprehensive subsea solutions:
            </p>
            <ul className="text-gray-700 space-y-3 md:space-y-4 mb-6 md:mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Integrated manned and unmanned offshore subsea services
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Specialized in-house project management</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Advanced installation engineering expertise</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>State-of-the-art subsea technologies</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-600">
              By combining Kreuz Subsea's international experience and technical
              capabilities with GENTEC's strong local presence, we deliver
              innovative and reliable subsea engineering solutions tailored to
              the specific needs of our clients in Nigeria's offshore
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubseaContent;
