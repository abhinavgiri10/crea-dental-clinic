'use client';

import { useState, useEffect } from 'react';

const CLINIC_IMAGES = [
  '/images/clinic/1.JPG',
  '/images/clinic/2.JPG',
  '/images/clinic/3.JPG',
  '/images/clinic/4.JPG',
  '/images/clinic/5.HEIC',
  '/images/clinic/6.heic',
  '/images/clinic/7.JPG',
  '/images/clinic/8.HEIC',
  '/images/clinic/9.heic',
  '/images/clinic/10.jpg',
];

export default function ClinicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {CLINIC_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </div>
  );
}
