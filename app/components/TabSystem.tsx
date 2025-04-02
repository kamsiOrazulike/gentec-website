/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, useRef } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabSystemProps = {
  tabs: Tab[];
  defaultActiveTab?: string;
};

const TabSystem: React.FC<TabSystemProps> = ({
  tabs,
  defaultActiveTab = tabs[0]?.id,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [previousTab, setPreviousTab] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Function to change tabs with animation
  const handleTabChange = async (tabId: string) => {
    if (activeTab === tabId || isAnimating) return;

    setIsAnimating(true);
    setPreviousTab(activeTab);

    // Dynamically import GSAP to avoid SSR issues
    const { gsap } = await import("gsap");

    const currentTabEl = `#tab-content-${activeTab}`;
    const nextTabEl = `#tab-content-${tabId}`;

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveTab(tabId);
        setIsAnimating(false);

        // Update min-height after animation completes
        if (contentContainerRef.current) {
          const activeContent = document.querySelector(
            nextTabEl
          ) as HTMLElement;
          if (activeContent) {
            contentContainerRef.current.style.minHeight = `${activeContent.offsetHeight}px`;
          }
        }

        // Scroll to top of tab content
        if (tabContentRef.current) {
          window.scrollTo({
            top: tabContentRef.current.offsetTop - 100,
            behavior: "smooth",
          });
        }
      },
    });

    // Animate current tab out
    tl.to(currentTabEl, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(currentTabEl, { display: "none" });
      },
    });

    // Set up next tab and animate it in
    tl.add(() => {
      gsap.set(nextTabEl, { display: "block", opacity: 0, x: 30 });
    });

    // Animate next tab in
    tl.to(nextTabEl, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Set initial tab visibility and calculate initial min-height
  useEffect(() => {
    const initTabs = async () => {
      const { gsap } = await import("gsap");

      // Show only the active tab initially
      gsap.set(`#tab-content-${activeTab}`, { opacity: 1, display: "block" });

      // Hide all other tabs
      tabs.forEach((tab) => {
        if (tab.id !== activeTab) {
          gsap.set(`#tab-content-${tab.id}`, { opacity: 0, display: "none" });
        }
      });

      // Set minimum height of content container based on active tab height
      if (contentContainerRef.current) {
        const activeContent = document.querySelector(
          `#tab-content-${activeTab}`
        ) as HTMLElement;
        if (activeContent) {
          setTimeout(() => {
            if (contentContainerRef.current && activeContent) {
              contentContainerRef.current.style.minHeight = `${activeContent.offsetHeight}px`;
            }
          }, 100); // Short delay to ensure content is rendered
        }
      }
    };

    initTabs();
  }, [tabs, activeTab]);

  // Update min-height on window resize
  useEffect(() => {
    const handleResize = () => {
      if (contentContainerRef.current) {
        const activeContent = document.querySelector(
          `#tab-content-${activeTab}`
        ) as HTMLElement;
        if (activeContent) {
          contentContainerRef.current.style.minHeight = `${activeContent.offsetHeight}px`;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < tabs.length - 1;

  return (
    <div className="bg-white rounded-lg shadow-lg mb-8">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200" ref={tabContentRef}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-center">
            <div className="overflow-x-auto scrollbar-hide max-w-full">
              <nav
                className="flex space-x-4 sm:space-x-8 min-w-max"
                aria-label="Tabs"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-normal text-xs sm:text-sm transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    disabled={isAnimating}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div
        ref={contentContainerRef}
        className="relative transition-all duration-300 ease-in-out"
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tab-content-${tab.id}`}
            className="w-full px-4 py-6"
          >
            {tab.content}
          </div>
        ))}

        {/* Tab Navigation */}
        <div className="mt-8 pt-6 pb-8 border-t border-gray-200 px-4">
          <div className="flex justify-between items-center">
            {/* Previous Tab */}
            {hasPrevious && (
              <button
                onClick={() => handleTabChange(tabs[currentIndex - 1].id)}
                className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2 transition-colors duration-300"
                disabled={isAnimating}
              >
                <span>←</span>
                Previous: {tabs[currentIndex - 1].label}
              </button>
            )}

            {/* Next Tab */}
            {hasNext && (
              <button
                onClick={() => handleTabChange(tabs[currentIndex + 1].id)}
                className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2 ml-auto transition-colors duration-300"
                disabled={isAnimating}
              >
                Next: {tabs[currentIndex + 1].label}
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSystem;
