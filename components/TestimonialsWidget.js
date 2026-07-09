'use client';

import Link from 'next/link';

export default function TestimonialsWidget() {
  const testimonials = [
    {
      id: 1,
      name: 'Sahana K',
      text: 'I had taken my grandma for treatment to get her dentures done. Dr. Abhinav did a great job at explaining the procedure and the care was excellent.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rameet Kapoor',
      text: 'Dr Abhinav has been my go to dentist not just for me but for my entire family as well. He is friendly, affordable and professional.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Varshini Raman',
      text: 'Highly recommended. Dr. Abhinav Giri patiently heard my concerns, explained the treatment process and treated with utmost care. The entire procedure was very smooth.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Deepika Anand',
      text: 'Excellent dentist—very skilled and extremely patient. The clinic is clean, and the staff is polite, friendly, and helpful. Highly recommended.',
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-accent text-lg">⭐</span>
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="text-4xl">⭐⭐⭐⭐⭐</span>
            <span className="text-2xl font-bold">5.0/5</span>
          </div>
          <p className="text-lg opacity-90">From 40+ verified Google reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-white italic my-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-bold text-accent">{testimonial.name}</p>
              <p className="text-white text-sm opacity-80">Verified Patient</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-block bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
