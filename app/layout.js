import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Best Dentist in Egmore, Chennai - Crea Dental Clinic',
  description: 'Professional dental care in Egmore, Chennai. Expert treatments, painless procedures, and 40+ patient reviews. Book your appointment today!',
  keywords: ['dental clinic', 'dentist', 'Chennai', 'teeth whitening', 'implants', 'braces'],
  openGraph: {
    title: 'Crea Dental Clinic - Your Smile, Our Passion',
    description: 'Creating exceptional dental experiences catered to your requirements',
    type: 'website',
  },
  verification: {
    google: 'EhErAMfZQbsaraaWYi65VLHdESif8pbZk6mqw5AVsCY',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0E95B8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32'>🦷</text></svg>" />

        {/* Google Analytics + Google Ads */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GS5ST8GQ8Z"></script>
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GS5ST8GQ8Z');
  gtag('config', 'AW-18482699577');
`}} />

      {/* Google Ads conversion event: Book appointment */}
<script dangerouslySetInnerHTML={{__html: `
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-18482699577/8BhbCMiw1YsdELm6nu1E',
      'value': 1.0,
      'currency': 'INR',
      'event_callback': callback
    });
    return false;
  }
`}} />

        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{__html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '784483890795341');
          fbq('track', 'PageView');
        `}} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
