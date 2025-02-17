import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/imgs/image6.png"
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
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-center">
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
