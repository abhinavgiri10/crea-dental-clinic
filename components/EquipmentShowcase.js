'use client';

import { useState } from 'react';

const EQUIPMENT_VIDEOS = [
  {
    id: 1,
    src: '/videos/equipment/C9692.MP4',
    title: 'Advanced Dental Technology 1',
    description: 'State-of-the-art equipment demonstration'
  },
  {
    id: 2,
    src: '/videos/equipment/C9694.MP4',
    title: 'Advanced Dental Technology 2',
    description: 'Precision treatment technology'
  },
  {
    id: 3,
    src: '/videos/equipment/C9760.MP4',
    title: 'Advanced Dental Technology 3',
    description: 'Modern diagnostic systems'
  },
  {
    id: 4,
    src: '/videos/equipment/C9779.MP4',
    title: 'Advanced Dental Technology 4',
    description: 'Patient comfort technology'
  },
  {
    id: 5,
    src: '/videos/equipment/C9788.MP4',
    title: 'Advanced Dental Technology 5',
    description: 'Cutting-edge instruments'
  },
  {
    id: 6,
    src: '/videos/equipment/C9793.MP4',
    title: 'Advanced Dental Technology 6',
    description: 'Professional care equipment'
  },
  {
    id: 7,
    src: '/videos/equipment/C9795.MP4',
    title: 'Advanced Dental Technology 7',
    description: 'Innovation in dentistry'
  },
  {
    id: 8,
    src: '/videos/equipment/C9796.MP4',
    title: 'Advanced Dental Technology 8',
    description: 'Quality assurance systems'
  },
  {
    id: 9,
    src: '/videos/equipment/C9821.MP4',
    title: 'Advanced Dental Technology 9',
    description: 'Sterilization technology'
  },
  {
    id: 10,
    src: '/videos/equipment/C9828.MP4',
    title: 'Advanced Dental Technology 10',
    description: 'Advanced treatment methods'
  },
  {
    id: 11,
    src: '/videos/equipment/CONS DISC 1.MP4',
    title: 'Consultation & Discussion',
    description: 'Professional consultation process'
  },
  {
    id: 12,
    src: '/videos/equipment/OP 4.MP4',
    title: 'Operatory Setup',
    description: 'Treatment room demonstration'
  },
  {
    id: 13,
    src: '/videos/equipment/treatment plan with patient cbct.MP4',
    title: 'CBCT Treatment Planning',
    description: '3D imaging and treatment planning'
  }
];

export default function EquipmentShowcase() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  return (
    <div>
      {/* Equipment Showcase Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Equipment Showcase</h2>
        <p className="text-gray-600 text-lg">
          Explore our advanced dental technology and state-of-the-art equipment
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {EQUIPMENT_VIDEOS.map((video) => (
          <div
            key={video.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer group"
            onClick={() => setSelectedVideoId(video.id)}
          >
            {/* Video Thumbnail Area */}
            <div className="relative h-48 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <div className="text-white text-4xl">▶️</div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {selectedVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">
                {EQUIPMENT_VIDEOS.find(v => v.id === selectedVideoId)?.title}
              </h3>
              <button
                onClick={() => setSelectedVideoId(null)}
                className="text-2xl text-gray-500 hover:text-gray-700 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <video
                src={EQUIPMENT_VIDEOS.find(v => v.id === selectedVideoId)?.src}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-gray-600 text-center">
                {EQUIPMENT_VIDEOS.find(v => v.id === selectedVideoId)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8 text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Advanced Technology for Your Care</h3>
        <p className="text-lg opacity-95">
          We invest in the latest dental technology to provide you with the best possible treatment outcomes and comfort.
        </p>
      </div>
    </div>
  );
}
