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
    <Disclosure as="header" className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-white/80 backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[color:var(--line)] bg-white shadow-sm">
                <Image src="/logo.png" alt="NESEL" width={40} height={40} className="h-10 w-10 object-contain" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg text-[color:var(--ink)]">NESEL</p>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Services d’affaires</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted)] lg:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'transition-colors hover:text-[color:var(--ink)]',
                      isActive && 'text-[color:var(--ink)]'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="rounded-full bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-dark)]"
              >
                Demander un devis
              </Link>
            </nav>

            <Disclosure.Button className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 p-2 text-[color:var(--ink)] transition hover:bg-white lg:hidden">
              <span className="sr-only">Ouvrir le menu</span>
              {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="border-t border-[color:var(--line)] bg-white/95 px-6 py-4 lg:hidden">
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

