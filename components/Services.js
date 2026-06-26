'use client';

import Image from 'next/image';

const AnimatedIcon = ({ id }) => {
  // Mapping of service IDs to logo filenames
  const logoMap = {
    1: 'dental-implants.svg', // Dental Implants
    2: 'sleep-dentistry.svg', // Sleep Dentistry
    3: 'conscious-sedation.svg', // Conscious Sedation
    4: 'kids-dentistry.svg', // Kids Dentistry
    5: 'full-mouth-rehabilitation.svg', // Full Mouth Rehabilitation
    6: 'smile-reconstruction.svg', // Smile Reconstruction
    7: 'teeth-whitening-logo.png', // Teeth Whitening
    8: 'cosmetic-dentistry-logo.png', // Teeth Jewels
    13: 'tooth-extraction-logo.png', // Tooth Extractions
    14: 'fillings-&-sealants-logo.png', // Fillings & Sealants
    15: 'laser-dentistry-logo.png', // Laser Dentistry
    16: 'dental-logo.png', // Mouth Guards
    19: 'teeth-cleaning-logo.png', // Teeth Cleaning
    21: 'fillings-&-sealants-logo.png', // Root Canals (using fillings logo as placeholder)
    22: 'digital-x-ray-logo.png', // Digital X-ray
  };

  const logoFile = logoMap[id];

  if (logoFile) {
    return (
      <div className="w-16 h-16 relative flex items-center justify-center">
        <Image
          src={`/images/service-logos/${logoFile}`}
          alt={`Service logo ${id}`}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
    );
  }

  // Fallback to old SVG icons (for services without PNG logos)
  const style = `
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
    @keyframes sparkle { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes wash { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
    .animate-pulse { animation: pulse 2s infinite; }
    .animate-sparkle { animation: sparkle 1.5s infinite; }
    .animate-rotate { animation: rotate 3s linear infinite; }
    .animate-wash { animation: wash 1.5s infinite; }
  `;

  const icons = {
    1: ( // Dental Implants - Implant and Crown
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        <defs>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#808080', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Implant screw */}
        <rect x="28" y="35" width="8" height="18" fill="url(#metalGrad)" stroke="#666" strokeWidth="1"/>
        <circle cx="32" cy="35" r="4" fill="#999" stroke="#666" strokeWidth="1"/>
        {/* Crown */}
        <path d="M 20 30 L 24 18 L 28 24 L 32 12 L 36 24 L 40 18 L 44 30 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
        <rect x="20" y="30" width="24" height="8" rx="2" fill="#E6C200" stroke="#FFA500" strokeWidth="1.5"/>
        {/* Shine effect */}
        <ellipse cx="28" cy="22" rx="2" ry="4" fill="white" opacity="0.6" className="animate-sparkle"/>
      </svg>
    ),
    2: ( // Sleep Dentistry
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Sleeping face */}
        <circle cx="32" cy="32" r="20" fill="#FDB4B4" stroke="#0E95B8" strokeWidth="2"/>
        {/* Eyes closed */}
        <path d="M 24 28 Q 24 30 26 30" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        <path d="M 38 28 Q 38 30 40 30" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        {/* Peaceful mouth */}
        <path d="M 26 36 Q 32 38 38 36" fill="none" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round"/>
        {/* Z's for sleep */}
        <text x="48" y="18" fontSize="12" fill="#FF8C42" className="animate-pulse">Z</text>
        <text x="50" y="30" fontSize="10" fill="#FF8C42" className="animate-pulse">z</text>
      </svg>
    ),
    3: ( // Conscious Sedation
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Bottle */}
        <rect x="22" y="20" width="12" height="22" rx="2" fill="#E8F4F8" stroke="#0E95B8" strokeWidth="2"/>
        <rect x="24" y="18" width="8" height="4" fill="#0E95B8"/>
        {/* Liquid */}
        <rect x="24" y="28" width="8" height="12" fill="#0E95B8" opacity="0.6"/>
        {/* Droplets falling */}
        <circle cx="30" cy="45" r="2" fill="#FF8C42" opacity="0.8" className="animate-pulse"/>
        <circle cx="36" cy="50" r="2" fill="#FF8C42" opacity="0.8" className="animate-pulse"/>
        {/* Label */}
        <text x="28" y="26" fontSize="8" fill="#FF8C42" fontWeight="bold">RX</text>
      </svg>
    ),
    4: ( // Kids Dentistry - Boy & Girl
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Girl */}
        <circle cx="22" cy="20" r="6" fill="#FDBCB4"/>
        <circle cx="22" cy="32" r="7" fill="#FF6B9D"/>
        {/* Girl's smile */}
        <path d="M 20 30 Q 22 32 24 30" fill="none" stroke="#FFF" strokeWidth="1" strokeLinecap="round"/>
        {/* Boy */}
        <circle cx="42" cy="20" r="6" fill="#FDBCB4"/>
        <circle cx="42" cy="32" r="7" fill="#4A90E2"/>
        {/* Boy's smile */}
        <path d="M 40 30 Q 42 32 44 30" fill="none" stroke="#FFF" strokeWidth="1" strokeLinecap="round"/>
        {/* Hearts */}
        <path d="M 26 42 L 28 44 L 32 40 L 36 44 L 38 42" fill="#FF6B9D" opacity="0.6"/>
      </svg>
    ),
    5: ( // Full Mouth Rehabilitation - Dentures & Implant
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Denture plate */}
        <ellipse cx="32" cy="32" rx="16" ry="10" fill="#E8D5C4" stroke="#8B7355" strokeWidth="2"/>
        {/* Teeth on denture */}
        <rect x="18" y="28" width="3" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="23" y="28" width="3" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="28" y="28" width="3" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="33" y="28" width="3" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="38" y="28" width="3" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="43" y="28" width="3" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        {/* Implant post on side */}
        <rect x="48" y="35" width="3" height="10" fill="#C0C0C0" stroke="#666" strokeWidth="1"/>
        <circle cx="49.5" cy="35" r="2" fill="#999"/>
      </svg>
    ),
    6: ( // Smile Reconstruction
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Face */}
        <circle cx="32" cy="32" r="18" fill="#FDBCB4" stroke="#0E95B8" strokeWidth="2"/>
        {/* Eyes happy */}
        <circle cx="26" cy="28" r="2" fill="#333"/>
        <circle cx="38" cy="28" r="2" fill="#333"/>
        {/* Wide smile */}
        <path d="M 24 36 Q 32 42 40 36" fill="#FF8C42" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
        {/* Shine sparkles */}
        <circle cx="28" cy="24" r="1.5" fill="#FFD700" className="animate-sparkle"/>
        <circle cx="36" cy="24" r="1.5" fill="#FFD700" className="animate-sparkle"/>
      </svg>
    ),
    7: ( // Teeth Whitening - Smiling with Sparkling Teeth
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Face */}
        <circle cx="32" cy="26" r="14" fill="#FFD0A3" stroke="#0E95B8" strokeWidth="2"/>
        {/* Big smile mouth */}
        <path d="M 20 28 Q 32 38 44 28" fill="#FF8C42" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
        {/* Upper teeth line */}
        <line x1="22" y1="28" x2="42" y2="28" stroke="#FFF" strokeWidth="2"/>
        {/* Sparkles around teeth */}
        <circle cx="18" cy="22" r="1.5" fill="#FFD700" className="animate-sparkle"/>
        <circle cx="26" cy="18" r="1.5" fill="#FFD700" className="animate-sparkle"/>
        <circle cx="38" cy="18" r="1.5" fill="#FFD700" className="animate-sparkle"/>
        <circle cx="46" cy="22" r="1.5" fill="#FFD700" className="animate-sparkle"/>
        {/* Light rays */}
        <line x1="32" y1="12" x2="32" y2="8" stroke="#FFD700" strokeWidth="1" opacity="0.6" className="animate-pulse"/>
      </svg>
    ),
    8: ( // Teeth Jewels - Tooth with Diamond/Gold
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        <defs>
          <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFFAFA', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F0E68C', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Tooth */}
        <path d="M 24 20 L 28 16 L 36 16 L 40 20 L 38 45 Q 32 48 26 45 Z" fill="url(#toothGrad)" stroke="#DAA520" strokeWidth="2"/>
        {/* Diamond stud on tooth */}
        <polygon points="32,25 35,28 32,31 29,28" fill="#FFD700" stroke="#FFA500" strokeWidth="1" className="animate-sparkle"/>
        {/* Light reflection */}
        <circle cx="31" cy="24" r="1.5" fill="#FFF" opacity="0.8"/>
      </svg>
    ),
    9: ( // Check-ups
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Clipboard */}
        <rect x="18" y="16" width="28" height="36" rx="2" fill="#E8F4F8" stroke="#0E95B8" strokeWidth="2"/>
        {/* Clipboard clip */}
        <rect x="24" y="12" width="16" height="6" fill="#FF8C42" stroke="#333" strokeWidth="1"/>
        {/* Checkmarks */}
        <path d="M 24 26 L 26 28 L 30 24" fill="none" stroke="#0E95B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 24 36 L 26 38 L 30 34" fill="none" stroke="#0E95B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 24 46 L 26 48 L 30 44" fill="none" stroke="#0E95B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    10: ( // Cosmetic Procedures
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Mirror */}
        <circle cx="32" cy="32" r="16" fill="#FFE4C4" stroke="#FFD700" strokeWidth="3"/>
        <circle cx="32" cy="32" r="14" fill="#FFF8DC" stroke="#FFD700" strokeWidth="1"/>
        {/* Reflection sparkle */}
        <circle cx="26" cy="26" r="3" fill="#FFD700" opacity="0.8" className="animate-sparkle"/>
      </svg>
    ),
    11: ( // Dentures & Bridges
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Upper denture */}
        <ellipse cx="32" cy="20" rx="14" ry="8" fill="#E8D5C4" stroke="#8B7355" strokeWidth="2"/>
        {/* Upper teeth */}
        <rect x="20" y="16" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="24" y="16" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="28" y="16" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="34" y="16" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="38" y="16" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="42" y="16" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        {/* Lower denture */}
        <ellipse cx="32" cy="42" rx="14" ry="8" fill="#E8D5C4" stroke="#8B7355" strokeWidth="2"/>
        {/* Lower teeth */}
        <rect x="20" y="42" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="24" y="42" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="28" y="42" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="34" y="42" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="38" y="42" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
        <rect x="42" y="42" width="2.5" height="6" fill="#FFF" stroke="#999" strokeWidth="0.5"/>
      </svg>
    ),
    12: ( // Emergency Care
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Alarm bell */}
        <path d="M 22 16 Q 22 12 26 12 Q 30 12 30 16" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
        <path d="M 34 16 Q 34 12 38 12 Q 42 12 42 16" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
        <circle cx="32" cy="24" r="14" fill="#FFE4E1" stroke="#FF6B6B" strokeWidth="2"/>
        {/* Exclamation mark */}
        <circle cx="32" cy="30" r="1.5" fill="#FF6B6B"/>
        <rect x="30.5" y="34" width="3" height="6" fill="#FF6B6B"/>
        {/* Pulsing */}
        <circle cx="32" cy="24" r="14" fill="none" stroke="#FF8C42" strokeWidth="1" opacity="0.5" className="animate-pulse"/>
      </svg>
    ),
    13: ( // Tooth Extractions - Tooth with Forceps
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Tooth */}
        <path d="M 28 16 L 32 12 L 36 16 L 34 40 Q 32 44 30 40 Z" fill="#FFFAF0" stroke="#8B7355" strokeWidth="2"/>
        {/* Forceps left handle */}
        <path d="M 22 20 Q 20 22 22 28 L 28 32" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round"/>
        {/* Forceps right handle */}
        <path d="M 42 20 Q 44 22 42 28 L 36 32" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round"/>
        {/* Forceps grip circles */}
        <circle cx="20" cy="22" r="2" fill="#999"/>
        <circle cx="44" cy="22" r="2" fill="#999"/>
      </svg>
    ),
    14: ( // Mouth Guards
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Upper guard */}
        <path d="M 20 26 L 22 18 L 32 16 L 42 18 L 44 26 Q 32 32 20 26" fill="#4A90E2" stroke="#0E95B8" strokeWidth="2"/>
        {/* Lower guard */}
        <path d="M 20 34 Q 32 32 44 34 L 42 42 L 32 44 L 22 42 Z" fill="#4A90E2" stroke="#0E95B8" strokeWidth="2"/>
        {/* Shine */}
        <ellipse cx="32" cy="22" rx="4" ry="3" fill="white" opacity="0.4" className="animate-pulse"/>
      </svg>
    ),
    15: ( // Laser Dentistry
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        <defs>
          <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Laser machine body */}
        <rect x="22" y="20" width="20" height="18" rx="2" fill="#333" stroke="#666" strokeWidth="2"/>
        {/* Laser head */}
        <circle cx="40" cy="29" r="4" fill="#FF0000" stroke="#FF6B6B" strokeWidth="1"/>
        {/* Laser beam */}
        <line x1="44" y1="29" x2="52" y2="29" stroke="#FF0000" strokeWidth="3" opacity="0.8" className="animate-pulse"/>
        {/* Energy glow */}
        <circle cx="44" cy="29" r="2" fill="#FFD700" className="animate-sparkle"/>
      </svg>
    ),
    16: ( // Root Canals - Tooth with Filling and Roots
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Tooth crown */}
        <path d="M 26 18 L 30 16 L 34 18 L 32 28" fill="#FFFAF0" stroke="#8B7355" strokeWidth="2"/>
        {/* Roots */}
        <path d="M 30 28 Q 28 35 27 45" fill="none" stroke="#8B7355" strokeWidth="1.5"/>
        <path d="M 32 28 L 32 45" fill="none" stroke="#8B7355" strokeWidth="1.5"/>
        <path d="M 34 28 Q 36 35 37 45" fill="none" stroke="#8B7355" strokeWidth="1.5"/>
        {/* Gutta percha filling (pink/orange) */}
        <path d="M 30 28 Q 29 32 29 36 Q 30 38 32 40 Q 34 38 35 36 Q 35 32 34 28 Z" fill="#FF8C42" stroke="#FF6B35" strokeWidth="1"/>
        {/* Sealer in roots */}
        <ellipse cx="28" cy="40" rx="1.5" ry="3" fill="#FF8C42" opacity="0.6"/>
        <ellipse cx="32" cy="40" rx="1.5" ry="3" fill="#FF8C42" opacity="0.6"/>
        <ellipse cx="36" cy="40" rx="1.5" ry="3" fill="#FF8C42" opacity="0.6"/>
      </svg>
    ),
    17: ( // Teeth Cleaning - Teeth under Shower
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Upper teeth */}
        <rect x="20" y="20" width="4" height="8" fill="#FFF" stroke="#999" strokeWidth="1"/>
        <rect x="26" y="20" width="4" height="8" fill="#FFF" stroke="#999" strokeWidth="1"/>
        <rect x="32" y="20" width="4" height="8" fill="#FFF" stroke="#999" strokeWidth="1"/>
        <rect x="38" y="20" width="4" height="8" fill="#FFF" stroke="#999" strokeWidth="1"/>
        {/* Water drops */}
        <circle cx="22" cy="14" r="1.5" fill="#0E95B8" opacity="0.7" className="animate-wash"/>
        <circle cx="28" cy="12" r="1.5" fill="#0E95B8" opacity="0.7" className="animate-wash"/>
        <circle cx="34" cy="14" r="1.5" fill="#0E95B8" opacity="0.7" className="animate-wash"/>
        <circle cx="40" cy="12" r="1.5" fill="#0E95B8" opacity="0.7" className="animate-wash"/>
        {/* Water stream */}
        <path d="M 32 10 L 30 16 M 32 10 L 32 16 M 32 10 L 34 16" fill="none" stroke="#0E95B8" strokeWidth="1" opacity="0.5" className="animate-pulse"/>
      </svg>
    ),
    18: ( // Oral Surgery
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Scalpel */}
        <path d="M 20 20 L 28 44" fill="none" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round"/>
        <polygon points="28,44 30,40 26,40" fill="#C0C0C0"/>
        {/* Handle */}
        <circle cx="18" cy="18" r="3" fill="#333"/>
        {/* Medical cross */}
        <g transform="translate(44, 32)">
          <rect x="-2" y="-8" width="4" height="16" fill="#FF6B6B"/>
          <rect x="-8" y="-2" width="16" height="4" fill="#FF6B6B"/>
        </g>
      </svg>
    ),
    19: ( // Fillings & Sealants - Tooth Filling with visible material
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Tooth outline */}
        <path d="M 26 16 L 30 12 L 38 12 L 42 16 L 40 44 Q 32 48 24 44 Z" fill="#FFFAF0" stroke="#8B7355" strokeWidth="2"/>
        {/* Filling cavity shape */}
        <path d="M 30 24 Q 32 20 34 24 Q 32 30 30 24" fill="#0E95B8" stroke="#0E95B8" strokeWidth="1"/>
        {/* Sealant layer */}
        <ellipse cx="32" cy="26" rx="3" ry="2.5" fill="#00CED1" opacity="0.7"/>
        {/* Shine on filling */}
        <circle cx="31" cy="23" r="1" fill="#FFF" opacity="0.6" className="animate-sparkle"/>
      </svg>
    ),
    20: ( // Veneers & Crowns
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Tooth */}
        <path d="M 28 24 L 32 20 L 36 24 L 34 44 Q 32 47 30 44 Z" fill="#FFFAF0" stroke="#666" strokeWidth="1.5"/>
        {/* Veneer/Crown overlay */}
        <path d="M 28 24 L 32 20 L 36 24 L 34 40 Q 32 42 30 40 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="2" opacity="0.9"/>
        {/* Light reflection */}
        <ellipse cx="31" cy="25" rx="2" ry="3" fill="#FFF" opacity="0.7" className="animate-sparkle"/>
      </svg>
    ),
    21: ( // Online Booking
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* Calendar */}
        <rect x="18" y="18" width="28" height="28" rx="2" fill="#E8F4F8" stroke="#0E95B8" strokeWidth="2"/>
        {/* Days of week */}
        <line x1="18" y1="26" x2="46" y2="26" stroke="#0E95B8" strokeWidth="1"/>
        {/* Calendar grid */}
        <line x1="26" y1="18" x2="26" y2="46" stroke="#CCC" strokeWidth="0.5"/>
        <line x1="34" y1="18" x2="34" y2="46" stroke="#CCC" strokeWidth="0.5"/>
        {/* Checkmark */}
        <path d="M 24 36 L 26 38 L 30 34" fill="none" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"/>
      </svg>
    ),
    22: ( // Digital X-ray
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <style>{style}</style>
        {/* X-ray machine head */}
        <circle cx="32" cy="18" r="6" fill="#C0C0C0" stroke="#666" strokeWidth="2"/>
        {/* Arm */}
        <rect x="30" y="24" width="4" height="12" fill="#C0C0C0" stroke="#666" strokeWidth="1"/>
        {/* X-ray beam */}
        <rect x="28" y="36" width="8" height="12" fill="#FFE4E1" stroke="#FF6B6B" strokeWidth="2"/>
        {/* Tooth shadow inside */}
        <path d="M 30 40 L 32 38 L 34 40 L 33 46 Q 32 48 31 46 Z" fill="#666" opacity="0.6"/>
        {/* Radiation glow */}
        <rect x="28" y="36" width="8" height="12" fill="none" stroke="#FF6B6B" strokeWidth="1" opacity="0.5" className="animate-pulse"/>
      </svg>
    ),
  };

  return <div className="w-16 h-16">{icons[id] || icons[1]}</div>;
};

