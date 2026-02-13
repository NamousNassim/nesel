import Link from 'next/link';

interface CTASectionProps {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="rounded-3xl border border-[color:var(--line)] bg-white/90 px-6 py-10 shadow-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-[color:var(--ink)]">{title}</h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={primaryHref}
            className="rounded-full bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-dark)]"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--brand)]"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

