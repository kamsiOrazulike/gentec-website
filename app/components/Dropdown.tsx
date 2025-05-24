"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

interface DropdownItem {
  name: string;
  href: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  isScrolled: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if any of the dropdown items is active
  const isActive = items.some((item) => pathname === item.href);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 
          ${
            isScrolled
              ? "text-gray-800 hover:text-red-600"
              : "text-white hover:text-red-200"
          }
          ${isActive ? "text-red-600 font-bold border-b-2 border-red-500" : ""}
        `}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-60 rounded-md shadow-xl bg-white border border-gray-100 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-6 py-3 text-sm transition-all ${
                  pathname === item.href
                    ? "text-red-600 font-bold bg-red-50 border-l-4 border-red-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-red-600 hover:pl-8"
                }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