const SERVICES = [
  {
    id: 1,
    name: 'Dental Implants',
    description: 'Advanced implant solutions for missing teeth. Restore function and aesthetics with our expert implantology.',
  },
  {
    id: 2,
    icon: '😴',
    name: 'Sleep Dentistry',
    description: 'Relaxation sedation for anxious patients. Experience comfortable dental procedures while you relax.',
  },
  {
    id: 3,
    icon: '💤',
    name: 'Conscious Sedation',
    description: 'Safe sedation options for complex procedures. Our team ensures your comfort and safety throughout.',
  },
  {
    id: 4,
    name: 'Kids Dentistry',
    description: 'Gentle, child-friendly dental care. Making dental visits fun and comfortable for your little ones.',
  },
  {
    id: 5,
    name: 'Full Mouth Rehabilitation',
    description: 'Complete smile reconstruction. Transform your smile and restore confidence with comprehensive restoration.',
  },
  {
    id: 6,
    icon: '😁',
    name: 'Smile Reconstruction',
    description: 'Personalized smile makeover. Combining aesthetics and function for your perfect smile.',
  },
  {
    id: 7,
    name: 'Teeth Whitening',
    description: 'Professional whitening treatments. Achieve a brighter, more confident smile in just one visit.',
  },
  {
    id: 8,
    name: 'Teeth Jewels',
    description: 'Tooth-colored bonding solutions. Repair chips, cracks, and gaps with natural-looking results.',
  },
  {
    id: 9,
    icon: '✅',
    name: 'Check-ups',
    description: 'Routine dental examinations. Regular check-ups to prevent problems and maintain oral health.',
  },
  {
    id: 10,
    icon: '💎',
    name: 'Cosmetic Procedures',
    description: 'Aesthetic dental treatments. Enhance your smile with veneers, whitening, and more.',
  },
  {
    id: 11,
    icon: '👄',
    name: 'Dentures & Bridges',
    description: 'Custom dentures and fixed bridges. Replace missing teeth with comfortable, functional solutions.',
  },
  {
    id: 12,
    icon: '🚨',
    name: 'Emergency Care',
    description: 'Urgent dental treatment available. Quick relief for dental pain and emergencies.',
  },
  {
    id: 13,
    name: 'Tooth Extractions',
    description: 'Professional tooth removal. Safe extraction with minimal discomfort and proper aftercare.',
  },
  {
    id: 14,
    name: 'Fillings & Sealants',
    description: 'Cavity treatment and prevention. Protect your teeth with quality amalgam or composite fillings.',
  },
  {
    id: 15,
    name: 'Laser Dentistry',
    description: 'Advanced laser treatments. Precise, minimally invasive dental procedures with faster healing.',
  },
  {
    id: 16,
    name: 'Mouth Guards',
    description: 'Custom protective guards. Protect your teeth during sports and while sleeping.',
  },
  {
    id: 17,
    icon: '📱',
    name: 'Online Booking',
    description: 'Schedule appointments online. Quick and convenient booking at your preferred time.',
  },
  {
    id: 18,
    icon: '🔬',
    name: 'Oral Surgery',
    description: 'Complex surgical procedures. Experienced team for wisdom tooth removal and advanced surgery.',
  },
  {
    id: 19,
    name: 'Teeth Cleaning',
    description: 'Professional cleaning and scaling. Remove tartar and plaque for healthier teeth.',
  },
  {
    id: 20,
    icon: '👑',
    name: 'Veneers & Crowns',
    description: 'Dental restoration. Aesthetic crowns and veneers for a perfect, natural-looking smile.',
  },
  {
    id: 21,
    name: 'Root Canals',
    description: 'Endodontic treatment. Save your tooth with our painless root canal procedures.',
  },
  {
    id: 22,
    icon: '🖼️',
    name: 'Digital X-ray',
    description: 'Advanced imaging. Low-radiation digital X-rays for precise diagnosis.',
  },
];

export default function Services({ limit }) {
  const displayed = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayed.map((service) => (
        <div key={service.id} className="group bg-white rounded-lg p-6 border-l-4 border-accent hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
          {service.id === 1 || service.id === 2 || service.id === 3 || service.id === 4 || service.id === 5 || service.id === 6 || service.id === 7 || service.id === 8 || service.id === 13 || service.id === 14 || service.id === 15 || service.id === 16 || service.id === 19 || service.id === 20 || service.id === 21 || service.id === 22 ? (
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              <AnimatedIcon id={service.id} />
            </div>
          ) : (
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
          )}
          <h3 className="text-lg font-bold text-primary mb-2">{service.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
