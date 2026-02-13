import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Reveal from '@/components/site/Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_0%_0%,rgba(211,138,58,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_100%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full border border-white/20" />
      <div className="absolute -left-20 bottom-6 h-44 w-44 rounded-full border border-white/20" />

      <div className="relative mx-auto grid min-h-[70vh] max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
        <Reveal>
          <div>
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo NESEL" width={64} height={64} />
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">NESEL</p>
                <p className="font-display text-2xl">Services d’affaires au Maroc</p>
              </div>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Domiciliation, création et pilotage administratif pour des entreprises ambitieuses.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Nous aidons les dirigeants, filiales internationales et entrepreneurs locaux à s’implanter
              efficacement au Maroc grâce à des services clairs, un accompagnement humain et une exécution rapide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand)] shadow-sm transition hover:bg-white/90"
              >
                Demander un devis
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
              >
                Découvrir les services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Ce que nous faisons</p>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                Domiciliation professionnelle à Marrakech et Casablanca, avec gestion du courrier.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                Création de sociétés et démarches administratives accélérées.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                Assistance RH, fiscalité opérationnelle et reporting pour dirigeants à distance.
              </li>
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-display">48h</p>
                <p className="text-xs text-white/70">Réactivité moyenne</p>
              </div>
              <div>
                <p className="text-2xl font-display">2 villes</p>
                <p className="text-xs text-white/70">Marrakech + Casablanca</p>
              </div>
              <div>
                <p className="text-2xl font-display">100%</p>
                <p className="text-xs text-white/70">Suivi personnalisé</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

