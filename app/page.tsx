import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import Hero from '@/components/Hero';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'NESEL accompagne les entreprises au Maroc avec des services de domiciliation, création de société et gestion administrative. Découvrez nos packs et notre approche.',
};

const services = [
  {
    title: 'Domiciliation stratégique',
    description:
      'Une adresse premium à Marrakech ou Casablanca, gestion du courrier et assistance locale pour renforcer votre crédibilité.',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Création & immatriculation',
    description:
      'Constitution de société, statuts, dépôt légal et coordination avec les administrations pour un démarrage rapide.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Support administratif',
    description:
      'Suivi opérationnel, reporting, coordination RH et support fiscal pour garder le contrôle à distance.',
    icon: UserGroupIcon,
  },
  {
    title: 'Conformité & sécurité',
    description:
      'Processus clairs, documentation robuste et accompagnement continu pour sécuriser vos opérations.',
    icon: ShieldCheckIcon,
  },
];

const packs = [
  {
    title: 'Pack Lancement',
    description: 'Pour démarrer au Maroc avec une domiciliation et une création de société simplifiées.',
    emphasis: 'Pour les entrepreneurs et filiales naissantes',
  },
  {
    title: 'Pack Croissance',
    description: 'Domiciliation + support administratif renforcé, suivi RH et reporting opérationnel.',
    emphasis: 'Pour les entreprises en phase d’expansion',
  },
  {
    title: 'Pack Expansion',
    description: 'Accompagnement stratégique, conformité avancée et coordination multi-sites.',
    emphasis: 'Pour les groupes internationaux',
  },
];

const steps = [
  {
    title: 'Diagnostic express',
    description: 'Une analyse rapide de vos objectifs et de votre contexte réglementaire au Maroc.',
  },
  {
    title: 'Plan d’implantation',
    description: 'Un plan clair, des délais définis et un interlocuteur unique pour chaque étape.',
  },
  {
    title: 'Pilotage continu',
    description: 'Reporting mensuel, support administratif et optimisation des processus.',
  },
];

const stats = [
  { value: '48h', label: 'Temps moyen de réponse' },
  { value: '2 hubs', label: 'Marrakech & Casablanca' },
  { value: '360°', label: 'Accompagnement de bout en bout' },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Signature NESEL</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
                Une présence locale, une exécution rapide, un pilotage clair.
              </h2>
              <p className="mt-4 text-base text-[color:var(--muted)]">
                Nos équipes orchestrent chaque étape de votre implantation pour que vos décisions se traduisent
                rapidement en actions concrètes, avec une visibilité complète sur les coûts et les délais.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-dark)]"
                >
                  Parler à un expert
                </Link>
                <Link
                  href="/packs"
                  className="rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--brand)]"
                >
                  Découvrir les packs
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--line)] bg-white/80 p-4 shadow-sm">
              <Image
                src="/image1.jpg"
                alt="Illustration NESEL services d’affaires"
                width={720}
                height={480}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Services clés</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
                Tout ce dont vous avez besoin pour opérer au Maroc.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[color:var(--muted)]">
                NESEL coordonne les démarches critiques, sécurise vos opérations et vous offre un cadre de travail fluide pour
                concentrer votre énergie sur la croissance.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
            >
              Voir tous les services
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <div className="rounded-3xl border border-[color:var(--line)] bg-white/80 p-6 shadow-sm">
                <service.icon className="h-7 w-7 text-[color:var(--brand)]" />
                <h3 className="mt-4 font-display text-xl text-[color:var(--ink)]">{service.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Packs NESEL</p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">
                Des formules claires pour chaque étape de développement.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[color:var(--muted)]">
                Trois packs pour avancer avec méthode, tout en conservant la flexibilité d’un accompagnement sur mesure.
              </p>
            </div>
            <Link
              href="/packs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
            >
              Comparer les packs
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packs.map((pack, index) => (
            <Reveal key={pack.title} delay={index * 0.08}>
              <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-6 shadow-sm">
                <SparklesIcon className="h-6 w-6 text-[color:var(--accent)]" />
                <h3 className="mt-4 font-display text-xl text-[color:var(--ink)]">{pack.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{pack.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{pack.emphasis}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Méthodologie</p>
            <h2 className="mt-3 font-display text-3xl text-[color:var(--ink)]">Une approche structurée, un suivi humain.</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-6">
                  <p className="text-xs font-semibold text-[color:var(--accent)]">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-lg text-[color:var(--ink)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-[color:var(--line)] bg-white/80 p-8 text-center"
              >
                <p className="font-display text-3xl text-[color:var(--ink)]">{stat.value}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <CTASection
          title="Prêt à lancer votre projet au Maroc ?"
          text="Nos consultants vous répondent sous 48h avec un plan d’action clair, des coûts transparents et un calendrier réaliste."
          primaryLabel="Planifier un échange"
          primaryHref="/contact"
          secondaryLabel="Explorer les services"
          secondaryHref="/services"
        />
      </section>
    </div>
  );
}

