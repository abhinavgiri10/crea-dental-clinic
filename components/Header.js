'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trackConversion = () => {
    if (typeof window.gtag_report_header_conversion === 'function') {
      window.gtag_report_header_conversion();
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => {
    return pathname === path
      ? 'text-accent font-semibold'
      : 'text-gray-700 hover:text-primary transition-colors';
  };

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-5 md:gap-8 text-xs md:text-sm">
          <a
            href="tel:+918778548741"
            onClick={trackConversion}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <span>📞</span>
            <span>+91 8778548741</span>
          </a>
          <a
            href="https://wa.me/918778548741"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackConversion}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/creadentalclinic_"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <span>📱</span>
            <span>Instagram</span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5">
            <span>⏰</span>
            <span>Mon-Sun: 10 AM - 8 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
<nav className="relative max-w-7xl mx-auto px-4 py-1.5 md:py-3 flex justify-between items-center">
  {/* Logo & Clinic Name */}
  <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
    <Image
      src="/images/crea-dental-logo.jpg"
      alt="Crea Dental Clinic Logo"
      width={96}
      height={96}
      className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-md object-contain"
      priority
    />
    <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-center md:text-left">
      <div className="font-bold text-primary text-xl md:text-3xl leading-tight whitespace-nowrap">
        CREA DENTAL
      </div>
      <div className="hidden md:block text-accent text-sm font-semibold">
        Your Smile, Our Passion
      </div>
    </div>
  </Link>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex gap-8 items-center text-base">
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
      <Link href="/faq" className={`font-medium transition-all ${isActive('/faq')}`}>
        FAQ
      </Link>
    </li>
    <li>
      <Link
        href="/booking"
        className="bg-accent hover:bg-opacity-90 text-white px-5 py-2.5 rounded-lg font-bold transition-all duration-300 hover:shadow-lg"
      >
        Book Appointment
      </Link>
    </li>
  </ul>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-primary p-2"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    aria-label="Toggle menu"
    aria-expanded={mobileMenuOpen}
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {mobileMenuOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
</nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={closeMenu} className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" onClick={closeMenu} className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/testimonials" onClick={closeMenu} className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/faq" onClick={closeMenu} className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors">
              FAQ
            </Link>
            <div className="pt-2 space-y-2">
              <Link
                href="/booking"
                onClick={closeMenu}
                className="block bg-accent hover:bg-opacity-90 text-white text-center font-bold py-2.5 rounded-lg transition-all duration-300"
              >
                Book Appointment
              </Link>
              <a
                href="https://wa.me/918778548741"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackConversion();
                  closeMenu();
                }}
                className="block bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2.5 rounded-lg transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}