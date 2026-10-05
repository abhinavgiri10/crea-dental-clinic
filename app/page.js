import Link from 'next/link';
import Image from 'next/image';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import LocalServices from '@/components/LocalServices';
import TestimonialsPreview from '@/components/TestimonialsPreview';
import TestimonialsWidget from '@/components/TestimonialsWidget';
import SocialActivities from '@/components/SocialActivities';
import EquipmentShowcase from '@/components/EquipmentShowcase';
import DoctorProfiles from '@/components/DoctorProfiles';
import ClinicCarousel from '@/components/ClinicCarousel';
import VideoTestimonials from '@/components/VideoTestimonials';

export default function Home() {

  return (
    <>
      
           
      {/* Professional Hero Section with Doctor Profiles */}
      <section className="bg-white py-0 md:py-0">
        {/* Main Hero */}
        <div className="relative bg-gradient-to-r from-primary via-primary to-primary-dark text-white overflow-hidden">
          <ClinicCarousel />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl z-20"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl z-20"></div>

          <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-30">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm md:text-base mb-4 tracking-widest uppercase">Welcome to</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-lg">
                Crea Dental Clinic
              </h1>
              <p className="text-xl md:text-2xl mb-4 opacity-95 drop-shadow-lg">
                <span className="font-semibold text-accent">Your Smile, Our Passion</span>
              </p>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12 drop-shadow-lg">
                Advanced dental solutions with compassionate care. From smile reconstruction to sleep dentistry, we transform smiles and restore confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="bg-accent hover:bg-opacity-90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg inline-block drop-shadow-lg">
                  Book Appointment
                </Link>
                <Link href="/services" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 border border-white drop-shadow-lg">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
 {/* Trust Bar */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 text-center md:divide-x md:divide-gray-200">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">⭐ 5.0/5</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Google Rating</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Google Reviews</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Years of Dental Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">📍 Egmore</div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">Chennai</div>
            </div>
          </div>
        </div>
        {/* Doctor Profiles Section */}
        <div id="team" className="bg-gray-50 py-16 md:py-24 scroll-mt-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-gray-600 text-lg">Experienced specialists dedicated to your oral health</p>
            </div>

            <DoctorProfiles />
          </div>
        </div>
      </section>

      {/* Local Services with SEO Keywords */}
      <LocalServices />

 

            {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Google Reviews - What Our Patients Say */}
      <TestimonialsWidget />

           {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Gallery />
        </div>
      </section>
      {/* FAQ Teaser */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-semibold text-primary mb-3">
            Have questions before booking?
          </p>
          <p className="text-gray-600 text-lg mb-8">
            Find answers about consultations, treatments, appointments, and more.
          </p>
          <Link
            href="/faq"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
          >
            View Frequently Asked Questions →
          </Link>
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
