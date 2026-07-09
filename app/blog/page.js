import Link from 'next/link';

export const metadata = {
  title: 'Blog - Dental Health Tips & Guides - Crea Dental Clinic Chennai',
  description: 'Read expert dental health tips, treatment guides, and dental care articles from Crea Dental Clinic in Egmore, Chennai.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Best Dental Implants in Egmore, Chennai - Complete Guide',
      date: 'July 8, 2026',
      category: 'Implants',
      excerpt: 'Discover everything you need to know about dental implants in Chennai. Learn about benefits, costs, and why Crea Dental Clinic is your best choice.',
      content: `
## Why Choose Dental Implants?

Dental implants have revolutionized tooth replacement. Unlike dentures or bridges, implants are permanently anchored to your jawbone, providing a natural-looking and functional solution that lasts 15-20+ years.

### Benefits of Dental Implants:
- **Permanent solution** - No replacement needed for decades
- **Natural appearance** - Indistinguishable from real teeth
- **Improved comfort** - No sliding or clicking
- **Better chewing function** - 90% of original bite force
- **Prevents bone loss** - Stimulates jaw bone regeneration
- **Easy maintenance** - Brush and floss like natural teeth

## Dental Implant Process in 3 Steps

### Step 1: Consultation & Planning (Week 1-2)
Our dental team evaluates your jaw bone, discusses options, and creates a custom implant plan using 3D imaging.

### Step 2: Implant Placement Surgery (Week 3-4)
The titanium implant root is surgically placed in your jawbone under local anesthesia. Healing takes 3-6 months.

### Step 3: Crown Placement (Month 4-6)
Once fully integrated, a custom crown is attached, completing your new tooth.

## Dental Implant Costs in Egmore, Chennai

At Crea Dental Clinic, we offer **competitive and transparent pricing**:
- Single implant: ₹30,000 - ₹50,000 (including crown)
- Multiple implants: Flexible pricing & payment plans available
- Bone grafting (if needed): Additional cost

**We accept multiple payment methods and offer EMI options!**

## Why Choose Crea Dental Clinic for Implants?

✓ **Expert prosthodontist** - Dr. Abhinav Giri specializes in full-mouth implant rehabilitation
✓ **Advanced technology** - Latest dental equipment for precision
✓ **Experienced team** - 15+ years of successful implant placements
✓ **Patient-friendly** - Compassionate, pain-free approach
✓ **Affordable pricing** - Quality care without breaking the bank
✓ **100% success rate** - 40+ verified reviews from satisfied patients

## Frequently Asked Questions About Implants

**How long does the entire process take?**
Typically 4-6 months, but it varies based on bone healing and individual cases.

**Are implants painful?**
No. The procedure is performed under local anesthesia. You may experience mild discomfort during healing, which we manage with pain medication.

**Will my implant look natural?**
Absolutely! Our implant crowns are custom-made to match your natural teeth perfectly.

**How do I care for my implant?**
Brush and floss like natural teeth. Regular dental checkups ensure long-term success.

## Ready for Your Implant Consultation?

Don't let missing teeth hold you back. Book your free consultation with Dr. Abhinav Giri at **Crea Dental Clinic in Egmore, Chennai** today!

**Call:** +91 8778548741
**WhatsApp:** Chat directly
**Hours:** Mon-Sun, 10 AM - 8 PM
**Location:** 16/1, 1st floor, Sait Colony 1st Street, above Freshco, Egmore, Chennai 600008
      `
    }
  ];

  const mainPost = posts[0];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dental Health Blog</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
            Expert tips, guides, and insights from Crea Dental Clinic
          </p>
        </div>
      </section>

      {/* Blog Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Post Header */}
          <article>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {mainPost.category}
                </span>
                <span className="text-gray-600">{mainPost.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {mainPost.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {mainPost.excerpt}
              </p>
            </div>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div
                className="text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: mainPost.content
                    .split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-3xl font-bold text-primary mt-8 mb-4">${line.replace('## ', '')}</h2>`;
                      } else if (line.startsWith('### ')) {
                        return `<h3 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${line.replace('### ', '')}</h3>`;
                      } else if (line.startsWith('✓ ')) {
                        return `<div class="flex items-start gap-3 my-2"><span class="text-accent text-xl">✓</span><p class="text-gray-700">${line.replace('✓ ', '')}</p></div>`;
                      } else if (line.startsWith('**') && line.includes(':')) {
                        return `<p class="text-gray-700 my-3"><strong>${line}</strong></p>`;
                      } else if (line.trim()) {
                        return `<p class="text-gray-700 my-3">${line}</p>`;
                      }
                      return '';
                    })
                    .join('')
                }}
              />
            </div>

            {/* CTA */}
            <div className="bg-light-bg p-8 rounded-lg border-l-4 border-accent mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Implant Consultation</h3>
              <p className="text-gray-700 mb-6">
                Ready to restore your smile with dental implants? Contact Crea Dental Clinic today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918778548741"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
                >
                  Call: +91 8778548741
                </a>
                <Link
                  href="/booking"
                  className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* More Articles Coming */}
      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">More Articles Coming Soon</h2>
          <p className="text-gray-600 text-lg mb-8">
            Stay tuned for more expert dental health tips and treatment guides from our team at Crea Dental Clinic.
          </p>
        </div>
      </section>
    </>
  );
}
