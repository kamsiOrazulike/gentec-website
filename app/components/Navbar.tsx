"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "EXPERTISE", href: "/expertise" },
    { name: "MARKETS", href: "/markets" },
    { name: "QHSE", href: "/qhse" },
    { name: "CAREERS", href: "/careers" },
    { name: "MEDIA", href: "/media" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/20 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo2.svg"
                alt="Gentec Logo"
                width={150}
                height={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300 
              ${pathname === item.href ? "text-red-600 font-bold" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-medium rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg border border-red-400 hover:border-red-500"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-red-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md
                  ${
                    pathname === item.href
                      ? "text-red-600 font-bold bg-gray-50"
                      : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              className="block mx-3 mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-base 
                font-medium rounded-md text-center hover:from-red-700 hover:to-red-800 transition-all duration-300
                shadow-md hover:shadow-lg border border-red-400 hover:border-red-500"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
