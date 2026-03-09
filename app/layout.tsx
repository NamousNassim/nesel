import type { Metadata } from 'next';
import { Sora, Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
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
    <html lang="fr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${sora.variable} ${cormorant.variable} min-h-screen font-sans text-[color:var(--ink)]`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

