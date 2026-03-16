import { Company, NavItem } from '@/types';

export const COMPANY_INFO: Company = {
  name: 'NESEL',
  description: "Services professionnels d'entreprise à Marrakech et Casablanca",
  address: {
    street: '74 Ave My Rachid, Mjadli Building',
    city: 'Guéliz, Marrakech',
    country: 'Maroc',
    postalCode: '40000',
  },
  contact: {
    phone: '+212 661-305081',
    email: 'contact@ne-sel.com',
    website: 'https://ne-sel.com',
  },
  services: [
    {
      id: 'domiciliation',
      title: "Domiciliation d'Entreprise",
      description: 'Services de domiciliation professionnelle pour votre entreprise au Maroc',
      features: [
        'Adresse commerciale prestigieuse',
        'Réception du courrier',
        'Permanence téléphonique',
        'Salles de réunion disponibles',
      ],
    },
    {
      id: 'creation',
      title: 'Création de Société',
      description: 'Accompagnement complet pour la création de votre société au Maroc',
      features: [
        'Choix de la forme juridique',
        'Rédaction des statuts',
        'Démarches administratives',
        'Immatriculation au registre de commerce',
      ],
    },
    {
      id: 'administration',
      title: 'Support Administratif',
      description: 'Services administratifs professionnels pour entreprises',
      features: [
        'Gestion administrative courante',
        'Traitement des documents',
        'Suivi des démarches officielles',
        'Conseil et accompagnement',
      ],
    },
  ],
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  website: 'https://ne-sel.com',
  email: 'mailto:contact@ne-sel.com',
  phone: 'tel:+212661305081',
};

export const CITIES = {
  MARRAKECH: 'Marrakech',
  CASABLANCA: 'Casablanca',
} as const;
