'use client';

import { useState } from 'react';
import Image from 'next/image';

const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Abhinav Giri',
    title: 'MD, Oral and Maxillofacial Prosthodontist & Implantologist',
    experience: '15 years in Dentistry | 12 years Corporate Experience',
    specialization: 'Full Mouth Implants, Smile Design, Painfree Dentistry',
    image: '/images/doctors/abhinav.jpg',
    bio: 'Dr. Abhinav Giri brings 15 years of comprehensive dental expertise with 12 years dedicated to corporate dentistry across Chennai\'s leading facilities. As an MD specializing in Oral and Maxillofacial Prosthodontics and Implantology, he excels in full mouth implant rehabilitation and smile design. His passion lies in painless dentistry, combining international best practices with a commitment to care and hygiene standards. Dr. Abhinav seamlessly treats international and Indian patients with equal dedication, making him a trusted specialist for complex dental transformations.'
  },
  {
    id: 2,
    name: 'Dr. Khaidem Monalee Devi',
    title: 'MDS, Implantologist & Maxillofacial Prosthodontist',
    experience: 'Academic Excellence',
    specialization: 'Sleep Dentistry, Kids Dentistry, Prosthodontics',
    image: '/images/doctors/Monalee.jpg',
    bio: 'Dr. Khaidem Monalee Devi is an accomplished prosthodontist with exceptional academic credentials. Her expertise spans sleep dentistry, pediatric care, and advanced prosthodontic procedures. Known for her compassionate approach, she specializes in making dental experiences comfortable for anxious patients and children, ensuring every visit is a positive one.'
  }
];

export default function DoctorProfiles() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <>
      {/* Doctor Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {DOCTORS.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div
              className="relative h-80 bg-gradient-to-b from-primary to-primary-dark flex items-center justify-center overflow-hidden cursor-pointer group"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
               className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                priority
              />
              {/* Overlay with Click Indicator */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-bold">Click for Details</p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
              <p className="text-accent font-semibold text-sm mb-1">{doctor.title}</p>
              <p className="text-gray-600 text-sm mb-4">{doctor.experience}</p>
              <div className="border-t-2 border-gray-100 pt-4">
                <p className="text-gray-700">
                  <span className="font-semibold text-primary">Specialization:</span> {doctor.specialization}
                </p>
              </div>

              {/* Click for Details Button */}
              <button
                onClick={() => setSelectedDoctor(doctor)}
                className="mt-6 w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-dark text-white p-6 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedDoctor.name}</h2>
                <p className="text-accent font-semibold text-sm">{selectedDoctor.title}</p>
              </div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="text-2xl hover:text-opacity-80 font-bold min-w-fit ml-4"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Doctor Image in Modal */}
              <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Credentials */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Professional Credentials</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Qualification:</span> {selectedDoctor.title}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Experience:</span> {selectedDoctor.experience}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Specialization:</span> {selectedDoctor.specialization}
                  </p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">About Dr. {selectedDoctor.name.split(' ')[1]}</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {selectedDoctor.bio}
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300">
                Book Appointment with {selectedDoctor.name.split(' ')[1]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
