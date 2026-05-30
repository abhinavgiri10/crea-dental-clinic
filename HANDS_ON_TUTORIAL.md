# 🎓 Hands-On Tutorial - Build & Edit Your Website Step-by-Step

Follow along exactly as described. By the end, you'll have a running website that you can edit!

---

## 📝 What You'll Learn Today

✅ Open your project
✅ Install dependencies
✅ Run the website locally
✅ Edit your first page
✅ See changes in real-time
✅ Create a new component
✅ Add new content

**Time:** ~20 minutes

---

## Step 1: Open Your Project

### Option A: Using VS Code (Recommended)

1. **Open VS Code**
   - Click Windows Start
   - Search "Visual Studio Code"
   - Click to open

2. **Open your project folder**
   - File → Open Folder
   - Navigate to: `C:\Users\HP\Documents\Claude\Projects\Crea Dental Clinic`
   - Click "Select Folder"

3. **You should see:**
   ```
   📁 crea-dental-website (folder name in top left)
   ├── 📁 app
   ├── 📁 components
   ├── 📄 package.json
   ├── 📄 README.md
   └── ... (other files)
   ```

### Option B: Using Command Prompt

1. **Press:** `Win + R`
2. **Type:** `cmd`
3. **Press:** Enter
4. **Type:** `cd "C:\Users\HP\Documents\Claude\Projects\Crea Dental Clinic"`
5. **Press:** Enter

---

## Step 2: Open Terminal in VS Code

1. **Inside VS Code, press:** `Ctrl + `` (backtick, below Esc key)
2. **Terminal appears at bottom**
3. **You should see:**
   ```
   PS C:\Users\HP\Documents\Claude\Projects\Crea Dental Clinic>
   ```

If terminal doesn't open, use menu: **View → Terminal**

---

## Step 3: Install Dependencies

### Copy & Paste This Command

Type or paste in terminal:
```bash
npm install
```

**What happens:**
- Downloads ~500MB of packages
- Creates `node_modules` folder
- Takes 2-3 minutes
- You'll see lots of text scrolling
- Wait for it to finish!

**Success looks like:**
```
added 300 packages, and audited 345 packages
```

---

## Step 4: Start Development Server

### Copy & Paste This Command

Type in terminal:
```bash
npm run dev
```

**What you should see:**
```
> crea-dental-website@1.0.0 dev
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1.2s
```

**DO NOT press Ctrl + C yet!** Keep this running.

---

## Step 5: Open in Browser

1. **Click the link:** `http://localhost:3000`
   - Or manually type in browser address bar

2. **You should see:**
   - Teal header with "CREA DENTAL"
   - Hero section "Your Smile, Our Passion"
   - Services cards
   - "Book Now" button
   - Professional design

🎉 **Your website is LIVE!** (Locally on your computer)

---

## Step 6: Make Your First Edit

### Let's change the main heading

1. **In VS Code, click:** `app/page.js` (in file list on left)

2. **Find line ~21 with:**
   ```jsx
   <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
     Your Smile, Our Passion
   </h1>
   ```

3. **Change "Your Smile, Our Passion" to:** `Welcome to Crea Dental`

4. **Your code should look like:**
   ```jsx
   <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
     Welcome to Crea Dental
   </h1>
   ```

5. **Save file:** Press `Ctrl + S`

6. **Check browser:** The heading changed instantly! ✨

---

## Step 7: Make Your Second Edit

### Let's change the subtitle

1. **In same file, find line ~24:**
   ```jsx
   <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
     Creating exceptional dental experiences catered to your requirements...
   </p>
   ```

2. **Change the text to:** `Expert dental care for your entire family`

3. **Your code:**
   ```jsx
   <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
     Expert dental care for your entire family
   </p>
   ```

4. **Save:** `Ctrl + S`

5. **Check browser:** Updated instantly! 🚀

---

## Step 8: Edit a Component

### Let's add a new service

1. **Open file:** `components/Services.js`

2. **Find the SERVICES array (around line 3)**

3. **Look for:**
   ```jsx
   const SERVICES = [
     {
       id: 1,
       icon: '🦷',
       name: 'General Dentistry',
       description: '...',
     },
     // ... more services
   ```

4. **Add a new service at the end, before the closing `]`:**
   ```jsx
     {
       id: 7,
       icon: '💎',
       name: 'Premium Smile Design',
       description: 'Custom smile makeovers with advanced aesthetic planning.',
     },
   ```

5. **Save:** `Ctrl + S`

6. **Check browser:**
   - Go to `/services` page
   - Scroll down
   - Your new service appears! ✨

---

## Step 9: Create a New Component

### Let's create a "Why Choose Us" section

1. **Create new file:** Right-click `components` → New File

2. **Name it:** `WhyChooseUs.js`

3. **Copy & paste this code:**
   ```jsx
   export default function WhyChooseUs() {
     const reasons = [
       { emoji: '⚡', title: 'Fast', desc: 'Same-day appointments available' },
       { emoji: '🏆', title: 'Expert', desc: '15+ years of experience' },
       { emoji: '💰', title: 'Affordable', desc: 'Best prices in Chennai' },
     ];

     return (
       <section className="py-16 bg-light-bg">
         <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-primary mb-12">
             Why Choose Crea Dental?
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {reasons.map((reason, i) => (
               <div key={i} className="card text-center">
                 <div className="text-5xl mb-4">{reason.emoji}</div>
                 <h3 className="text-xl font-bold text-primary mb-2">
                   {reason.title}
                 </h3>
                 <p className="text-text-light">{reason.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     );
   }
   ```

