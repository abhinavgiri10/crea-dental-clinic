import Link from 'next/link';

export const metadata = {
  title: 'FAQs - Crea Dental Clinic, Egmore, Chennai',
  description:
    'Answers to common questions about appointments, consultations, Invisalign, implants, root canals, sleep dentistry and children’s dentistry at Crea Dental Clinic, Egmore, Chennai.',
};

const FAQS = [
  {
    q: 'Do you provide dental care for children, adults, and seniors?',
    a: 'Yes. Crea Dental Clinic has a team of doctors which provides dental care for children, adults, and seniors, with treatment options tailored to each patient’s dental needs.',
  },
  {
    q: 'How do I book an appointment at Crea Dental Clinic?',
    a: 'You can book an appointment with us by calling on +91 8778548741, contacting the clinic on WhatsApp, or using the online booking form on our website.',
  },
  {
    q: 'What happens during my first dental consultation?',
    a: 'Our team will discuss your dental concerns, examine your oral health, and explain the relevant treatment options so you can understand the next steps.',
  },
  {
    q: 'Do I have to start treatment immediately after my consultation?',
    a: 'Not unless it’s an emergency. Your consultation is an opportunity to discuss your concerns and understand your treatment options before deciding on the next step.',
  },
  {
    q: 'Do you offer Invisalign or clear aligners?',
    a: 'Yes. Crea Dental Clinic offers Invisalign and clear aligner treatment for suitable patients. Our team can assess your teeth and discuss whether aligners are appropriate for you.',
  },
  {
    q: 'Do you provide dental implants?',
    a: 'Yes. Crea Dental Clinic provides dental implant treatment for patients who need tooth replacement. Our team can assess your individual situation and explain the available options.',
  },
  {
    q: 'Do you treat patients who are nervous or anxious about dental treatment?',
    a: 'Yes. Crea offers sleep dentistry and sedation options for suitable patients who experience dental anxiety. Our team can discuss the available options during your consultation.',
  },
  {
    q: 'Do you provide root canal treatment?',
    a: 'Yes. Crea Dental Clinic provides root canal treatment to help treat teeth affected by infection or damage. Our team will assess your tooth and explain the appropriate treatment.',
  },
  {
    q: 'Do you offer children’s dentistry?',
    a: 'Yes. Crea provides child-friendly dental care designed around the needs and comfort of younger patients.',
  },
  {
    q: 'Where is Crea Dental Clinic located?',
    a: 'Crea Dental Clinic is located at 16/1, 1st Floor, Sait Colony 1st Street, Above Freshco, Egmore, Chennai 600008.',
  },
];

export default function FAQPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Answers to common questions about visiting Crea Dental Clinic
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white rounded-lg border border-gray-200 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 font-semibold text-gray-900 text-base md:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <span className="shrink-0 text-accent text-3xl leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have a question?
          </h2>
          <p className="text-gray-600 mb-6">
            Call us on +91 8778548741 or book a consultation and we’ll talk you through it.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}