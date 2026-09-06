import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-english',
  display: 'swap',
});

const siteUrl = 'https://Nada-ahmed-courses.vercel.app';
const title = 'أ. سارة أحمد | كورسات الرياضيات لطلاب الثانوية';
const description =
  'كورسات رياضيات لطلاب أولى وتانية ثانوي مع أ. سارة أحمد. شرح مبسط، متابعة مستمرة، وحجز مباشر عبر واتساب.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'ar_EG',
    type: 'website',
    url: siteUrl,
  },
  alternates: {
    languages: {
      ar: '/',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${plexArabic.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