4. **Save:** `Ctrl + S`

---

## Step 10: Use Your New Component

### Add it to the home page

1. **Open file:** `app/page.js`

2. **At the top (line 2-3), add:**
   ```jsx
   import WhyChooseUs from '@/components/WhyChooseUs';
   ```

3. **Find the section around line 53 that says:**
   ```jsx
   {/* Services Preview */}
   <section className="py-16...">
   ```

4. **Before that section, add:**
   ```jsx
   <WhyChooseUs />
   ```

5. **Save:** `Ctrl + S`

6. **Check browser:** Scroll down on home page - your new section is there! 🎉

---

## Step 11: Edit Testimonials

### Replace sample reviews with real ones

1. **Open:** `app/testimonials/page.js`

2. **Find (around line 8):**
   ```jsx
   const ALL_TESTIMONIALS = [
     {
       id: 1,
       name: 'Rajesh Kumar',
       role: 'Patient',
       rating: 5,
       text: 'Excellent service!...',
     },
   ```

3. **Replace with your reviews:**
   ```jsx
   const ALL_TESTIMONIALS = [
     {
       id: 1,
       name: 'Your Patient Name',
       role: 'Patient',
       rating: 5,
       text: 'Copy exact review from Google here',
     },
     {
       id: 2,
       name: 'Another Patient',
       role: 'Patient',
       rating: 5,
       text: 'Their review here',
     },
   ```

4. **Save:** `Ctrl + S`

5. **Check browser:** Go to `/testimonials` - your reviews show up!

---

## Step 12: Change Brand Colors

### Change from Teal/Orange to Blue/Purple

1. **Open:** `tailwind.config.js`

2. **Find (line ~15):**
   ```js
   colors: {
     'primary': '#0E95B8',    // Teal
     'accent': '#FF8C42',     // Orange
   }
   ```

3. **Change to:**
   ```js
   colors: {
     'primary': '#2563EB',    // Blue
     'accent': '#A855F7',     // Purple
   }
   ```

4. **Save:** `Ctrl + S`

5. **Watch browser:** Entire website changes color instantly! 🌈

---

## Step 13: Add Your Phone Number

### Replace clinic phone everywhere

1. **Press:** `Ctrl + H` (Find & Replace)

2. **Find:** `+918778548741`

3. **Replace with:** `+919999999999` (your number)

4. **Click:** "Replace All"

5. **Done!** All phone numbers updated across the site

---

## Step 14: Update Hours & Address

### Edit clinic information

1. **Open:** `components/Footer.js`

2. **Find hours (around line 60):**
   ```jsx
   <li>Mon - Sat: 9:00 AM - 8:00 PM</li>
   ```

3. **Change to your hours**

4. **Find address (around line 55):**
   ```jsx
   <span>16/1, 1st Floor, Sait Colony...</span>
   ```

5. **Change to your address**

6. **Save:** `Ctrl + S`

7. **Check:** Footer updated on every page!

---

## Step 15: Deploy (Go Live!)

### Share your website with the world

1. **Create GitHub account** (free) at github.com

2. **Upload your project:**
   - Initialize git: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Push to GitHub

3. **Go to Vercel.com**
   - Sign up with GitHub
   - Click "Import Project"
   - Select your repo
   - Click "Deploy"
   - Get your live URL!

4. **Share:** `https://your-project.vercel.app`

---

## ✅ Congratulations!

You just:
- ✅ Opened your project
- ✅ Installed dependencies
- ✅ Ran a development server
- ✅ Edited multiple pages
- ✅ Created a new component
- ✅ Changed styling
- ✅ Updated content

**You're now a web developer!** 🎉

---

## 🆘 Troubleshooting

### Terminal shows: "Port 3000 already in use"

**Solution:**
```bash
npm run dev -- -p 3001
```

Then go to: `http://localhost:3001`

### Changes not showing in browser

**Solution:**
1. Save file: `Ctrl + S`
2. Hard refresh browser: `Ctrl + Shift + R`
3. Wait 2 seconds for server to rebuild

### "Cannot find module" error

**Solution:**
```bash
npm install
npm run dev
```

### Want to stop the server

**In terminal, press:** `Ctrl + C`

To restart:
```bash
npm run dev
```

---

## 🎯 Next Exercises

Try these on your own:

1. **Change button text:** Find all "Book Now" → "Schedule Today"
2. **Add new service:** Add 7th service to Services.js
3. **Update hero image:** Add background image to hero section
4. **Change font sizes:** Make all h1 bigger
5. **Add new page:** Create `/team` page with doctor info

---

## 📚 Reference Files

- **Main page:** `app/page.js`
- **Services:** `components/Services.js`
- **Reviews:** `app/testimonials/page.js`
- **Booking form:** `app/booking/page.js`
- **Colors & fonts:** `tailwind.config.js`
- **Footer:** `components/Footer.js`

---

## 💡 Pro Tips

1. **Use Ctrl + F** to find text quickly
2. **Use Ctrl + H** to replace multiple occurrences
3. **Use Ctrl + //** to comment out code
4. **Use Ctrl + D** to select multiple instances
5. **Use Ctrl + Z** to undo changes
6. **Use Ctrl + Shift + Z** to redo

---

**Great job!** You're officially coding! 🚀✨

Questions? Check LEARNING_GUIDE.md or COMMON_EDITS.md
