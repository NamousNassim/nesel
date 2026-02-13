import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Packs',
  description:
    'Comparez les packs NESEL pour votre implantation au Maroc : lancement, croissance et expansion avec un accompagnement sur mesure.',
};

const packs = [
  {
    name: 'Pack Lancement',
    target: 'Pour démarrer rapidement et sécuriser la domiciliation.',
    features: [
      'Domiciliation commerciale + gestion du courrier',
      'Création de société et dépôt légal',
      'Kit administratif de démarrage',
    ],
  },
  {
    name: 'Pack Croissance',
    target: 'Pour structurer les opérations et gagner en efficacité.',
    features: [
      'Domiciliation premium + salles de réunion',
      'Support administratif mensuel',
      'Suivi RH & reporting opérationnel',
    ],
  },
  {
    name: 'Pack Expansion',
    target: 'Pour les organisations multi-sites et les groupes internationaux.',
    features: [
      'Coordination multi-sites et gouvernance',
      'Compliance avancée & veille réglementaire',
      'Accompagnement direction & KPI sur mesure',
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
            Des packs évolutifs pour chaque phase de développement.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[color:var(--muted)]">
            Choisissez une formule claire et adaptez-la selon vos besoins. Chaque pack combine un socle solide et des
            options personnalisées.
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
              <div className="flex h-full flex-col rounded-3xl border border-[color:var(--line)] bg-white/85 p-6 shadow-sm">
                <h2 className="font-display text-2xl text-[color:var(--ink)]">{pack.name}</h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{pack.target}</p>
                <div className="mt-6 space-y-3">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
                >
                  Obtenir un devis
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
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

