import TestimonialsPreview from '@/components/TestimonialsPreview';
import Link from 'next/link';

export const metadata = {
  title: 'Patient Reviews - Crea Dental Clinic',
  description: 'Read reviews from our satisfied patients and watch video testimonials from Crea Dental Clinic.',
};

const ALL_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sahana K',
    role: 'Patient',
    rating: 5,
    text: 'I had taken my grandma for treatment to get her dentures done. Dr. Abhinav did a great job at explaining the procedure and the care was excellent.',
  },
  {
    id: 2,
    name: 'Lucrezia Maniscotti',
    role: 'Patient',
    rating: 5,
    text: 'Professional and with lots of care!',
  },
  {
    id: 3,
    name: 'Priya Dharshini',
    role: 'Patient',
    rating: 5,
    text: 'Best clinic for Dental procedures. Doctor is very patient and caring.',
  },
  {
    id: 4,
    name: 'Rameet Kapoor',
    role: 'Patient',
    rating: 5,
    text: 'Dr Abhinav has been my go to dentist not just for me but for my entire family as well. He is friendly, affordable and professional.',
  },
  {
    id: 5,
    name: 'Varshini Raman',
    role: 'Patient',
    rating: 5,
    text: 'Highly recommended. Dr. Abhinav Giri patiently heard my concerns, explained the treatment process and treated with utmost care. The entire procedure was very smooth.',
  },
  {
    id: 6,
    name: 'Prashant Kumar',
    role: 'Patient',
    rating: 5,
    text: 'Very good clinic. Doctor very friendly and treatment very good and painless.',
  },
  {
    id: 7,
    name: 'Deepika Anand',
    role: 'Patient',
    rating: 5,
    text: 'Excellent dentist—very skilled and extremely patient. The clinic is clean, and the staff is polite, friendly, and helpful. Highly recommended.',
  },
  {
    id: 8,
    name: 'Amutha Ramesh',
    role: 'Patient',
    rating: 5,
    text: 'Excellent treatment service. Very good overall experience.',
  },
  {
    id: 9,
    name: 'Sasikumar K',
    role: 'Patient',
    rating: 5,
    text: 'Good patient handling, doctor very kind, clinic very clean, staffs good handling. I am feeling very happy with the service.',
  },
  {
    id: 10,
    name: 'Asha Manoharan',
    role: 'Patient',
    rating: 5,
    text: 'Overall service is excellent.',
  },
  {
    id: 11,
    name: 'Malathi Chandru',
    role: 'Patient',
    rating: 5,
    text: 'Clean and neat clinic. Dr. Abhinav explains all the issues well and then does a good job.',
  },
  {
    id: 12,
    name: 'Elsa Eldhose',
    role: 'Patient',
    rating: 5,
    text: 'The way of handling the patients is good. The atmosphere of clinic is very calm and clean. Dr. Abhinav is excellent.',
  },
  {
    id: 13,
    name: 'Merin Jolly Abraham',
    role: 'Patient',
    rating: 5,
    text: 'Excellent!',
  },
  {
    id: 14,
    name: 'Madhavi Sharma',
    role: 'Patient',
    rating: 5,
    text: 'I went with the best treatment from Dr Abhinav and Dr Jeevita. I was suffering from this problem for so long. Now I am not having any problem.',
  },
  {
    id: 15,
    name: 'Desik Desika',
    role: 'Patient',
    rating: 5,
    text: 'Best dental procedures and doctor very kind. Staffs are very kind. Best dental clinic.',
  },
  {
    id: 16,
    name: 'Kumon Mylapore',
    role: 'Patient',
    rating: 5,
    text: 'Very spacious and good ambience. Doctor is excellent and does painless treatment at very reasonable cost.',
  },
  {
    id: 17,
    name: 'Ankita Roy',
    role: 'Patient',
    rating: 5,
    text: 'Dr. Abhinav Giri did my dental procedure with great care. It was smooth, painless, and I felt very comfortable throughout. Highly recommended!',
  },
  {
    id: 18,
    name: 'Satya Dev',
    role: 'Patient',
    rating: 5,
    text: 'Top of the line equipment, very affordable treatment plans and a dentist who explains visually! Excellent experience.',
  },
  {
    id: 19,
    name: 'Shyam Sasisekaran',
    role: 'Patient',
    rating: 5,
    text: 'I have had a fantastic experience with Dr. Abhinav Giri. He is a thorough professional who knows exactly what he is doing.',
  },
  {
    id: 20,
    name: 'Aruna Shah',
    role: 'Patient',
    rating: 5,
    text: 'Doctor Abhinav Giri is a caring and good dentist. He understood my problem and treated me very well.',
  },
];

export default function TestimonialsPage() {
  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-accent text-lg">⭐</span>
      ))}
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Success Stories</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
            See how we've transformed smiles and changed lives. Join hundreds of happy patients at Crea Dental Clinic.
          </p>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
            <div className="flex justify-center items-center gap-3 mb-2">
              <span className="text-4xl">⭐⭐⭐⭐⭐</span>
              <span className="text-2xl font-bold text-primary">4.8/5</span>
            </div>
            <p className="text-gray-600">Based on 500+ patient reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm text-gray-600 font-semibold">Verified Patient</span>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Video Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title">
            <h2>Video Testimonials</h2>
            <p>Hear directly from our satisfied patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Sanjana Video */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <video
                className="w-full aspect-video bg-gray-900"
                controls
                controlsList="nodownload"
              >
                <source src="/videos/testimonials/Sanjana.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-900">Sanjana - Patient Testimonial</p>
                <p className="text-sm text-gray-600">Real patient experience</p>
              </div>
            </div>

            {/* Gouri Video */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <video
                className="w-full aspect-video bg-gray-900"
                controls
                controlsList="nodownload"
              >
                <source src="/videos/testimonials/Testimonial- Gouri.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-900">Gouri - Patient Testimonial</p>
                <p className="text-sm text-gray-600">Real patient experience</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Stats */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="opacity-90">Happy Patients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <p className="opacity-90">Google Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="opacity-90">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="opacity-90">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Join Our Happy Patients
          </h2>
          <p className="text-text-light mb-8 text-lg">
            Experience exceptional dental care. Book your appointment today.
          </p>
          <Link href="/booking" className="inline-block btn-primary">
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}
