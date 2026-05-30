import Services from '@/components/Services';
import Link from 'next/link';

export const metadata = {
  title: 'Services - Crea Dental Clinic',
  description: 'Explore our comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Dental Services</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
            From routine check-ups to advanced smile reconstruction, we offer complete dental solutions for your entire family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">23 specialized dental services to meet all your needs</p>
          </div>
          <Services />
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">General Dentistry</h2>
              <p className="text-text-light mb-4 leading-relaxed">
                Our general dentistry services include routine cleanings, check-ups, and preventive care to maintain your oral health.
              </p>
              <ul className="space-y-2 text-text-light">
                <li>✓ Regular check-ups and exams</li>
                <li>✓ Professional cleanings</li>
                <li>✓ Cavity fillings</li>
                <li>✓ Root canal therapy</li>
                <li>✓ Gum disease treatment</li>
              </ul>
            </div>
            <div className="bg-light-bg p-8 rounded-lg">
              <div className="bg-gradient-to-br from-primary to-primary-dark h-64 rounded-lg flex items-center justify-center text-white text-4xl">
                🦷
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-light-bg p-8 rounded-lg order-2 md:order-1">
              <div className="bg-gradient-to-br from-accent to-orange-500 h-64 rounded-lg flex items-center justify-center text-white text-4xl">
                ✨
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Cosmetic Dentistry</h2>
              <p className="text-text-light mb-4 leading-relaxed">
                Transform your smile with our cosmetic dentistry services designed to enhance your natural beauty.
              </p>
              <ul className="space-y-2 text-text-light">
                <li>✓ Teeth whitening</li>
                <li>✓ Porcelain veneers</li>
                <li>✓ Bonding</li>
                <li>✓ Smile makeovers</li>
                <li>✓ Gum reshaping</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Advanced Restorative</h2>
              <p className="text-text-light mb-4 leading-relaxed">
                Restore your smile with our advanced restoration services using the latest technology.
              </p>
              <ul className="space-y-2 text-text-light">
                <li>✓ Dental implants</li>
                <li>✓ Crowns and bridges</li>
                <li>✓ Dentures</li>
                <li>✓ Inlays and onlays</li>
                <li>✓ Full mouth restoration</li>
              </ul>
            </div>
            <div className="bg-light-bg p-8 rounded-lg">
              <div className="bg-gradient-to-br from-primary to-primary-dark h-64 rounded-lg flex items-center justify-center text-white text-4xl">
                🔧
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-bg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to improve your smile?
          </h2>
          <p className="text-text-light mb-8 text-lg">
            Schedule your consultation today and let us help you achieve your dental goals.
          </p>
          <Link href="/booking" className="inline-block btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
