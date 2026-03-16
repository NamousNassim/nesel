import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BuildingOffice2Icon,
  EnvelopeOpenIcon,
  PaperAirplaneIcon,
  HomeModernIcon,
  DocumentCheckIcon,
  ScaleIcon,
  GlobeAltIcon,
  ArrowUpRightIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  LockClosedIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import Hero from '@/components/Hero';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';
import { PlanCard } from '@/components/site/PlanCard';
import SpacesCarousel from '@/components/site/SpacesCarousel';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'NESEL, domiciliation premium au Maroc : adresse juridique, gestion du courrier, réexpédition, bureaux, création d’entreprise et accompagnement corporate.',
};

const services = [
  {
    title: 'Domiciliation du siège social',
    description: 'Adresse juridique premium à Marrakech et Casablanca, attestation, bail et conformité légale.',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Gestion complète du courrier',
    description: 'Réception, numérisation, archivage sécurisé et notifications en temps réel.',
    icon: EnvelopeOpenIcon,
  },
  {
    title: 'Réexpédition nationale & internationale',
    description: 'Acheminement programmé ou à la demande, suivi et assurance des envois critiques.',
    icon: PaperAirplaneIcon,
  },
  {
    title: 'Bureaux & salles de réunion',
    description: 'Espaces équipés à l’heure ou à la journée, accueil et services d’hospitality corporate.',
    icon: HomeModernIcon,
  },
  {
    title: 'Création d’entreprise au Maroc',
    description: 'Statuts, dépôt légal, immatriculation et ouverture de comptes avec un pilotage unique.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Secrétariat administratif & support juridique',
    description: 'Gestion documentaire, suivi des échéances, coordination avec conseillers et avocats partenaires.',
    icon: ScaleIcon,
  },
  {
    title: 'Services complémentaires pour investisseurs',
    description: 'Accompagnement des dirigeants étrangers, préparation des comités et représentation locale.',
    icon: GlobeAltIcon,
  },
];

const plans = [
  {
    name: 'Silver',
    variant: 'silver' as const,
    tagline: 'Domiciliation essentielle et sécurisée',
    highlight: 'Pour démarrer légalement',
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
    tagline: 'Domiciliation exécutive + assistance renforcée',
    highlight: 'Équilibre recommandé',
    featured: true,
    features: [
      'Tout le Silver, réexpédition trimestrielle incluse',
      'Secrétariat bilingue FR/EN & prise de rendez-vous',
      'Suivi administratif, rappels de conformité',
      'Coordination création de société et banques',
      'Chargé de compte dédié (SLA 48h)',
    ],
  },
  {
    name: 'Diamond',
    variant: 'diamond' as const,
    tagline: 'Représentation corporate & pilotage complet',
    highlight: 'Pour les directions exigeantes',
    features: [
      'Tout le Golden + réexpédition prioritaire illimitée',
      'Bureaux équipés 2j/mois et salles premium',
      'Représentation auprès des administrations',
      'Tableau de bord mensuel et comité de suivi',
      'Options multi-sites & gouvernance renforcée',
    ],
  },
];

const reasons = [
  {
    title: 'Adresse crédible & conforme',
    description: 'Sites stratégiques, contrats clairs et traçabilité documentaire pour vos partenaires.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Pilotage centralisé',
    description: 'Un interlocuteur unique, reporting structuré et rappels automatisés des échéances.',
    icon: CpuChipIcon,
  },
  {
    title: 'Confidentialité & sécurité',
    description: 'Protocoles de contrôle d’accès, numérisation sécurisée et conservation maîtrisée.',
    icon: LockClosedIcon,
  },
  {
    title: 'Équipe bilingue FR / EN',
    description: 'Communication claire pour les sièges et investisseurs internationaux.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Réactivité sous 48h',
    description: 'Engagement de réponse rapide sur les demandes prioritaires.',
    icon: BoltIcon,
  },
];

const spacesSlides = [
  {
    src: '/photos/meeting-room.jpg',
    alt: 'Salle de réunion vitrée NESEL',
    title: 'Salle de réunion vitrée',
    description: 'Espaces lumineux et équipes sur place pour accueillir vos rendez-vous et vos clients.',
    badge: 'Réception clients',
  },
  {
    src: '/photos/team.jpg',
    alt: 'Équipe NESEL au bureau',
    title: 'Équipe présente sur site',
    description: 'Accueil bilingue, assistance opérationnelle et relais administratif pour votre société.',
    badge: 'Équipe FR / EN',
  },
  {
    src: '/photos/casablanca-building.jpg',
    alt: 'Immeuble d’affaires à Casablanca',
    title: 'Adresses business premium',
    description: 'Des implantations à Marrakech et Casablanca pour recevoir partenaires, clients et équipes.',
    badge: 'Casablanca & Marrakech',
  },
];

