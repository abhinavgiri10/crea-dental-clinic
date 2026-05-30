# 🚀 Deploy Your Website Live - Complete Guide

Your website is ready! Let's make it live with your domain. This guide shows you exactly how to do it.

---

## 📋 What You Have

✅ **Website:** Next.js project (ready to deploy)
✅ **Domain:** Registered with Squarespace (via Google)
✅ **Goal:** Make it live at your domain

**Estimated time:** 15-20 minutes

---

## 🎯 Overview: How It Works

```
Your Website Code (Local)
        ↓
    Deploy to Vercel (Hosting)
        ↓
    Get Vercel URL (https://crea-dental.vercel.app)
        ↓
    Point Domain to Vercel (DNS update)
        ↓
    Live Website (https://yourdomainname.com)
```

---

## Step 1: Prepare Your Code for Deployment

### 1.1 Create a GitHub Account (Free)

1. Go to: **https://github.com**
2. Click "Sign up"
3. Create account with email (same as Google account is fine)
4. Verify email
5. Keep browser tab open

### 1.2 Upload Your Code to GitHub

1. **Open terminal** in your project folder
2. **Initialize Git:**
   ```bash
   git init
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Create first commit:**
   ```bash
   git commit -m "Initial commit - Crea Dental Clinic website"
   ```

5. **Go back to GitHub** (in browser)

6. **Create a new repository:**
   - Click "+" in top right
   - Click "New repository"
   - **Repository name:** `crea-dental-clinic`
   - Click "Create repository"

7. **Copy the commands** that appear (looks like):
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/crea-dental-clinic.git
   git push -u origin main
   ```

8. **Paste in terminal** and run each command

9. **Wait for upload** to complete

✅ Your code is now on GitHub!

---

## Step 2: Deploy to Vercel

### 2.1 Create Vercel Account

1. Go to: **https://vercel.com**
2. Click "Sign up"
3. Click "Continue with GitHub"
4. Authorize Vercel
5. Click "Create Team" (or skip if asked)

### 2.2 Import Your Project

1. **Click "New Project"**

2. **Find your repository:**
   - Search: `crea-dental-clinic`
   - Click on it

3. **Configure project:**
   - Framework Preset: `Next.js` (auto-selected)
   - Root Directory: `./` (default)
   - Environment Variables: Leave empty (for now)
   - Click "Deploy"

4. **Wait for deployment** (2-3 minutes)
   - You'll see progress bars
   - When complete, you'll see "Congratulations!"

### 2.3 Get Your Vercel URL

1. Click "Visit" button
2. Your website is now live at: `https://crea-dental-clinic.vercel.app`
3. **Copy this URL** - you'll need it next

---

## Step 3: Connect Your Domain

### Your Domain: Registered with Squarespace (via Google)

Now we need to point your domain to Vercel.

### 3.1 Add Domain to Vercel

1. **Go back to Vercel project**
2. Click "Settings" tab
3. Click "Domains" (left sidebar)
4. Type your domain name (e.g., `creadentalclinic.com`)
5. Click "Add"
6. **Copy the nameservers** shown (4 long addresses)

Example:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

### 3.2 Update Domain DNS in Squarespace

**Important:** Squarespace domains are a bit different. Follow these exact steps:

1. **Go to Squarespace.com**
2. **Login** with your Google account

3. **Access Domain Settings:**
   - Click "Account" (bottom left)
   - Click "Domains"
   - Click on your domain name

4. **Update Nameservers:**
   - Look for "Nameservers" section
   - Click "Edit"
   - Delete current nameservers
   - Paste Vercel's 4 nameservers:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ns3.vercel-dns.com
     ns4.vercel-dns.com
     ```
   - Click "Save"

5. **Wait for DNS update** (can take 24-48 hours, usually 15-30 minutes)

### 3.3 Verify Domain Connection (Optional)

Once DNS propagates, your domain will show as "Connected" in Vercel.

---

## ✅ Your Website is LIVE!

After DNS updates (15 minutes to 24 hours):

1. **Go to your domain:** `https://yourdomainname.com`
2. **See your website!** 🎉
3. **All pages work:** `/services`, `/testimonials`, `/booking`
4. **Mobile responsive:** Works on all devices

---

## 🔧 If Domain Doesn't Connect

### Troubleshooting

**DNS not updating?**
- Wait up to 24 hours (usually faster)
- Try different browser
- Clear cache (Ctrl + Shift + Delete)

**Getting Squarespace page?**
- Nameservers may not have updated yet
- Wait and refresh every few hours

