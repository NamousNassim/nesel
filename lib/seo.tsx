// SEO configuration for NESEL

const DEFAULT_SEO = {
  title: 'NESEL - Services d\'Affaires au Maroc | Marrakech & Casablanca',
  description: 'NESEL, votre partenaire de confiance pour la domiciliation d\'entreprise, l\'enregistrement de société et le support administratif à Marrakech et Casablanca.',
  canonical: 'https://ne-sel.com',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ne-sel.com',
    siteName: 'NESEL',
    title: 'NESEL - Services d\'Affaires au Maroc',
    description: 'Services professionnels d\'entreprise à Marrakech et Casablanca, Maroc.',
    images: [
      {
        url: 'https://ne-sel.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NESEL - Services d\'Affaires au Maroc',
      },
    ],
  },
  twitter: {
    handle: '@nesel',
    site: '@nesel',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/logo.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo.png',
      sizes: '76x76'
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'author',
      content: 'NESEL',
    },
    {
      name: 'keywords',
      content: 'domiciliation entreprise, création société, services administratifs, Marrakech, Casablanca, Maroc, NESEL',
    },
  ],
};

export default DEFAULT_SEO;

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export const getPageSEO = ({ title, description, url, image }: SEOProps) => ({
  title,
  description,
  canonical: url,
  openGraph: {
    url,
    title,
    description,
    images: image ? [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ] : undefined,
  },
});