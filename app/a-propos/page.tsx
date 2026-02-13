import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, HeartIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez NESEL : une équipe basée à Marrakech et Casablanca qui accompagne les entreprises dans leur implantation au Maroc.',
};

const values = [
  {
    title: 'Exigence opérationnelle',
    description: 'Des process fiables, des délais maîtrisés et une documentation sans zones d’ombre.',
    icon: HeartIcon,
  },
  {
    title: 'Connexion locale',
    description: 'Une connaissance fine de l’écosystème marocain, des administrations et des réseaux business.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Partenariat humain',
    description: 'Un accompagnement réactif, transparent et orienté résultats pour vos équipes.',
    icon: UserGroupIcon,
  },
];

const timeline = [
  {
    title: '2016 – Création de NESEL',
    description: 'Lancement à Marrakech avec l’ambition de simplifier la vie administrative des entrepreneurs.',
  },
  {
    title: '2019 – Implantation à Casablanca',
    description: 'Ouverture d’un second hub pour accompagner les grandes entreprises et groupes internationaux.',
  },
  {
    title: '2024 – Offre consolidée',
    description: 'Déploiement des packs NESEL et renforcement du support administratif continu.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">À propos</p>
          <h1 className="mt-3 font-display text-4xl text-[color:var(--ink)]">
            Une équipe locale pour des entreprises internationales ambitieuses.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[color:var(--muted)]">
            NESEL est un partenaire opérationnel pour les entreprises qui souhaitent s’implanter, structurer et développer
            leurs activités au Maroc. Notre force : une présence terrain à Marrakech et Casablanca, et une méthodologie
            qui sécurise chaque étape.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
          >
            Rencontrer l’équipe
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="rounded-3xl border border-[color:var(--line)] bg-white/85 p-6 shadow-sm">
                <value.icon className="h-7 w-7 text-[color:var(--accent)]" />
                <h2 className="mt-4 font-display text-2xl text-[color:var(--ink)]">{value.title}</h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">
                Des équipes opérationnelles, connectées aux décideurs.
              </h2>
              <p className="mt-4 text-base text-[color:var(--muted)]">
                Nous fonctionnons comme une extension de vos équipes internes, avec des points de contact clairs,
                une communication fluide et une priorité donnée à la transparence.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[color:var(--muted)]">
                <p>Interlocuteur unique et reporting régulier.</p>
                <p>Réseaux locaux et partenaires spécialisés.</p>
                <p>Disponibilité hybride : sur site ou à distance.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--line)] bg-white/80 p-4 shadow-sm">
              <Image
                src="/image3.jpg"
                alt="Illustration de l'équipe NESEL"
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
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-8">
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Notre histoire</h2>
            <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
              NESEL a grandi avec l’ambition d’offrir une expérience fluide aux décideurs qui souhaitent opérer dans le
              Royaume. Nous évoluons aux côtés de nos clients pour accélérer leur impact.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-4">
                  <h3 className="font-display text-lg text-[color:var(--ink)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-8">
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Où nous intervenons</h2>
            <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
              Nos équipes couvrent les pôles stratégiques de Marrakech et Casablanca et peuvent intervenir partout au
              Maroc grâce à un réseau de partenaires spécialisés.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Marrakech</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">Domiciliation, création d’entreprise, coordination locale.</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Casablanca</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">Support corporate, conformité et projets multi-sites.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <CTASection
          title="Construisons une collaboration durable"
          text="Discutons de vos objectifs et voyons comment NESEL peut structurer votre présence au Maroc."
          primaryLabel="Prendre rendez-vous"
          primaryHref="/contact"
          secondaryLabel="Voir les services"
          secondaryHref="/services"
        />
      </section>
    </div>
  );
}

