import type { Metadata } from 'next';
import { Urbanist, Playfair_Display } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Cartagena Luxury Tours — Islas del Rosario',
  description:
    'Tours de lujo en Cartagena y las Islas del Rosario. Beach clubs exclusivos, buceo, experiencias privadas y más.',
  keywords: [
    'Cartagena tours',
    'Islas del Rosario',
    'Beach clubs Cartagena',
    'Buceo Cartagena',
    'Tours Cartagena Colombia',
    'Pasadias Cartagena',
    'Playa Blanca',
    'Experiencias Caribe',
  ],
  openGraph: {
    title: 'Cartagena Luxury Tours — Islas del Rosario',
    description:
      'Tours de lujo en Cartagena y las Islas del Rosario. Beach clubs exclusivos, buceo y experiencias privadas.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Cartagena Luxury Tours',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartagena Luxury Tours — Islas del Rosario',
    description: 'Experiencias inolvidables en Cartagena de Indias',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${urbanist.variable} ${playfair.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
