# 🚀 Quick Start Guide - Crea Dental Clinic Website

Get your website up and running in 5 minutes!

## Step 1: Open Terminal

Press `Win + R` and type `cmd`, then navigate to your project:
```bash
cd "C:\Users\HP\Documents\Claude\Projects\Crea Dental Clinic"
```

## Step 2: Install Dependencies

Run this command (will take 2-3 minutes):
```bash
npm install
```

## Step 3: Start Development Server

```bash
npm run dev
```

You should see:
```
> Local:        http://localhost:3000
```

## Step 4: Open in Browser

Click the link or go to: **http://localhost:3000**

🎉 Your website is now running!

---

## 📝 What You Have

The complete website includes:

- ✅ **Home Page** - Professional hero section with booking CTA
- ✅ **Services Page** - All dental services listed
- ✅ **Testimonials Page** - Patient reviews and video section
- ✅ **Booking Page** - Complete appointment form
- ✅ **Responsive Design** - Works perfectly on mobile
- ✅ **Branding** - Teal & Orange colors matching your clinic

---

## 🎨 Next: Customize Your Website

### 1. **Update Testimonials** (Easy - 5 min)
Edit file: `app/testimonials/page.js`

Find this section and replace with your actual Google reviews:
```js
const ALL_TESTIMONIALS = [
  {
    id: 1,
    name: 'Patient Name',
    role: 'Patient',
    rating: 5,
    text: 'Your review text here',
  },
  // Add more...
];
```

### 2. **Add Clinic Photos** (Easy - 10 min)
1. Create folder: `public/images/clinic/`
2. Add your clinic photos there
3. Update `components/Gallery.js` to use your images

### 3. **Enable Email Notifications** (Medium - 15 min)
See README.md for full instructions

### 4. **Add Database** (Advanced - 30 min)
See README.md for Firebase/MongoDB setup

---

## 🌐 Deploy to Live Website

### Option A: Deploy to Vercel (Easiest - 5 min)

1. Go to **https://vercel.com**
2. Click **"New Project"**
3. Connect your GitHub account
4. Import this repository
5. Click **"Deploy"**
6. Get your live URL!

### Option B: Use Your Own Hosting

```bash
# Build for production
npm run build

# Start server
npm start
```

Then upload to any Node.js hosting (AWS, DigitalOcean, Heroku, etc.)

---

## 📱 Test on Mobile

On the same device where dev server is running:

Windows: Replace `localhost` with your computer's IP:
1. Open Command Prompt
2. Type: `ipconfig`
3. Find "IPv4 Address" (usually 192.168.x.x)
4. Go to: `http://YOUR_IP:3000`

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```
Then go to http://localhost:3001

**npm install not working?**
```bash
# Clear cache
npm cache clean --force

# Try again
npm install
```

**Changes not showing?**
- Press `Ctrl + Shift + R` (hard refresh)
- Check browser console (F12) for errors

---

## 📞 Connect Your Booking System

Currently, appointments are collected but not emailed. To fully enable:

1. **Email Notifications** - Set up Gmail SMTP
2. **Admin Dashboard** - View all bookings
3. **Calendar Integration** - Show available slots
4. **Database** - Save appointments permanently

See **README.md** for full setup instructions.

---

## ✨ You're All Set!

Your professional dental clinic website is ready. Here's what you can do now:

- 🌐 Preview at http://localhost:3000
- 📝 Edit content in the files
- 📸 Add your clinic photos
- 🚀 Deploy when ready
- 🎯 Start getting bookings!

---

## 📌 Important Files

- **Home page**: `app/page.js`
- **Services**: `components/Services.js`
- **Testimonials**: `app/testimonials/page.js`
- **Booking form**: `app/booking/page.js`
- **Colors/Fonts**: `tailwind.config.js`
- **Instructions**: `README.md`

---

**Need help?** Check the comments in each file - they explain what each section does.

Good luck! 🦷💪
