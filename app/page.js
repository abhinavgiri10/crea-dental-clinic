import Link from 'next/link';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions - Crea Dental Clinic Chennai',
  description: 'Find answers to common questions about our dental services, booking, payment plans, and treatments at Crea Dental Clinic in Egmore, Chennai.',
};

export default function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: 'What are your dental services?',
      answer: 'We offer a comprehensive range of dental services including general dentistry, cosmetic dentistry, orthodontics, dental implants, root canals, smile makeovers, sleep dentistry, pediatric dentistry, and more. Visit our Services page to learn about all 22+ treatments we provide.',
    },
    {
      id: 2,
      question: 'Do you offer payment plans?',
      answer: 'Yes! We understand that dental treatments can be an investment. We offer flexible payment plans to make quality dental care accessible to all our patients. Please contact us at +91 8778548741 or visit us in person to discuss payment options that work for you.',
    },
    {
      id: 3,
      question: 'How do I book an appointment?',
      answer: 'Booking an appointment is easy! You can: (1) Call us at +91 8778548741, (2) Message us on WhatsApp, (3) Follow us on Instagram @creadentalclinic_, or (4) Use our online booking form on the Booking page. We typically accommodate appointments within 2-3 days.',
    },
    {
      id: 4,
      question: 'Are you accepting new patients?',
      answer: 'Absolutely! We welcome new patients and look forward to meeting you. Whether you need a routine checkup or a complete smile transformation, our team is here to help. Feel free to call us or visit our clinic in Egmore, Chennai.',
    },
    {
      id: 5,
      question: 'Do you offer sleep dentistry for anxious patients?',
      answer: 'Yes! Dr. Khaidem Monalee specializes in sleep dentistry and has a compassionate approach to treating anxious and nervous patients. If dental anxiety has been preventing you from getting needed treatment, we can help. Sleep dentistry allows you to relax while we perform procedures. Contact us to discuss your concerns.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
            Find answers to common questions about our services, booking, and treatments
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-l-4 border-accent bg-light-bg p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-primary">
                  {faq.id}. {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still have questions?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918778548741"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block"
            >
              Call Us: +91 8778548741
            </a>
            <a
              href="https://wa.me/918778548741"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your smile?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and experience exceptional dental care
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent hover:bg-opacity-90 text-white px-10 py-4 rounded-lg font-bold transition-all duration-300"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
