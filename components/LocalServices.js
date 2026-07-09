export default function LocalServices() {
  const services = [
    {
      id: 1,
      title: 'Best Invisalign in Egmore, Chennai',
      description: 'Clear aligners for a straighter smile without visible braces',
      icon: '✨',
    },
    {
      id: 2,
      title: 'Painless Root Canal in Egmore',
      description: 'Advanced endodontic treatment to save your natural tooth',
      icon: '🦷',
    },
    {
      id: 3,
      title: 'Dental Implants in Egmore, Chennai',
      description: 'Permanent tooth replacement solution with 15+ year durability',
      icon: '👑',
    },
    {
      id: 4,
      title: 'Professional Teeth Whitening in Egmore',
      description: 'Brighten your smile with professional-grade whitening treatment',
      icon: '✨',
    },
    {
      id: 5,
      title: 'Sleep Dentistry for Anxious Patients in Chennai',
      description: 'Comfortable dental treatment for nervous and anxious patients',
      icon: '😴',
    },
    {
      id: 6,
      title: 'Kids Dentistry in Egmore',
      description: 'Pediatric dental care in a friendly, welcoming environment',
      icon: '🧸',
    },
  ];

  // JSON-LD Schema for Local Services
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Crea Dental Clinic',
    image: 'https://www.creadentalclinic.com/images/crea-dental-logo.jpg',
    description: 'Best dental clinic in Egmore, Chennai offering invisalign, root canals, implants, and more',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '16/1, 1st floor, Sait Colony 1st Street, above Freshco',
      addressLocality: 'Egmore',
      addressRegion: 'Chennai',
      postalCode: '600008',
      addressCountry: 'IN',
    },
    telephone: '+918778548741',
    url: 'https://www.creadentalclinic.com',
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '40',
    },
    areaServed: ['Egmore', 'Chennai', 'Mylapore', 'Teynampet', 'Nungambakkam'],
    serviceArea: {
      '@type': 'City',
      name: 'Chennai',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Invisalign in Egmore',
      },
      {
        '@type': 'Offer',
        name: 'Root Canal Treatment in Egmore',
      },
      {
        '@type': 'Offer',
        name: 'Dental Implants in Chennai',
      },
      {
        '@type': 'Offer',
        name: 'Teeth Whitening in Egmore',
      },
      {
        '@type': 'Offer',
        name: 'Sleep Dentistry in Chennai',
      },
      {
        '@type': 'Offer',
        name: 'Kids Dentistry in Egmore',
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Dental Services in Egmore, Chennai
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our specialized dental solutions available in Egmore with expert care and latest technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Available in Egmore
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 bg-white rounded-lg p-8 border-l-4 border-accent">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Crea Dental Clinic in Egmore?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">⭐</div>
                <p className="font-bold text-gray-900">5.0/5 Rating</p>
                <p className="text-gray-600">40+ verified patient reviews</p>
              </div>
              <div>
                <div className="text-4xl mb-3">👨‍⚕️</div>
                <p className="font-bold text-gray-900">Expert Specialists</p>
                <p className="text-gray-600">15+ years of experience</p>
              </div>
              <div>
                <div className="text-4xl mb-3">💙</div>
                <p className="font-bold text-gray-900">Patient Focused</p>
                <p className="text-gray-600">Compassionate and professional care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
