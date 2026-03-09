'use client';

import { Disclosure, Popover, Transition } from '@headlessui/react';
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

const serviceLinks = [
  { name: 'Gestion & Numérisation du courrier', href: '/services' },
  { name: 'Réexpédition postale', href: '/services' },
  { name: 'Bureaux & Salles de réunion', href: '/services' },
  { name: "Création d'entreprise", href: '/services' },
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

            <nav className="relative hidden items-center gap-4 text-sm font-medium text-[color:var(--muted)] lg:flex">
              <div className="flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 shadow-sm">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  if (item.name === 'Services') {
                    return (
                      <Popover key="services" className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={cn(
                                'rounded-full px-3 py-1 transition-colors hover:text-[color:var(--ink)] focus:outline-none',
                                open && 'bg-[color:var(--frost)] text-[color:var(--ink)]'
                              )}
                            >
                              Services
                            </Popover.Button>
                            <Transition
                              enter="transition ease-out duration-150"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute left-0 mt-3 w-[320px] rounded-2xl border border-[color:var(--line)] bg-white p-4 shadow-[0_18px_48px_rgba(12,31,63,0.12)]">
                                <p className="px-2 pb-2 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                                  Services clés
                                </p>
                                <div className="flex flex-col gap-2">
                                  {serviceLinks.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="rounded-xl px-3 py-2 text-sm text-[color:var(--ink)] transition hover:bg-[color:var(--frost)]"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    );
                  }

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
                if (item.name === 'Services') {
                  return (
                    <div key="mobile-services" className="space-y-2">
                      <Link
                        href={item.href}
                        className={cn('text-sm font-medium', isActive && 'text-[color:var(--ink)]')}
                      >
                        Services
                      </Link>
                      <div className="ml-2 grid gap-2 rounded-xl border border-[color:var(--line)] bg-white/80 p-3">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
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

