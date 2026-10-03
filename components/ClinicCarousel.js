'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CLINIC_IMAGES = [
  '/background/1.JPG',
  '/background/2.JPG',
  '/background/3.JPG',
  '/background/4.JPG',
  '/background/7.JPG',
  '/background/10.jpg',
];

export default function ClinicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [furthest, setFurthest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC_IMAGES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFurthest((prev) => Math.max(prev, currentIndex));
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Carousel Background Images */}
      {CLINIC_IMAGES.map((image, index) => {
        // Only render slides that are shown or about to be shown,
        // so the browser doesn't download all 6 images at once
        if (index > furthest + 1) return null;

        return (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-50' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Crea Dental Clinic interior"
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        );
      })}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 pointer-events-none"></div>
    </div>
  );
}
