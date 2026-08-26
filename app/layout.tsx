import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollProgress } from '@/components/site/scroll-progress';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://shelembe.co.za'),
  title: {
    default: 'Shelembe Studios | Free CV Builder & Software Solutions',
    template: '%s — Shelembe Studios',
  },
  description:
    'Shelembe Studios builds practical software including CVBuilder, a free CV maker for creating professional CVs, plus productivity tools for students, professionals, and businesses.',
keywords: [
  'Shelembe Studios',
  'CV builder',
  'free CV builder',
  'CV maker',
  'free CV maker',
  'create a CV online',
  'professional CV builder',
  'CV builder South Africa',
  'CV maker South Africa',
  'resume builder',
  'Noviq',
  'document scanner',
  'productivity software',
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
  <meta
    name="google-site-verification"
    content="aAgdWKSQ1UFWKnE1yCccLSjsGI6fROlDDjUc7KmXkwk"
  />

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
      <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-BPTBKBXGND"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BPTBKBXGND');
  `}
</Script>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
