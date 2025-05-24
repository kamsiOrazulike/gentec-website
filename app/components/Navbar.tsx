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
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b-2 border-red-500 backdrop-blur-sm"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo2.svg"
                alt="Gentec Logo"
                width={140}
                height={80}
                priority
                className="py-2"
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

            {/* Contact Us button - now with onClick handler */}
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 z-50 ${
                isOpen
                  ? "text-black"
                  : scrolled
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

      {/* Fullscreen Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col">
          {/* Navigation Links Container */}
          <div className="flex-1 flex flex-col justify-center px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-black text-2xl font-light py-4 transition-colors duration-300
                  ${
                    pathname === item.href
                      ? "text-red-600 font-normal pl-4 border-l-4 border-red-600"
                      : "hover:text-red-600 hover:pl-4"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Expertise Dropdown */}
            <div className="py-4">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`flex items-center text-black text-2xl font-light transition-colors duration-300 w-full text-left
                  ${isExpertiseActive ? "text-red-600 font-normal" : ""}
                  ${mobileDropdownOpen ? "mb-2" : ""}
                `}
              >
                Our Expertise
                <ChevronDown
                  className={`ml-2 h-6 w-6 transition-transform duration-200 ${
                    mobileDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Dropdown Items */}
              {mobileDropdownOpen && (
                <div className="pl-6 flex flex-col space-y-4 mt-2 mb-2">
                  {expertiseItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-black text-xl font-light transition-colors duration-300
                        ${
                          pathname === item.href
                            ? "text-red-600 font-normal pl-4 border-l-4 border-red-600"
                            : "hover:text-red-600 hover:pl-4"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us - now with onClick handler */}
            <button
              onClick={scrollToContact}
              className="text-black text-2xl font-light py-4 transition-colors duration-300 hover:text-red-600 hover:pl-4 text-left w-full"
            >
              Contact Us
            </button>
          </div>

          {/* Footer with Logo Divider */}
          <div className="relative mt-auto pb-8">
            <div className="absolute -top-16 left-0 w-full flex items-center justify-center">
              <div className="w-full border-t border-gray-200"></div>
              <div className="absolute bg-white px-4">
                <img
                  src="/logo2.svg"
                  alt="GENTEC Logo"
                  className="w-16 h-16 opacity-20"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto px-4 pt-8">
              <p className="text-gray-600 text-sm">
                Genesis Technical Company Limited
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
