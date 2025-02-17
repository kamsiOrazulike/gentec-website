"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const slides = [
    {
      title: "Engineering Exceptionality",
      subtitle:
        "Delivering quality technical and logistics services through continuous innovation and exceptional Client Experience.",
      image: "/static/stock_imgs/2.png",
      link: "/about-us",
      linkText: "Discover Our Story",
    },
    {
      title: "Our Upstream",
      subtitle: "Find out more details about Our Ede Project.",
      image: "/static/stock_imgs/5.png",
      link: "/ede-project",
      linkText: "Ede E&P",
    },
    {
      title: "Our Expertise",
      subtitle:
        "What truly sets us apart is our dedication to the experience working with our clients.",
      image: "/static/stock_imgs/9.jpg",
      link: "/expertise",
      linkText: "Our Services",
    },
  ];

  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isHovering, slides.length]);

  return (
    <div
      className="relative h-[95vh] w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 30px 30px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 z-20">
              <div className="container mx-auto h-full flex items-center justify-end">
                <div className="w-full md:w-1/2 text-right pr-8 md:pr-16 flex flex-col items-end">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-md lg:text-lg text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-base"
                  >
                    {slide.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
