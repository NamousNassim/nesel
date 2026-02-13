import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'NESEL | Services d’affaires et domiciliation au Maroc',
    template: '%s | NESEL',
  },
  description:
    'NESEL accompagne les entreprises au Maroc : domiciliation, création de société, gestion administrative et packs sur mesure à Marrakech et Casablanca.',
  metadataBase: new URL('https://ne-sel.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${manrope.variable} ${playfair.variable} min-h-screen font-sans text-[color:var(--ink)]`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

