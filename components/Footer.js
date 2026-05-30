'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/crea-dental-logo.jpg"
                alt="Crea Dental Clinic Logo"
                width={60}
                height={60}
                className="rounded-lg object-contain"
              />
              <h3 className="text-xl font-bold text-white">CREA DENTAL</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Advanced dental care with compassion. Dr. Abhinav Giri & Dr. Khaidem Monalee Devi serving the community since 2025.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/918778548741" target="_blank" rel="noopener noreferrer" className="inline-block w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                💬
              </a>
              <a href="https://g.co/kgs/Z8guLVG" target="_blank" rel="noopener noreferrer" className="inline-block w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                📍
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="opacity-80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="opacity-80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="opacity-80 hover:text-accent transition-colors">Patient Reviews</Link></li>
              <li><Link href="/booking" className="opacity-80 hover:text-accent transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">📍</span>
                <span>16/1, 1st Floor, Sait Colony 1st Street, Above Freshco, Egmore, Chennai 600008</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">📞</span>
                <a href="tel:+918778548741" className="hover:text-accent transition-colors">+91 8778548741</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">📧</span>
                <a href="mailto:bookings@creadentalclinic.com" className="hover:text-accent transition-colors text-xs md:text-sm">bookings@creadentalclinic.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-5 text-white">Hours & Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="font-semibold text-accent">Monday - Sunday</li>
              <li>9:00 AM - 8:00 PM</li>
              <li className="border-t border-gray-700 pt-3 mt-3">
                <span className="text-accent font-semibold">Established:</span> May 2025
              </li>
              <li>
                <span className="text-accent font-semibold">IDA Life Member</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>
            © 2025 Crea Dental Clinic. All rights reserved. | Designed for smiles.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/testimonials" className="hover:text-accent transition-colors">Reviews</Link>
            <a href="#top" className="hover:text-accent transition-colors">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
