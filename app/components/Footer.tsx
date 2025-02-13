/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-white/60 mb-4">
              Founded in 1997, Genesis Technical Company Limited (GENTEC) is a
              wholly owned subsidiary of the Genesis Group of Companies.
            </p>
            <Link
              href="/about"
              className="text-red-400 hover:text-red-300 transition-colors inline-flex items-center"
            >
              View More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-red-400 transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="text-white/60 hover:text-red-400 transition-colors"
                >
                  EXPERTISE
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="text-white/60 hover:text-red-400 transition-colors"
                >
                  MARKETS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-red-400 transition-colors"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest News Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Latest News
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-16 h-16 bg-black/50 rounded overflow-hidden">
                  <img
                    src="/api/placeholder/150/150"
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white/90 font-medium">News and Events</h4>
                  <p className="text-sm text-white/60">
                    Latest updates from GENTEC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div className="text-white/60">
                  <p>Plot 262, Sapara Williams Close,</p>
                  <p>Off Idowu Martins, Victoria Island,</p>
                  <p>Lagos | Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-400" />
                <a
                  href="tel:+2348183580925"
                  className="text-white/60 hover:text-white"
                >
                  +234 (0) 8183580925
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-400" />
                <a
                  href="mailto:info@gentecng.com"
                  className="text-white/60 hover:text-white"
                >
                  info@gentecng.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              Copyright © {currentYear} GENTEC | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
