"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const HeroImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-4/3 md:aspect-square lg:aspect-4/3 max-w-lg mx-auto">
      {/* Main Image Card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 ring-1 ring-black/20">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}>
            <Image
              src={image.media_url}
              alt={image.caption}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Subtle overlay gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

            {/* Caption Tag */}
            {/* <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <span className="text-xs text-white font-medium uppercase tracking-wider">
                {image.caption}
              </span>
            </div> */}
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-KVS-secondary/20 rounded-full blur-xl -z-10" />
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-KVS-primary/40 rounded-full blur-2xl -z-10" />
    </div>
  );
};
