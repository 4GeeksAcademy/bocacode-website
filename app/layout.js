import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Boca Code | Become a Certified Tech Professional',
  description:
    'At Boca Code we teach adults to be successful tech professionals. We use real projects and senior instructors to best prepare students for their careers. ',
  metadataBase: new URL('https://bocacode.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Boca Code | Become a Certified Tech Professional',
    description:
      'At Boca Code we teach adults to be successful tech professionals. We use real projects and senior instructors to best prepare students for their careers.',
    image: 'https://bocacode.com/opengraph-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boca Code | Become a Certified Tech Professional',
    description:
      'At Boca Code we teach adults to be successful tech professionals. We use real projects and senior instructors to best prepare students for their careers.',
    images: ['https://bocacode.com/opengraph-image.jpg'], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.TAG_MANAGER_KEY} />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
