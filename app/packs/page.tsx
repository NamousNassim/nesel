import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';
import { PlanCard } from '@/components/site/PlanCard';

export const metadata: Metadata = {
  title: 'Packs',
  description:
    'Comparez les packs NESEL pour votre implantation au Maroc : Silver, Golden ou Diamond avec un accompagnement premium.',
};

const packs = [
  {
    name: 'Silver',
    variant: 'silver' as const,
    target: 'Domiciliation essentielle et sécurisée pour lancer votre structure.',
    features: [
      'Adresse juridique + attestation rapide',
      'Gestion et numérisation mensuelle du courrier',
      'Accès salle de réunion 4h/mois',
      'Support email & WhatsApp',
    ],
  },
  {
    name: 'Golden',
    variant: 'golden' as const,
    target: 'Domiciliation exécutive et assistance administrative renforcée.',
    features: [
      'Tout le Silver + réexpédition trimestrielle incluse',
      'Secrétariat bilingue FR/EN et prise de rendez-vous',
      'Suivi administratif, rappels de conformité',
      'Chargé de compte dédié (SLA 48h)',
    ],
  },
  {
    name: 'Diamond',
    variant: 'diamond' as const,
    target: 'Représentation corporate et pilotage complet pour directions exigeantes.',
    features: [
      'Tout le Golden + réexpédition prioritaire illimitée',
      'Bureaux équipés 2j/mois et salles premium',
      'Représentation auprès des administrations',
      'Tableau de bord mensuel et options multi-sites',
    ],
  },
];

const process = [
  {
    title: 'Qualification',
    description: 'Nous clarifions vos objectifs, votre timeline et vos contraintes administratives.',
  },
  {
    title: 'Configuration',
    description: 'Nous paramétrons le pack et les options qui répondent à votre réalité opérationnelle.',
  },
  {
    title: 'Pilotage',
    description: 'Nous suivons l’exécution, les jalons et les résultats avec votre équipe dédiée.',
  },
];

export default function PacksPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Packs NESEL</p>
          <h1 className="mt-3 font-display text-4xl text-[color:var(--ink)]">
            Silver, Golden ou Diamond : trois niveaux d’accompagnement premium.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[color:var(--muted)]">
            Choisissez la profondeur de service qui correspond à votre gouvernance : domiciliation essentielle,
            assistance renforcée ou représentation corporate avec pilotage complet.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
          >
            Discuter d’un pack
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {packs.map((pack, index) => (
            <Reveal key={pack.name} delay={index * 0.08}>
              <PlanCard
                variant={pack.variant}
                name={pack.name}
                subtitle={pack.target}
                features={pack.features}
                featured={pack.name === 'Golden'}
                ctaHref="/contact"
                ctaLabel="Obtenir un devis"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-8">
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Comment nous déployons votre pack</h2>
            <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
              Chaque pack inclut une feuille de route détaillée et un responsable dédié pour garantir l’exécution.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {process.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-4">
                  <p className="text-xs font-semibold text-[color:var(--accent)]">Étape 0{index + 1}</p>
                  <h3 className="mt-2 font-display text-lg text-[color:var(--ink)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <CTASection
          title="Vous hésitez entre plusieurs packs ?"
          text="Nos experts vous conseillent gratuitement pour choisir la meilleure formule et estimer les ressources nécessaires."
          primaryLabel="Planifier un échange"
          primaryHref="/contact"
          secondaryLabel="Voir les services"
          secondaryHref="/services"
        />
      </section>
    </div>
  );
}

