'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export default function Faq({ items }: FaqProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Disclosure key={item.question}>
          {({ open }) => (
            <div className="rounded-2xl border border-[color:var(--line)] bg-white/80 px-5 py-4">
              <Disclosure.Button className="flex w-full items-center justify-between text-left text-base font-semibold text-[color:var(--ink)]">
                {item.question}
                <ChevronDownIcon
                  className={cn('h-5 w-5 text-[color:var(--muted)] transition', open && 'rotate-180')}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-3 text-sm text-[color:var(--muted)]">
                {item.answer}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

