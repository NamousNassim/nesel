import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import CTASection from '@/components/site/CTASection';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Informations légales et conditions d’utilisation du site NESEL.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="mx-auto max-w-4xl px-6 pt-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Mentions légales</p>
          <h1 className="mt-3 font-display text-4xl text-[color:var(--ink)]">
            Informations légales et responsabilités.
          </h1>
          <p className="mt-4 text-base text-[color:var(--muted)]">
            Cette page présente les informations légales relatives au site NESEL et aux conditions d’utilisation.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 space-y-10">
        <Reveal>
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Éditeur du site</h2>
            <p className="text-sm text-[color:var(--muted)]">
              NESEL – Services d’affaires au Maroc. Siège administratif : Marrakech, Royaume du Maroc. Contact :
              contact@nesel.ma – +212 5 24 00 00 00.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Responsable de publication</h2>
            <p className="text-sm text-[color:var(--muted)]">
              La direction de NESEL assure la publication des contenus présents sur le site.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Hébergement</h2>
            <p className="text-sm text-[color:var(--muted)]">
              L’hébergement du site est assuré par un prestataire professionnel conforme aux standards de sécurité et de
              disponibilité. Les informations détaillées peuvent être communiquées sur demande.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Propriété intellectuelle</h2>
            <p className="text-sm text-[color:var(--muted)]">
              L’ensemble des contenus (textes, visuels, structure et éléments graphiques) est la propriété exclusive de
              NESEL. Toute reproduction ou utilisation non autorisée est interdite.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Limitation de responsabilité</h2>
            <p className="text-sm text-[color:var(--muted)]">
              NESEL met tout en œuvre pour garantir l’exactitude des informations publiées, sans pouvoir assurer une
              garantie absolue. L’utilisateur reste responsable de l’usage des informations présentes sur le site.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6">
        <CTASection
          title="Besoin d’informations officielles ?"
          text="Contactez-nous pour obtenir les informations légales détaillées et les documents associés."
          primaryLabel="Contacter NESEL"
          primaryHref="/contact"
        />
      </section>
    </div>
  );
}

