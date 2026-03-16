import Link from 'next/link';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Packs', href: '/packs' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

const legal = [
  { name: 'Mentions légales', href: '/mentions-legales' },
  { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--brand-dark)] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <span className="font-display text-lg">NE</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">Hotline implantation</p>
              <p className="font-display text-xl">+212 661-305081</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand)] shadow-[0_10px_30px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Planifier une consultation
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <span className="font-display text-lg">N</span>
            </div>
            <div>
              <p className="font-display text-lg">NESEL</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">Domiciliation & Corporate Desk</p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            NESEL accompagne les entreprises locales, startups et groupes internationaux pour opérer en toute
            conformité au Maroc : domiciliation, pilotage administratif et représentation corporate.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Navigation</p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="text-sm text-white/70">
            <p>contact@nesel.ma</p>
            <p>+212 661-305081</p>
            <p className="mt-2">Lundi – Vendredi, 9h à 18h</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Adresses</p>
          <div className="text-sm text-white/70">
            <p>Marrakech – Quartier Gueliz</p>
            <p>Casablanca – Centre d’affaires Anfa</p>
            <div className="mt-4 flex flex-col gap-2">
              {legal.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-white/60">
          © {new Date().getFullYear()} NESEL. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

