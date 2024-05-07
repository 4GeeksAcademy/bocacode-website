import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SessionWrapper } from './context/session';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '4Geeks Boca | Become a Certified Tech Professional',
  description:
    'At 4Geeks Boca we teach adults to be successful tech professionals. We use real projects and senior instructors to best prepare students for their careers. ',
  metadataBase: new URL('https://boca.4geeksacademy.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '4Geeks Boca | Become a Certified Tech Professional',
    description:
      'At 4Geeks Boca we teach adults to be successful tech professionals. We use real projects and senior instructors to best prepare students for their careers.',
    image: 'https://breathecode.herokuapp.com/v1/media/file/4geeks-feb-14th-113-jpeg',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4Geeks Boca | Become a Certified Tech Professional',
    description:
      'At 4Geeks Boca we teach adults to be successful tech professionals. We use real projects and senior instructors to best prepare students for their careers.',
    images: ['https://breathecode.herokuapp.com/v1/media/file/4geeks-feb-14th-113-jpeg'], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.TAG_MANAGER_KEY} />
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
            {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
