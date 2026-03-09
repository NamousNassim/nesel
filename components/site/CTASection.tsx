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
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-gradient-to-r from-[color:var(--brand)] via-[#102b58] to-[#0c1f3f] px-6 py-10 text-white shadow-[0_20px_60px_rgba(12,31,63,0.25)]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(800px_320px_at_20%_20%,rgba(229,53,61,0.25),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">Étape suivante</p>
          <h2 className="font-display text-3xl leading-tight">{title}</h2>
          <p className="text-base text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={primaryHref}
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand)] shadow-[0_12px_40px_rgba(255,255,255,0.35)] transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

