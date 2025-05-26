/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Achievements", href: "/projects" },
    { name: "ESG", href: "/gentec-esg" },
  ];

  const expertiseItems = [
    { name: "Oil & Gas Services", href: "/expertise/oil-gas-services" },
    { name: "Engineering Services", href: "/expertise/engineering-services" },
    { name: "Logistics Management", href: "/expertise/logistics-management" },
    {
      name: "Exploration & Production",
      href: "/expertise/exploration-production",
    },
  ];

  // Check if any expertise subpage is active
  const isExpertiseActive = expertiseItems.some(
    (item) => pathname === item.href
  );

  // Function to handle smooth scrolling to contact section
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }

    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      // Smooth scroll to the contact section
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b-2 border-red-500 backdrop-blur-sm"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center z-50 relative">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo2.svg"
                  alt="Gentec Logo"
                  width={120}
                  height={60}
                  priority
                  className="py-2 md:w-[140px] md:h-[80px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 
                    ${
                      scrolled
                        ? "text-gray-800 hover:text-red-600"
                        : "text-white hover:text-red-200"
                    }
                    ${pathname === item.href ? "text-red-600 font-bold border-b-2 border-red-500 shadow-sm" : ""}`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Expertise Dropdown */}
              <Dropdown
                label="Our Expertise"
                items={expertiseItems}
                isScrolled={scrolled}
              />

              {/* Contact Us button */}
              <button
                onClick={scrollToContact}
                className={`ml-4 px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-md shadow-lg hover:shadow-xl ${
                  scrolled
                    ? "bg-red-600 text-white hover:bg-red-700 border-2 border-red-600"
                    : "bg-white text-red-600 hover:bg-red-50 border-2 border-white"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center z-50 relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-3 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
                  isOpen
                    ? "text-gray-800 bg-white/10 focus:ring-gray-500"
                    : scrolled
                    ? "text-gray-800 hover:text-red-600 hover:bg-gray-100 focus:ring-gray-500"
                    : "text-white hover:text-red-200 hover:bg-white/10 focus:ring-white"
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header space to account for navbar */}
          <div className="h-20"></div>
          
          {/* Navigation Links Container */}
          <div className="flex-1 flex flex-col px-6 py-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-800 text-xl font-medium py-4 border-b border-gray-100 transition-all duration-300 hover:text-red-600 hover:bg-red-50 hover:pl-4 rounded-lg ${
                  pathname === item.href
                    ? "text-red-600 font-semibold bg-red-50 pl-4 border-l-4 border-l-red-600"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Expertise Dropdown */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`flex items-center justify-between w-full text-gray-800 text-xl font-medium py-4 transition-all duration-300 hover:text-red-600 hover:bg-red-50 hover:pl-4 rounded-lg ${
                  isExpertiseActive ? "text-red-600 font-semibold bg-red-50 pl-4 border-l-4 border-l-red-600" : ""
                }`}
              >
                <span>Our Expertise</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    mobileDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Dropdown Items */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-gray-50 rounded-lg mx-2 mb-2">
                  {expertiseItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-gray-700 text-lg font-normal py-3 px-4 transition-all duration-300 hover:text-red-600 hover:bg-red-50 first:rounded-t-lg last:rounded-b-lg ${
                        pathname === item.href
                          ? "text-red-600 font-medium bg-red-50 border-l-4 border-l-red-600"
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${(navItems.length + index) * 0.1}s` }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <button
              onClick={scrollToContact}
              className="text-gray-800 text-xl font-medium py-4 border-b border-gray-100 transition-all duration-300 hover:text-red-600 hover:bg-red-50 hover:pl-4 rounded-lg text-left w-full"
            >
              Contact Us
            </button>

            {/* Call to Action Button */}
            <div className="mt-8">
              <button
                onClick={scrollToContact}
                className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-8">
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/logo2.svg"
                  alt="GENTEC Logo"
                  className="w-12 h-12 opacity-30"
                />
              </div>
              <p className="text-gray-500 text-sm text-center">
                Genesis Technical Company Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;