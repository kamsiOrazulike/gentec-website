"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarouselSlideProps {
  slide: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    linkText: string;
    isPriority: boolean;
    isDisabled?: boolean;
  };
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = React.memo(
  ({ slide, isActive }) => (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Image */}
      <div className="relative h-full w-full">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority={slide.isPriority}
          loading={slide.isPriority ? "eager" : "lazy"}
          quality={85}
          draggable="false"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content Container - Modified for bottom-left positioning */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full flex items-end pb-32">
          <div className="w-full px-8 md:w-1/2 text-left pr-8 md:pr-16 flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 text-white tracking-wide">
              {slide.title}
            </h1>
            <p className="text-sm md:text-md lg:text-lg text-white/90 mb-8">
              {slide.subtitle}
            </p>
            {slide.isDisabled ? (
              <button
                disabled
                className="inline-block border border-white/50 text-white/50 px-8 py-3 cursor-not-allowed text-base"
              >
                {slide.linkText}
              </button>
            ) : (
              <Link
                href={slide.link}
                className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-base"
              >
                {slide.linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
);
CarouselSlide.displayName = "CarouselSlide";

interface NavigationDotsProps {
  slides: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    linkText: string;
    isPriority: boolean;
    isDisabled?: boolean;
  }[];
  currentSlide: number;
  onChange: (index: number) => void;
}

const NavigationDots = React.memo(
  ({ slides, currentSlide, onChange }: NavigationDotsProps) => (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === index
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/80"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
);
NavigationDots.displayName = "NavigationDots";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const slides = useMemo(
    () => [
      {
        title: "Oil & Gas Services",
        subtitle:
          "Expert construction, procurement, and drilling operations with strategic partnerships.",
        image: "/static/media/gentec5.png",
        link: "/expertise/oil-gas-services",
        linkText: "Explore Services",
        isPriority: true,
        isDisabled: false,
      },
      {
        title: "Engineering Services",
        subtitle:
          "Specialized mechanical & electrical maintenance, pipe inspection, and design solutions.",
        image: "/static/media/gentec3.png",
        link: "/expertise/engineering-services",
        linkText: "View Capabilities",
        isPriority: false,
        isDisabled: false,
      },
      {
        title: "Logistics Management",
        subtitle:
          "Comprehensive logistics including warehouse, crew change, manpower, and transport services.",
        image: "/static/media/warehouse8.png",
        link: "/expertise/logistics-management",
        linkText: "Learn More",
        isPriority: false,
        isDisabled: false,
      },
      {
        title: "Exploration & Production",
        subtitle:
          "Ede Exploration and Shallow Production Offshore Platform operations.",
        image: "/static/media/jackuprig.png",
        link: "/expertise/exploration-production",
        linkText: "Discover Project Ede",
        isPriority: false,
        isDisabled: false,
      },
    ],
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  const handleSlideChange = useCallback(
    (index: number) => setCurrentSlide(index),
    []
  );

  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovering, slides.length]);

  return (
    <div
      className="relative h-[88vh] md:h-[100vh] w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 z-10" />
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            slide={slide}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      <NavigationDots
        slides={slides}
        currentSlide={currentSlide}
        onChange={handleSlideChange}
      />
    </div>
  );
};

export default React.memo(HeroCarousel);
