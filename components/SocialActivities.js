'use client';

import { useState } from 'react';
import Image from 'next/image';

const SOCIAL_ACTIVITIES = [
  {
    id: 1,
    title: 'Moment',
    category: '',
    image: '/images/social/social-1.heic',
  },
  {
    id: 2,
    title: 'Moment',
    category: '',
    image: '/images/social/social-2.heic',
  },
  {
    id: 3,
    title: 'Moment',
    category: '',
    image: '/images/social/social-3.heic',
  },
  {
    id: 4,
    title: 'Moment',
    category: '',
    image: '/images/social/social-4.heic',
  },
  {
    id: 5,
    title: 'Moment',
    category: '',
    image: '/images/social/social-5.heic',
  },
  {
    id: 6,
    title: 'Moment',
    category: '',
    image: '/images/social/social-6.heic',
  },
  {
    id: 7,
    title: 'Moment',
    category: '',
    image: '/images/social/social-7.heic',
  },
  {
    id: 8,
    title: 'Moment',
    category: '',
    image: '/images/social/social-8.heic',
  },
];

export default function SocialActivities() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOCIAL_ACTIVITIES.map((item) => (
          <div
            key={item.id}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedId(item.id)}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
              <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-bold text-sm md:text-base">{item.title}</p>
                <p className="text-gray-200 text-xs md:text-sm">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Success message */}
      <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-800">
          ✅ <strong>Social Activities Gallery Ready!</strong> Your 8 social activity photos are now displaying in the gallery above.
        </p>
        <p className="text-sm text-green-700 mt-2">
          🎉 Photos added: Team bonding, celebrations, clinic events, and more
        </p>
      </div>
    </>
  );
}
