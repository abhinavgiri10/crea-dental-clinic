# ⚡ Quick Edit Reference - Copy & Paste Solutions

Fast solutions for the most common edits you'll want to make.

---

## 🏠 1. Edit Home Page Text

**File:** `app/page.js`

**Current:**
```jsx
<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  Your Smile, Our Passion
</h1>
<p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
  Creating exceptional dental experiences catered to your requirements...
</p>
```

**Change to:**
```jsx
<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  Your Custom Title Here
</h1>
<p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
  Your custom subtitle here
</p>
```

---

## 📞 2. Update Phone Numbers Everywhere

Search for: `+918778548741`

Replace with: `+91XXXXXXXXXX` (your number)

**Files that need updating:**
- `components/Footer.js`
- `app/booking/page.js`
- `app/services/page.js`
- `app/testimonials/page.js`

**Shortcut:** Use Ctrl + H in VS Code (Find & Replace)

---

## ✨ 3. Change Brand Colors

**File:** `tailwind.config.js`

Find:
```js
colors: {
  'primary': '#0E95B8',    // Teal
  'accent': '#FF8C42',     // Orange
}
```

**Popular Color Combinations:**

**Option 1: Modern Blue**
```js
colors: {
  'primary': '#2563EB',     // Blue
  'accent': '#F59E0B',      // Amber
}
```

**Option 2: Professional Green**
```js
colors: {
  'primary': '#059669',     // Green
  'accent': '#F97316',      // Orange
}
```

**Option 3: Premium Purple**
```js
colors: {
  'primary': '#7C3AED',     // Purple
  'accent': '#EC4899',      // Pink
}
```

---

## 👥 4. Replace All Testimonials

**File:** `app/testimonials/page.js`

Replace the entire `ALL_TESTIMONIALS` array with:

```jsx
const ALL_TESTIMONIALS = [
  {
    id: 1,
    name: 'Patient Name 1',
    role: 'Patient',
    rating: 5,
    text: 'Paste your Google review here. Keep it between 50-150 words.',
  },
  {
    id: 2,
    name: 'Patient Name 2',
    role: 'Patient',
    rating: 5,
    text: 'Second review text here.',
  },
  {
    id: 3,
    name: 'Patient Name 3',
    role: 'Patient',
    rating: 5,
    text: 'Third review text here.',
  },
  // Add more testimonials following the same format
];
```

**Find reviews on Google:**
1. Search "Crea Dental Clinic" on Google Maps
2. Scroll to Reviews section
3. Click "See all reviews"
4. Copy 5-6 positive reviews

---

## 🦷 5. Update Services

**File:** `components/Services.js`

Find:
```jsx
const SERVICES = [
  {
    id: 1,
    icon: '🦷',
    name: 'General Dentistry',
    description: 'Routine check-ups, cleanings, and preventive care to keep your teeth healthy and strong.',
  },
  // ... more services
];
```

**Replace with your services:**
```jsx
const SERVICES = [
  {
    id: 1,
    icon: '🦷',
    name: 'Service Name',
    description: 'Description of service. What can patients expect?',
  },
  {
    id: 2,
    icon: '✨',
    name: 'Another Service',
    description: 'What makes this service special?',
  },
  // Add more
];
```

**Emoji suggestions:**
- 🦷 Teeth/General
- ✨ Cosmetic/Whitening
- 🔧 Repair/Restoration
- 📋 Orthodontics/Braces
- 🦴 Surgery
- 👶 Kids/Pediatric
- 💎 Premium/Luxury
- ⚡ Fast/Urgent

---

## 📧 6. Update Email Address

Search for: `bookings@creadentalclinic.com`

Replace with: `your-email@yourdomain.com`

**Files:**
- `components/Footer.js`
- `app/booking/page.js`
- `app/contact/page.js`

---

## 📸 7. Add Clinic Photos to Gallery

**File:** `components/Gallery.js`

Replace the placeholder gradient with actual images:

```jsx
{/* OLD - Placeholder */}
<div className={`w-full h-full bg-gradient-to-br ${item.bgColor}`}>
  <div className="text-center text-white">
    <div className="text-4xl mb-2">📸</div>
    <p className="text-lg font-semibold">{item.title}</p>
  </div>
</div>

{/* NEW - With Image */}
<img 
  src="/images/clinic/photo1.jpg" 
  alt={item.title}
  className="w-full h-full object-cover"
/>
```

**Steps:**
1. Create folder: `public/images/clinic/`
2. Add your clinic photos there
3. Update paths: `/images/clinic/photo1.jpg`

---

## 🎯 8. Change Button Text

**Common button changes:**

**Home page button:**
```jsx
// OLD
<button className="btn-primary">Book Appointment</button>

// NEW
<button className="btn-primary">Schedule Now</button>
```

**All CTA buttons:**
Search for: `Book Now`
Replace with: `Schedule Your Visit` (or your preference)

