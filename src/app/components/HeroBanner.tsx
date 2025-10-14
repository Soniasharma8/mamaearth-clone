"use client";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const images = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
    "/images/banner5.png",
    "/images/banner6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Wrapper */}
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`banner-${idx}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-sky-500 scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
