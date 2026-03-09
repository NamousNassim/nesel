'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Packs', href: '/packs' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="header"
      className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-white/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(12,31,63,0.08)]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white shadow-[0_10px_30px_rgba(12,31,63,0.12)]">
                <Image src="/logo.png" alt="NESEL" width={44} height={44} className="h-11 w-11 object-contain" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg text-[color:var(--ink)]">NESEL</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  Domiciliation & Corporate Desk
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-4 text-sm font-medium text-[color:var(--muted)] lg:flex">
              <div className="flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 shadow-sm">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'rounded-full px-3 py-1 transition-colors hover:text-[color:var(--ink)]',
                        isActive && 'bg-[color:var(--frost)] text-[color:var(--ink)]'
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/contact"
                className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(229,53,61,0.25)] transition hover:bg-[color:var(--accent-dark)]"
              >
                Demander un devis
              </Link>
            </nav>

            <Disclosure.Button className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 p-2 text-[color:var(--ink)] shadow-sm transition hover:bg-white lg:hidden">
              <span className="sr-only">Ouvrir le menu</span>
              {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="border-t border-[color:var(--line)] bg-white/95 px-6 py-4 shadow-lg lg:hidden">
            <div className="flex flex-col gap-4 text-[color:var(--muted)]">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn('text-sm font-medium', isActive && 'text-[color:var(--ink)]')}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="rounded-full bg-[color:var(--brand)] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-dark)]"
              >
                Demander un devis
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

