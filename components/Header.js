'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path ? 'text-accent font-semibold' : 'text-gray-700 hover:text-primary transition-colors';
  };

  return (
    <header className="bg-white sticky top-0 z-1000 shadow-sm">
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-4 items-center text-xs md:text-sm">
            <a href="tel:+918778548741" className="hover:text-accent transition-colors">📞 +91 8778548741</a>
            <a href="https://wa.me/918778548741" className="hover:text-accent transition-colors">💬 WhatsApp</a>
            <span>⏰ Mon-Sun: 10 AM - 8 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo & Clinic Name */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/images/crea-dental-logo.jpg"
            alt="Crea Dental Clinic Logo"
            width={80}
            height={80}
            className="rounded-lg object-contain"
            priority
          />
          <div className="hidden sm:block">
            <div className="font-bold text-primary text-lg">CREA DENTAL</div>
            <div className="text-accent text-xs font-semibold">Your Smile, Our Passion</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/" className={`font-medium transition-all ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={`font-medium transition-all ${isActive('/services')}`}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className={`font-medium transition-all ${isActive('/testimonials')}`}>
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/booking" className="bg-accent hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:shadow-lg">
              Book Appointment
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/booking" className="block bg-accent hover:bg-opacity-90 text-white text-center font-bold py-3 rounded-lg transition-all duration-300">
              Book Appointment
            </Link>
            <a href="https://wa.me/918778548741" className="block bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 rounded-lg transition-all duration-300">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
