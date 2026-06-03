// rebuild test
import Link from 'next/link';
import Image from 'next/image';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import TestimonialsPreview from '@/components/TestimonialsPreview';
import SocialActivities from '@/components/SocialActivities';
import EquipmentShowcase from '@/components/EquipmentShowcase';
import DoctorProfiles from '@/components/DoctorProfiles';

export default function Home() {

  return (
    <>
      {/* Professional Hero Section with Doctor Profiles */}
      <section className="bg-white py-0 md:py-0">
        {/* Main Hero */}
        <div className="relative bg-gradient-to-r from-primary via-primary to-primary-dark text-white overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm md:text-base mb-2 tracking-widest uppercase">Welcome to</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Crea Dental Clinic
              </h1>
              <p className="text-lg md:text-xl mb-2 opacity-95">
                <span className="font-semibold text-accent">Your Smile, Our Passion</span>
              </p>
              <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-8">
                Advanced dental solutions with compassionate care. From smile reconstruction to sleep dentistry, we transform smiles and restore confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg inline-block">
                  Book Appointment
                </Link>
                <Link href="/services" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 border border-white">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Profiles Section */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-gray-600 text-lg">Experienced specialists dedicated to your oral health</p>
            </div>

            <DoctorProfiles />
          </div>
        </div>
      </section>

      {/* Credentials & Trust Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg">Trusted by hundreds of patients with excellence and care</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">IDA Life Member</h3>
              <p className="text-gray-600 text-sm">Indian Dental Association</p>
            </div>

            <div className="text-center">
              <div className="inline-block w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prosthodontic Society</h3>
              <p className="text-gray-600 text-sm">Indian Prosthodontic Society Life Member</p>
            </div>

            <div className="text-center">
              <div className="inline-block w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">Latest dental equipment & techniques</p>
            </div>

            <div className="text-center">
              <div className="inline-block w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💙</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Patient Care</h3>
              <p className="text-gray-600 text-sm">Compassionate & comfortable experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-gray-600 text-lg">Advanced dental solutions for all your needs</p>
          </div>
          <Services limit={6} />
          <div className="text-center mt-12">
            <Link href="/services" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Gallery />
        </div>
      </section>

{/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-gray-600 text-lg">Real stories from our satisfied patients</p>
          </div>
          <TestimonialsPreview limit={3} />
          <div className="text-center mt-12">
            <Link href="/testimonials" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Best Smile?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let us help you achieve the smile you've always wanted. Schedule your consultation with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg inline-block">
              Book Your Appointment
            </Link>
            <a href="https://wa.me/918778548741" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 border border-white inline-block">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
