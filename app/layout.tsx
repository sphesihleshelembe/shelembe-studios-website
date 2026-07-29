import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollProgress } from '@/components/site/scroll-progress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://shelembe.co.za'),
  title: {
    default: 'Shelembe Studios — Building Software That Solves Real Problems',
    template: '%s — Shelembe Studios',
  },
  description:
    'Shelembe Studios is an independent software company building practical, beautiful, and privacy-conscious software for students, professionals, and businesses.',
  keywords: [
    'Shelembe Studios',
    'software company',
    'Noviq',
    'document scanner',
    'productivity software',
    'mobile app development',
    'web application development',
    'AI solutions',
    'UI UX design',
  ],
  authors: [{ name: 'Shelembe Studios' }],
  creator: 'Shelembe Studios',
  openGraph: {
    title: 'Shelembe Studios — Building Software That Solves Real Problems',
    description:
      'An independent software company building practical, beautiful, and privacy-conscious software for students, professionals, and businesses.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Shelembe Studios',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shelembe Studios — Building Software That Solves Real Problems',
    description:
      'An independent software company building practical, beautiful, and privacy-conscious software.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Shelembe Studios',
              description:
                'An independent software company building practical software that improves productivity.',
              url: 'https://shelembe.co.za',
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
