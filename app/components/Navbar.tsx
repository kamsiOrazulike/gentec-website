"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Expertise", href: "/expertise" },
    { name: "QHSE", href: "/qhse" },
    { name: "Careers", href: "/careers" },
    { name: "Media", href: "/media" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
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
                className={`px-3 py-2 text-xs font-light tracking-wide transition-colors duration-300 
                  ${
                    scrolled
                      ? "text-gray-800 hover:text-red-600"
                      : "text-white hover:text-red-400"
                  }
                  ${
                    pathname === item.href
                      ? scrolled
                        ? "text-red-600 font-bold"
                        : "text-red-400 font-bold"
                      : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Contact Us Button */}
            <Link
              href="/contact"
              className={`ml-4 px-4 py-2 text-xs font-light transition-all duration-300 border ${
                scrolled
                  ? "bg-transparent text-black hover:text-white hover:bg-red-500 border-black hover:border-red-500"
                  : "bg-transparent text-white hover:text-black hover:bg-white border-white hover:border-white"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled
                  ? "text-black hover:text-red-600"
                  : "text-white hover:text-red-400"
              }`}
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
                className={`text-black hover:font-light block px-3 py-2 text-base font-thin transition-colors duration-300
                  ${
                    pathname === item.href
                      ? "text-black font-bold border-l-4 border-red-500"
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
              className="block mx-3 mt-4 px-4 py-2 bg-transparent hover:bg-red-500 text-black hover:text-white text-base font-light text-center transition-all duration-300 border border-black hover:border-red-500"
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
