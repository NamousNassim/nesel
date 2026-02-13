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
    <footer className="border-t border-[color:var(--line)] bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand)] text-white font-display text-lg">
              N
            </div>
            <div>
              <p className="font-display text-lg text-[color:var(--ink)]">NESEL</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Business Desk</p>
            </div>
          </div>
          <p className="text-sm text-[color:var(--muted)]">
            NESEL accompagne les entreprises locales et internationales dans leur implantation et leur gestion
            quotidienne au Maroc, avec une présence active à Marrakech et Casablanca.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[color:var(--ink)]">Navigation</p>
          <div className="flex flex-col gap-2 text-sm text-[color:var(--muted)]">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-[color:var(--ink)]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[color:var(--ink)]">Contact</p>
          <div className="text-sm text-[color:var(--muted)]">
            <p>contact@nesel.ma</p>
            <p>+212 5 24 00 00 00</p>
            <p className="mt-2">Lundi – Vendredi, 9h à 18h</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[color:var(--ink)]">Adresses</p>
          <div className="text-sm text-[color:var(--muted)]">
            <p>Marrakech – Quartier Gueliz</p>
            <p>Casablanca – Centre d’affaires Anfa</p>
            <div className="mt-4 flex flex-col gap-2">
              {legal.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-[color:var(--ink)]">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)] py-4">
        <p className="text-center text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} NESEL. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

