import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/imgs/image9.png"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="w-full h-full"
        />
      </div>

      {/* Floating White Container */}
      <div className="relative z-10 flex justify-center items-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl max-w-7xl mx-auto my-4 md:my-8 shadow-2xl border border-gray-100">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Us Section */}
              <div>
                <h3 className="text-gray-800 text-xl font-semibold mb-4">
                  About Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Founded in 1997, Genesis Technical Company Limited (GENTEC) is a
                  wholly owned subsidiary of the Genesis Group of Companies.
                </p>
                <Link
                  href="/about"
                  className="text-red-600 hover:text-red-700 transition-colors inline-flex items-center font-medium"
                >
                  View More
                  <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Navigation Section */}
              <div>
                <h3 className="text-gray-800 text-xl font-semibold mb-4">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/expertise"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      EXPERTISE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/markets"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      MARKETS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Latest News Section */}
              <div>
                <h3 className="text-gray-800 text-xl font-semibold mb-4">
                  Latest News
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded overflow-hidden shadow-sm">
                      <Image
                        src="/logo2.svg"
                        alt="Gentec Logo"
                        width={100}
                        height={50}
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium">
                        News and Events
                      </h4>
                      <p className="text-sm text-gray-600">
                        Latest updates from GENTEC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-gray-800 text-xl font-semibold mb-4">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div className="text-gray-600">
                      <p>Plot 262, Sapara Williams Close,</p>
                      <p>Off Idowu Martins, Victoria Island,</p>
                      <p>Lagos | Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    <a
                      href="tel:+2348183580925"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      +234 (0) 8183580925
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-red-600" />

                    <a
                      href="mailto:info@gentecng.com"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      info@gentecng.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">
                  Copyright © {currentYear} GENTEC | All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
