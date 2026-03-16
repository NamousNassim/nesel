import type { Metadata } from 'next';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez NESEL pour votre projet d’implantation au Maroc. Nos équipes vous répondent sous 48h.',
};

const contactCards = [
  {
    title: 'Nos bureaux',
    detail: 'Marrakech – Quartier Gueliz | Casablanca – Anfa',
    icon: MapPinIcon,
  },
  {
    title: 'Email',
    detail: 'contact@nesel.ma',
    icon: EnvelopeIcon,
  },
  {
    title: 'Téléphone',
    detail: '+212 661-305081',
    icon: PhoneIcon,
  },
  {
    title: 'Disponibilité',
    detail: 'Lundi – Vendredi, 9h à 18h',
    icon: ClockIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-[color:var(--ink)]">
            Parlons de votre implantation au Maroc.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[color:var(--muted)]">
            Dites-nous où vous en êtes et nous vous reviendrons avec une proposition claire : étapes, délais et budget.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--line)] bg-white/90 p-6">
              <h2 className="font-display text-2xl text-[color:var(--ink)]">Informations de contact</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Notre équipe vous répond rapidement et peut organiser un rendez-vous en présentiel ou à distance.
              </p>
              <div className="mt-6 grid gap-4">
                {contactCards.map((card) => (
                  <div key={card.title} className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-white/80 p-4">
                    <card.icon className="h-5 w-5 text-[color:var(--brand)]" />
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--ink)]">{card.title}</p>
                      <p className="text-sm text-[color:var(--muted)]">{card.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-[color:var(--line)] bg-white/95 p-6 shadow-sm">
              <h2 className="font-display text-2xl text-[color:var(--ink)]">Demande de devis</h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Partagez vos besoins et nous préparerons une proposition personnalisée.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <CTASection
          title="Besoin d’un rendez-vous rapide ?"
          text="Réservez un appel découverte de 30 minutes pour clarifier votre projet et obtenir un plan d’action immédiat."
          primaryLabel="Planifier un appel"
          primaryHref="/contact"
          secondaryLabel="Voir les packs"
          secondaryHref="/packs"
        />
      </section>
    </div>
  );
}

