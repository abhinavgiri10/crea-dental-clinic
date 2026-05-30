import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Crea Dental Clinic - Chennai Dental Care',
  description: 'Creating exceptional dental experiences. Expert dental care with modern facilities in Egmore, Chennai. Book your appointment today!',
  keywords: ['dental clinic', 'dentist', 'Chennai', 'teeth whitening', 'implants', 'braces'],
  openGraph: {
    title: 'Crea Dental Clinic - Your Smile, Our Passion',
    description: 'Creating exceptional dental experiences catered to your requirements',
    type: 'website',
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