**Getting Vercel 404?**
- Domain might not be added to Vercel correctly
- Double-check domain name matches exactly
- Ensure you added domain before updating nameservers

---

## 📊 Check Domain Status

### In Vercel:

1. Go to project → Settings → Domains
2. Your domain should show: ✅ **Connected**

### Test Your Website:

1. Open: `https://yourdomainname.com`
2. You should see your Crea Dental website
3. Click through pages - all should work
4. Test booking form
5. Open on mobile - should be responsive

---

## 🎯 Post-Deployment Checklist

- [ ] Website is live at your domain
- [ ] All pages load correctly
- [ ] Services page shows all services
- [ ] Testimonials page displays reviews
- [ ] Booking page works
- [ ] Navigation menu works
- [ ] Mobile responsiveness confirmed
- [ ] Phone numbers are clickable
- [ ] WhatsApp links work
- [ ] Google Maps link works
- [ ] Email links work

---

## 🚀 Advanced Options (Optional)

### Option 1: Use Vercel's Domain Service (Easier)

Instead of updating nameservers, you can:

1. **In Vercel** → Settings → Domains
2. Click "Add Domain"
3. Click "Buy domain on Vercel" (costs ~$10/year)
4. Auto-connects instantly

*Note: This transfers domain to Vercel, so you lose Squarespace hosting.*

### Option 2: Keep Squarespace, Connect Vercel

Use A records instead of nameservers:

1. In Squarespace domain settings
2. Find "A record" or "Advanced DNS"
3. Add Vercel's A record IP
4. Takes 15-30 minutes

*Vercel will provide the A record when you add domain*

---

## 📱 Monitor Your Site

### Set Up Uptime Monitoring (Free)

1. Go to: **https://uptimerobot.com**
2. Create free account
3. Add monitor for your domain
4. Get alerts if site goes down

---

## 💡 Important Notes

✅ **HTTPS is automatic** - Vercel adds SSL certificate automatically

✅ **Emails** - Your email still works through your Google account

✅ **Updates are instant** - Push changes to GitHub, Vercel auto-deploys (5-10 mins)

⚠️ **DNS caching** - Changes take time to propagate globally (up to 48 hours)

⚠️ **Squarespace hosting** - No longer needed once domain points to Vercel

---

## 🔄 Making Changes Later

Once deployed, making changes is easy:

### To Update Your Website:

1. **Edit files locally**
   ```bash
   npm run dev
   # Test changes locally
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update testimonials"
   git push
   ```

3. **Vercel auto-deploys** (5-10 minutes)

4. **Changes live at your domain!**

---

## 📞 Support During Deployment

### If you get stuck:

**Vercel Support:**
- https://vercel.com/support
- Email support available

**Squarespace Support:**
- Help icon in Squarespace account
- Live chat available

**DNS Issues:**
- Use https://dnschecker.org to verify DNS
- Check propagation: https://whatsmydns.net

---

## 🎉 Congratulations!

Your Crea Dental Clinic website is now LIVE and accessible from anywhere in the world!

### What's Next?

1. **Tell patients:** Share your new website
2. **Get bookings:** Monitor appointments
3. **Collect reviews:** Get more Google reviews
4. **Optimize:** Improve based on analytics
5. **Grow:** Add more services/testimonials

---

## 🔒 Security & Backups

### Automatic (Vercel handles):
✅ HTTPS encryption
✅ DDoS protection
✅ Daily backups
✅ Auto-scaling

### Your responsibility:
- Keep GitHub updated with changes
- Monitor appointment requests
- Respond to booking inquiries

---

## 📊 Analytics (Optional)

### Add Google Analytics

1. Go to: **https://analytics.google.com**
2. Sign in with Google account
3. Create "Web" property
4. Add your domain
5. Copy tracking code
6. Add to your website's `layout.js`

Then track visitor behavior!

---

## 🎯 Success!

Your website is now:
- ✅ Live on the internet
- ✅ Accessible to patients
- ✅ Professional and polished
- ✅ Mobile responsive
- ✅ Fast and secure
- ✅ Easy to update

**Your Crea Dental Clinic website is ready to get your first bookings!** 🚀

---

## Quick Reference

| Item | Value |
|------|-------|
| Deployment | Vercel |
| Domain | Your Squarespace domain |
| URL | https://yourdomainname.com |
| HTTPS | Automatic |
| Cost | Free (with optional upgrades) |
| Updates | Automatic after git push |

---

**Questions?** Check the troubleshooting section above, or review QUICKSTART.md and LEARNING_GUIDE.md

**Ready to launch?** Follow the steps above and your website will be live within 24 hours! 🎉
