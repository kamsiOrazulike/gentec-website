import React from "react";
import { Phone, Mail, MapPin, Clock, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Expertise", href: "/expertise" },
    { name: "Featured Projects", href: "/projects" },
    { name: "QHSE", href: "/qhse" },
  ];

  const companyValues = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Committed to delivering world-class services",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with industry expertise",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available for our clients",
    },
  ];

  return (
    <footer className="bg-gray-100 text-xs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info & Logo */}
            <div>
              <div className="mb-6">
                <Image
                  src="/logo2.svg"
                  alt="GENTEC Logo"
                  width={150}
                  height={50}
                  className="mb-4"
                />
                <p className="text-gray-600 text-sm">
                  Leading provider of technical services to the oil and gas
                  industry since 1997.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                CONTACT US
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

            {/* Company Values */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                WHY CHOOSE US
              </h3>
              <div className="space-y-4">
                {companyValues.map((value) => (
                  <div key={value.title} className="flex items-start space-x-2">
                    <value.icon className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-gray-900 font-medium">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-gray-500 text-sm">
            Copyright © {currentYear} GENTEC | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
