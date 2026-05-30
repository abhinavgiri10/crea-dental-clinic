'use client';

import { useState } from 'react';
import Image from 'next/image';

const CLINIC_SECTIONS = [
  {
    id: 1,
    title: 'Reception Area',
    description: 'Welcome to our professional reception',
    images: [
      {
        id: 1,
        src: '/images/clinic-tour/VAP08959.JPG',
        alt: 'Clinic Reception Area 1'
      },
      {
        id: 2,
        src: '/images/clinic-tour/VAP08961.JPG',
        alt: 'Clinic Reception Area 2'
      },
      {
        id: 3,
        src: '/images/clinic-tour/VAP08963.JPG',
        alt: 'Clinic Reception Area 3'
      }
    ]
  },
  {
    id: 2,
    title: 'Waiting Area',
    description: 'Comfortable and relaxing environment',
    images: [
      {
        id: 4,
        src: '/images/clinic-tour/VAP08797.JPG',
        alt: 'Clinic Waiting Area 1'
      },
      {
        id: 5,
        src: '/images/clinic-tour/VAP08965.JPG',
        alt: 'Clinic Waiting Area 2'
      },
      {
        id: 6,
        src: '/images/clinic-tour/VAP08969.JPG',
        alt: 'Clinic Waiting Area 3'
      },
      {
        id: 7,
        src: '/images/clinic-tour/VAP08975.JPG',
        alt: 'Clinic Waiting Area 4'
      },
      {
        id: 8,
        src: '/images/clinic-tour/VAP08979.JPG',
        alt: 'Clinic Waiting Area 5'
      },
      {
        id: 9,
        src: '/images/clinic-tour/VAP08981.JPG',
        alt: 'Clinic Waiting Area 6'
      },
      {
        id: 10,
        src: '/images/clinic-tour/VAP08983.JPG',
        alt: 'Clinic Waiting Area 7'
      }
    ]
  },
  {
    id: 3,
    title: 'Sterilization Room',
    description: 'Advanced hygiene and sterilization standards',
    images: [
      {
        id: 11,
        src: '/images/clinic-tour/VAP09007.JPG',
        alt: 'Clinic Sterilization Room'
      },
      {
        id: 12,
        src: '/images/clinic-tour/uv-chamber.jpg',
        alt: 'UV Chamber Sterilization Equipment'
      }
    ]
  },
  {
    id: 4,
    title: 'Recovery Room',
    description: 'Patient care and recovery space',
    images: [
      {
        id: 13,
        src: '/images/clinic-tour/VAP08991.JPG',
        alt: 'Clinic Recovery Room 1'
      },
      {
        id: 14,
        src: '/images/clinic-tour/VAP08995.JPG',
        alt: 'Clinic Recovery Room 2'
      }
    ]
  },
  {
    id: 5,
    title: 'Operatory',
    description: 'Advanced treatment rooms with modern equipment',
    images: [
      {
        id: 15,
        src: '/images/clinic-tour/VAP08930.JPG',
        alt: 'Clinic Operatory 1'
      },
      {
        id: 16,
        src: '/images/clinic-tour/operatory1.JPG',
        alt: 'Clinic Operatory 2'
      }
    ]
  },
  {
    id: 6,
    title: 'Pantry',
    description: 'Refreshment and convenience area',
    images: [
      {
        id: 17,
        src: '/images/clinic-tour/VAP09009.JPG',
        alt: 'Clinic Pantry Area'
      }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Our Clinic</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Take a comprehensive tour of our state-of-the-art dental facility, designed with your comfort and safety in mind
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {CLINIC_SECTIONS.map((section) => (
          <div key={section.id} className="border-b-2 border-gray-200 pb-12">
            {/* Section Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-primary mb-2">{section.title}</h3>
              <p className="text-gray-600 text-lg">{section.description}</p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image) => (
                <div
                  key={image.id}
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-lg font-bold">View</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Clinic Info Section */}
      <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Welcome to Crea Dental Clinic</h3>
        <p className="text-lg mb-4 opacity-95">
          State-of-the-art facilities designed for your comfort and confidence
        </p>
        <p className="text-sm opacity-80 mb-4">
          📍 16/1, 1st Floor, Sait Colony 1st Street, Above Freshco, Egmore, Chennai 600008
        </p>
        <p className="text-sm opacity-75">
          ⏰ Monday - Sunday: 9:00 AM - 8:00 PM | 📞 +91 8778548741
        </p>
      </div>
    </div>
  );
}