const process = [
  {
    title: 'Diagnostic & cadrage',
    description: 'Analyse de votre structure, des contraintes réglementaires et des besoins d’image.',
  },
  {
    title: 'Mise en place opérationnelle',
    description: 'Domiciliation, création ou transfert, paramétrage du courrier et options choisies.',
  },
  {
    title: 'Pilotage continu',
    description: 'Réexpéditions, secrétariat, comités de suivi et optimisation permanente.',
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-28">
      <Hero />

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid items-start gap-10 rounded-3xl border border-[color:var(--line)] bg-white/80 p-8 shadow-[0_18px_60px_rgba(12,31,63,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Signature NESEL</p>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">
                L’adresse légale qui rassure vos partenaires et les administrations marocaines.
              </h2>
              <p className="text-base text-[color:var(--muted)]">
                Nous combinons domiciliation, gestion du courrier, espaces de travail et secrétariat bilingue pour vous
                offrir une présence corporate irréprochable à Marrakech et Casablanca.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-dark)]"
                >
                  Parler à un conseiller
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
                >
                  Voir les services
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Réponse moyenne', value: '48h' },
                { label: 'Hubs', value: 'Marrakech + Casablanca' },
                { label: 'Clients', value: 'Entrepreneurs, PME, filiales' },
                { label: 'Langues', value: 'FR / EN' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[color:var(--line)] bg-white/90 p-4 text-left shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{stat.label}</p>
                  <p className="mt-2 font-display text-xl text-[color:var(--ink)]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Services</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
                Un guichet unique pour votre présence au Maroc.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[color:var(--muted)]">
                Domiciliation, assistance administrative et représentation : les équipes NESEL orchestrent les étapes
                clés pour vous éviter les frictions opérationnelles.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
            >
              Consulter tous les services
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-[color:var(--line)] bg-white/90 p-6 shadow-sm">
                <service.icon className="h-7 w-7 text-[color:var(--accent)]" />
                <h3 className="mt-4 font-display text-xl text-[color:var(--ink)]">{service.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Espaces & équipes</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
                Des lieux prêts à recevoir vos clients et vos équipes.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[color:var(--muted)]">
                Salles de réunion vitrées, bureaux équipés et équipes présentes sur place pour accueillir, assister et
                représenter votre société.
              </p>
            </div>
            <span className="text-sm text-[color:var(--muted)]">Visuels réels de nos espaces et de l’équipe.</span>
          </div>
        </Reveal>
        <div className="mt-8">
          <Reveal>
            <SpacesCarousel slides={spacesSlides} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Forfaits</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
                Silver, Golden ou Diamond : choisissez la profondeur d’accompagnement.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[color:var(--muted)]">
                Une grille claire et évolutive. Le pack Golden est le plus choisi pour équilibrer domiciliation premium
                et assistance administrative renforcée.
              </p>
            </div>
            <Link
              href="/packs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
            >
              Comparer en détail
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <PlanCard
                variant={plan.variant}
                name={plan.name}
                subtitle={plan.tagline}
                highlight={plan.highlight}
                features={plan.features}
                featured={plan.featured}
                ctaHref="/contact"
                ctaLabel="Obtenir une proposition"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/85 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Pourquoi choisir NESEL ?</p>
            <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
              Une image corporate solide, une exécution sans friction.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => (
                <Reveal key={reason.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[color:var(--line)] bg-white/90 p-5">
                    <reason.icon className="h-6 w-6 text-[color:var(--accent)]" />
                    <h3 className="mt-3 font-display text-lg text-[color:var(--ink)]">{reason.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{reason.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Méthode</p>
                <h2 className="font-display text-3xl text-[color:var(--ink)]">Une feuille de route claire.</h2>
                <p className="text-sm text-[color:var(--muted)]">
                  Dès votre prise de contact, nous cadrons les objectifs, les jalons et les livrables pour sécuriser
                  votre installation ou votre transfert de siège social.
                </p>
              </div>
              <div className="grid flex-1 gap-4 md:grid-cols-3">
                {process.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-[color:var(--line)] bg-white/95 p-4">
                    <p className="text-xs font-semibold text-[color:var(--accent)]">0{index + 1}</p>
                    <h3 className="mt-2 font-display text-lg text-[color:var(--ink)]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <CTASection
          title="Prêt à domicilier ou transférer votre siège au Maroc ?"
          text="Contactez un consultant NESEL et recevez une proposition structurée : étapes, délais, coûts et modalités de réexpédition."
          primaryLabel="Planifier un échange"
          primaryHref="/contact"
          secondaryLabel="Comparer les forfaits"
          secondaryHref="/packs"
        />
      </section>
    </div>
  );
}
