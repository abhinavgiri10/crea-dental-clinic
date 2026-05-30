# Crea Dental Clinic Website

A professional, full-stack dental clinic website built with Next.js, React, and Tailwind CSS. Features appointment booking system, patient testimonials, and service showcase.

## 📋 Features

✅ **Home Page** - Hero section, service highlights, gallery, testimonials preview
✅ **Services Page** - Detailed service descriptions and features
✅ **Testimonials Page** - Patient reviews (5-star), video testimonial section
✅ **Appointment Booking** - Online form with date/time selection
✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Contact Integration** - WhatsApp, phone, email booking options
✅ **Professional Branding** - Teal (#0E95B8) and Orange (#FF8C42) color scheme

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project folder:
```bash
cd "C:\Users\HP\Documents\Claude\Projects\Crea Dental Clinic"
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
crea-dental-website/
├── app/
│   ├── layout.js              # Root layout
│   ├── page.js                # Home page
│   ├── globals.css            # Global styles
│   ├── services/
│   │   └── page.js            # Services page
│   ├── testimonials/
│   │   └── page.js            # Testimonials page
│   ├── booking/
│   │   └── page.js            # Booking page
│   └── api/
│       └── appointments/
│           └── route.js       # Appointments API
├── components/
│   ├── Header.js              # Navigation header
│   ├── Footer.js              # Footer
│   ├── Services.js            # Services grid
│   ├── Gallery.js             # Image gallery
│   └── TestimonialsPreview.js # Testimonials display
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

## 🎨 Customization

### Adding Clinic Photos

1. Place images in `public/images/clinic/`
2. Update Gallery component in `components/Gallery.js`:
```jsx
const image = require('/public/images/clinic/your-photo.jpg');
```

### Updating Testimonials

Edit `components/TestimonialsPreview.js` and `app/testimonials/page.js`:
```jsx
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Patient Name',
    role: 'Patient',
    rating: 5,
    text: 'Your testimonial here',
  },
  // Add more...
];
```

### Adding Video Testimonials

In `app/testimonials/page.js`, replace placeholder divs:
```jsx
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameBorder="0"
  allowFullScreen
></iframe>
```

### Changing Colors

Edit `tailwind.config.js`:
```js
colors: {
  'primary': '#0E95B8',      // Your primary color
  'accent': '#FF8C42',       // Your accent color
  // ...
}
```

## 📧 Email Setup (Optional)

To enable email notifications for appointments:

1. Install nodemailer:
```bash
npm install nodemailer
```

2. Update `app/api/appointments/route.js`:
```js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send email in appointment handler
```

3. Add credentials to `.env.local`:
```
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🗄️ Database Setup (Optional)

For persistent appointment storage, integrate Firebase or MongoDB:

### Firebase Setup
```bash
npm install firebase
```

Then create `lib/firebase.js`:
```js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ...
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Click Deploy

### Deploy to Other Hosts

```bash
# Build for production
npm run build

# Start server
npm start
```

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design
- Click-to-call buttons
- WhatsApp integration
- Touch-friendly forms
- Optimized images

## 🔧 Admin Dashboard (Future)

Add admin panel to manage:
- Appointments
- Testimonials
- Team members
- Services
- Gallery

## 📞 Contact & Support

- **Phone**: +91 8778548741
- **WhatsApp**: https://wa.me/918778548741
- **Email**: bookings@creadentalclinic.com
- **Address**: 16/1, 1st Floor, Sait Colony 1st Street, Above Freshco, Egmore, Chennai 600008

## 📝 License

© 2024 Crea Dental Clinic. All rights reserved.

## 🎯 Next Steps

1. ✅ **Install dependencies**: `npm install`
2. ✅ **Run dev server**: `npm run dev`
3. 📸 **Add clinic photos** to `public/images/`
4. ✏️ **Update testimonials** with actual reviews
5. 📧 **Set up email notifications** (optional)
6. 🚢 **Deploy to Vercel**

---

**Need help?** Check the components and pages - they're well-commented and easy to modify!
