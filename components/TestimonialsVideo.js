'use client';

import { useState } from 'react';

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    name: 'Gouri',
    title: 'Patient Testimonial',
    video: '/videos/testimonials/Testimonial- Gouri.mp4',
    thumbnail: '🎬',
  },
  {
    id: 2,
    name: 'Sanjana',
    title: 'Patient Testimonial',
    video: '/videos/testimonials/SANJANA.mp4',
    thumbnail: '🎬',
  },
];

export default function TestimonialsVideo() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch real testimonials from our satisfied patients about their experience at Crea Dental Clinic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {VIDEO_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                onClick={() => setSelectedVideo(testimonial)}
                className="relative h-64 bg-gray-900 flex items-center justify-center cursor-pointer group overflow-hidden"
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {testimonial.thumbnail}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-accent text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-90">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-accent font-semibold text-sm mb-4">{testimonial.title}</p>
                <button
                  onClick={() => setSelectedVideo(testimonial)}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-lg max-w-4xl w-full relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-opacity-75 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video bg-black">
              <video
                src={selectedVideo.video}
                controls
                autoPlay
                className="w-full h-full"
                controlsList="nodownload"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="bg-gray-900 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.name}'s Experience</h3>
              <p className="text-gray-300">{selectedVideo.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