---

## 🎨 9. Change Font Sizes

**File:** `app/globals.css`

Add custom sizes:
```css
h1 {
  @apply text-5xl;  /* Change 5xl to 4xl or 6xl */
}

h2 {
  @apply text-3xl;  /* Change sizes */
}
```

---

## 🕐 10. Update Clinic Hours

**File:** `components/Footer.js`

Find:
```jsx
<li>Mon - Sat: 9:00 AM - 8:00 PM</li>
<li>Sunday: By Appointment</li>
```

Change to:
```jsx
<li>Mon - Fri: 8:00 AM - 6:00 PM</li>
<li>Sat: 9:00 AM - 4:00 PM</li>
<li>Sun: Closed</li>
```

---

## 📍 11. Update Address & Location

**File:** `components/Footer.js`

Find:
```jsx
<span>16/1, 1st Floor, Sait Colony 1st Street, Above Freshco, Egmore, Chennai 600008</span>
```

Replace with your address.

**Also update in:**
- `app/booking/page.js`
- `app/services/page.js`

---

## 🎬 12. Add Video Testimonials

**File:** `app/testimonials/page.js`

Replace placeholder divs with YouTube embeds:

```jsx
{/* OLD */}
<div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
  <div className="text-center">
    <div className="text-5xl mb-3">▶️</div>
    <p className="text-white font-semibold">Patient Testimonial 1</p>
  </div>
</div>

{/* NEW - YouTube */}
<iframe
  className="w-full h-full rounded-lg"
  src="https://www.youtube.com/embed/VIDEO_ID_HERE"
  frameBorder="0"
  allowFullScreen
></iframe>
```

**To get VIDEO_ID:**
1. Copy YouTube link: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
2. Extract ID: `dQw4w9WgXcQ`
3. Use in iframe src

---

## 💼 13. Add Team Members

**Create new file:** `components/Team.js`

```jsx
export default function Team() {
  const team = [
    {
      name: 'Dr. Abhinav Giri',
      role: 'Chief Dentist',
      bio: 'Specialized in restorative dentistry with 10+ years experience',
      icon: '👨‍⚕️'
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Cosmetic Dentist',
      bio: 'Expert in smile makeovers and teeth whitening',
      icon: '👩‍⚕️'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.name} className="card text-center">
          <div className="text-6xl mb-4">{member.icon}</div>
          <h3 className="text-xl font-bold text-primary">{member.name}</h3>
          <p className="text-accent font-semibold mb-2">{member.role}</p>
          <p className="text-text-light text-sm">{member.bio}</p>
        </div>
      ))}
    </div>
  );
}
```

Then use in `app/page.js`:
```jsx
import Team from '@/components/Team';

// Add in page:
<Team />
```

---

## 🔐 14. Change Admin Password

**File:** `.env.local`

```env
ADMIN_PASSWORD=your_secure_password_here
```

**IMPORTANT:** 
- Never use simple passwords
- Change before deploying
- Use strong passwords (mix of letters, numbers, symbols)

---

## ⚙️ 15. Enable Email Notifications

**File:** `.env.local`

Add:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**To get Gmail app password:**
1. Go to myaccount.google.com
2. Security → 2-Step Verification (enable it)
3. App passwords → Generate
4. Copy the 16-character password
5. Use in SMTP_PASS

---

## 📱 16. Make Mobile Menu Open by Default

**File:** `components/Header.js`

Find:
```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

Change to:
```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
```

---

## 🌐 17. Change Website Title & Description

**File:** `app/layout.js`

Find:
```jsx
export const metadata = {
  title: 'Crea Dental Clinic - Chennai Dental Care',
  description: 'Creating exceptional dental experiences...',
};
```

Change to:
```jsx
export const metadata = {
  title: 'Your Clinic Name - Your Tagline',
  description: 'Your clinic description goes here',
};
```

---

## 🎯 18. Quick Style Tweaks

### Make all cards have border
Find in `app/globals.css`:
```css
.card {
  @apply bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg;
}
```

Add:
```css
.card {
  @apply bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-2 border-primary;
}
```

### Make buttons larger
```css
.btn-primary {
  @apply px-8 py-4 text-lg;  /* Increase padding and font */
}
```

### Make text more bold
```css
h1, h2, h3 {
  @apply font-extrabold;  /* Was font-bold */
}
```

---

## ✅ Checklist Before Launch

- [ ] Update phone number (all pages)
- [ ] Update email address
- [ ] Add real testimonials
- [ ] Change colors to match branding
- [ ] Add clinic photos
- [ ] Update services list
- [ ] Update business hours
- [ ] Update address
- [ ] Change clinic name if needed
- [ ] Set up email notifications
- [ ] Test on mobile
- [ ] Deploy to Vercel

---

**Pro Tip:** Use Ctrl + F (Find) in VS Code to quickly locate text across files!

Good luck! 🚀
