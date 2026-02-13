export interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: 'domiciliation' | 'creation' | 'administration' | 'autre';
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

export interface Company {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  services: Service[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}