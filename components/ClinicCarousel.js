'use client';

import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC_IMAGES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Carousel Background Images */}
      {CLINIC_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 pointer-events-none"></div>
    </div>
  );
}
