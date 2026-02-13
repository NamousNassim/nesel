import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BuildingOffice2Icon,
  DocumentTextIcon,
  BriefcaseIcon,
  ScaleIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';
import Faq from '@/components/site/Faq';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Découvrez les services NESEL : domiciliation, création de société, support administratif et conformité pour les entreprises au Maroc.',
};

const services = [
  {
    title: 'Domiciliation d’entreprise',
    description:
      'Adresse commerciale premium, gestion du courrier, salles de réunion à la demande et assistance locale pour vos partenaires.',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Création & immatriculation',
    description:
      'Choix de la structure, rédaction des statuts, dépôt légal, assistance pour l’ouverture de comptes et démarrage opérationnel.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Support administratif continu',
    description:
      'Gestion des démarches récurrentes, coordination RH, relation avec les administrations et reporting mensuel.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Conformité & gouvernance',
    description:
      'Veille réglementaire, sécurisation documentaire, accompagnement pour audits et conformité interne.',
    icon: ScaleIcon,
  },
];

const deliverables = [
  'Un interlocuteur unique et une feuille de route personnalisée.',
  'Des points d’avancement réguliers et un reporting clair.',
  'Une coordination proactive avec les administrations marocaines.',
  'Des livrables prêts à l’emploi pour vos équipes internes.',
];

const faqItems = [
  {
    question: 'Combien de temps faut-il pour créer une société ?',
    answer:
      'Les délais varient selon la structure choisie et la disponibilité des documents. Nous définissons un calendrier précis dès le diagnostic.',
  },
  {
    question: 'Proposez-vous un accompagnement pour les filiales étrangères ?',
    answer:
      'Oui. Nous adaptons les démarches aux exigences des groupes internationaux et assurons la liaison avec les sièges à l’étranger.',
  },
  {
    question: 'Puis-je passer d’un pack à un autre ?',
    answer:
      'Bien sûr. Nos packs sont modulables et peuvent évoluer selon vos besoins opérationnels.',
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Services NESEL</p>
          <h1 className="mt-3 font-display text-4xl text-[color:var(--ink)]">
            Des services intégrés pour réussir votre implantation au Maroc.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[color:var(--muted)]">
            Nous combinons expertise locale, méthodologie rigoureuse et suivi humain pour vous offrir une implantation
            stable et une gestion administrative sereine, quelle que soit la taille de votre organisation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
          >
            Demander un devis
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-[color:var(--line)] bg-white/80 p-4 shadow-sm">
              <Image
                src="/image2.jpg"
                alt="Illustration des services NESEL"
                width={720}
                height={480}
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">
                Une équipe dédiée pour chaque étape critique.
              </h2>
              <p className="mt-4 text-base text-[color:var(--muted)]">
                Nous coordonnons les démarches administratives, la conformité et les livrables internes pour que vos
                équipes gardent le rythme, même à distance.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[color:var(--muted)]">
                <li>Audit initial et feuille de route sur mesure.</li>
                <li>Coordination avec les administrations et partenaires locaux.</li>
                <li>Reporting régulier et recommandations d’optimisation.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07}>
              <div className="rounded-3xl border border-[color:var(--line)] bg-white/85 p-6 shadow-sm">
                <service.icon className="h-7 w-7 text-[color:var(--brand)]" />
                <h2 className="mt-4 font-display text-2xl text-[color:var(--ink)]">{service.title}</h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-8">
            <h2 className="font-display text-3xl text-[color:var(--ink)]">Ce que vous recevez avec NESEL</h2>
            <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">
              Notre approche vise la clarté et la fiabilité, avec des livrables concrets et un accompagnement accessible.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-4">
                  <p className="text-sm text-[color:var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">Questions fréquentes</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Nos consultants répondent aux demandes les plus courantes sur l’implantation et la gestion administrative.
              </p>
            </div>
            <Faq items={faqItems} />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <CTASection
          title="Construisons votre trajectoire d’implantation"
          text="Partagez vos objectifs et recevez un plan d’action détaillé avec les ressources et délais nécessaires."
          primaryLabel="Parler à un consultant"
          primaryHref="/contact"
          secondaryLabel="Voir les packs"
          secondaryHref="/packs"
        />
      </section>
    </div>
  );
}

