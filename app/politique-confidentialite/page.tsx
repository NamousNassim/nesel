import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et traitement des données personnelles chez NESEL.',
};

const sections = [
  {
    title: 'Données collectées',
    content:
      'Nous collectons les informations que vous fournissez via nos formulaires : nom, email, téléphone, entreprise et détails de projet.',
  },
  {
    title: 'Finalités du traitement',
    content:
      'Les données sont utilisées pour répondre à vos demandes, proposer un accompagnement personnalisé et améliorer nos services.',
  },
  {
    title: 'Base légale',
    content:
      'Le traitement repose sur votre consentement et sur l’exécution de mesures précontractuelles à votre demande.',
  },
  {
    title: 'Durée de conservation',
    content:
      'Les données sont conservées pendant la durée nécessaire au suivi de votre demande puis archivées selon les obligations légales.',
  },
  {
    title: 'Partage des données',
    content:
      'Vos informations ne sont partagées qu’avec les partenaires nécessaires à votre projet ou pour satisfaire des obligations légales.',
  },
  {
    title: 'Vos droits',
    content:
      'Vous pouvez demander l’accès, la rectification ou la suppression de vos données à tout moment en nous contactant.',
  },
  {
    title: 'Sécurité',
    content:
      'NESEL applique des mesures organisationnelles et techniques pour protéger vos données contre tout accès non autorisé.',
  },
  {
    title: 'Cookies',
    content:
      'Le site utilise des cookies essentiels au fonctionnement et des statistiques anonymes pour améliorer l’expérience.',
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="mx-auto max-w-4xl px-6 pt-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Confidentialité</p>
          <h1 className="mt-3 font-display text-4xl text-[color:var(--ink)]">
            Politique de confidentialité de NESEL.
          </h1>
          <p className="mt-4 text-base text-[color:var(--muted)]">
            Nous attachons une grande importance à la protection de vos données personnelles. Cette politique explique
            comment nous collectons et utilisons vos informations.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 space-y-8">
        {sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 0.05}>
            <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-6">
              <h2 className="font-display text-2xl text-[color:var(--ink)]">{section.title}</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{section.content}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6">
        <CTASection
          title="Une question sur vos données ?"
          text="Contactez notre équipe pour exercer vos droits ou obtenir plus d’informations sur nos pratiques de confidentialité."
          primaryLabel="Nous écrire"
          primaryHref="/contact"
        />
      </section>
    </div>
  );
}

