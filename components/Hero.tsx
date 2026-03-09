import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ShieldCheckIcon, MapPinIcon, DocumentCheckIcon } from '@heroicons/react/24/solid';
import Reveal from '@/components/site/Reveal';

const highlights = [
  'Adresse juridique premium à Marrakech & Casablanca',
  'Gestion sécurisée et numérisation du courrier',
  'Réexpédition nationale et internationale sur demande',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand)] via-[#0f2f63] to-[#0a1c3f] text-white">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(900px_360px_at_12%_10%,rgba(229,53,61,0.25),transparent_55%)]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(780px_320px_at_90%_0%,rgba(255,255,255,0.16),transparent_55%)]" />
      <div className="absolute -right-36 top-16 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -left-28 bottom-10 h-56 w-56 rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
              <ShieldCheckIcon className="h-4 w-4 text-[color:var(--accent)]" />
              Domiciliation • Création • Corporate Desk
            </div>

            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo NESEL" width={72} height={72} className="h-14 w-14 object-contain" />
              <div>
                <p className="font-display text-4xl leading-tight">Domiciliation premium au Maroc.</p>
                <p className="text-sm uppercase tracking-[0.24em] text-white/70">Adresse. Conformité. Présence.</p>
              </div>
            </div>

            <p className="text-lg text-white/85">
              NESEL sécurise votre siège social, gère votre courrier et pilote vos démarches administratives avec des
              équipes basées à Marrakech et Casablanca. Vous obtenez une présence légale claire et une image corporate
              crédible auprès de vos partenaires.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand)] shadow-[0_14px_40px_rgba(255,255,255,0.32)] transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Demander un devis
              </Link>
              <Link
                href="/packs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
              >
                Découvrir nos forfaits
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-white/20 bg-white/5 p-3 text-sm text-white/80"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="absolute inset-0 opacity-40 [background:radial-gradient(640px_280px_at_75%_0%,rgba(229,53,61,0.25),transparent_50%)]" />
            <div className="relative space-y-5 rounded-2xl border border-white/20 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/60">Adresse siège social</p>
                  <p className="font-display text-2xl">NESEL Corporate Desk</p>
                </div>
                <MapPinIcon className="h-6 w-6 text-[color:var(--accent)]" />
              </div>
              <div className="grid gap-3 text-sm text-white/80">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Marrakech</p>
                  <p>Quartier Gueliz • Attestation et réception courrier</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Casablanca</p>
                  <p>Centre d’affaires Anfa • Réexpédition nationale & internationale</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[color:var(--brand)]/70 p-4">
                <div className="flex items-center gap-3">
                  <DocumentCheckIcon className="h-6 w-6 text-[color:var(--accent)]" />
                  <div>
                    <p className="font-semibold">Création & mise en conformité</p>
                    <p className="text-sm text-white/75">
                      Statuts, dépôt légal, gestion du courrier et secrétariat bilingue FR/EN.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                  <span>Réponse en 48h</span>
                  <span>Support WhatsApp & email</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
