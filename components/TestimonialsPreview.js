'use client';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Patient',
    rating: 5,
    text: 'Excellent service! The staff is friendly, and the clinic is very clean and well-maintained. Dr. Abhinav is professional and thorough. Highly recommended!',
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Patient',
    rating: 5,
    text: 'I was very anxious about my dental treatment, but the team made me feel comfortable. The treatment was painless and the results are amazing. Thank you!',
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Patient',
    rating: 5,
    text: 'Best dental clinic in Egmore! Modern equipment, skilled doctors, and reasonable pricing. My whole family comes here now.',
  },
];

export default function TestimonialsPreview({ limit }) {
  const displayed = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-accent text-lg">⭐</span>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayed.map((testimonial) => (
        <div key={testimonial.id} className="card border-l-4 border-accent">
          <StarRating rating={testimonial.rating} />
          <p className="text-text-light italic my-4 leading-relaxed">
            &quot;{testimonial.text}&quot;
          </p>
          <div className="border-t border-border-color pt-4">
            <p className="font-bold text-primary">{testimonial.name}</p>
            <p className="text-sm text-text-light">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
