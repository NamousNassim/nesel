import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

type Variant = 'silver' | 'golden' | 'diamond';

interface PlanCardProps {
  variant: Variant;
  name: string;
  subtitle?: string;
  highlight?: string;
  features: string[];
  featured?: boolean;
  ctaHref: string;
  ctaLabel: string;
}

const variants: Record<
  Variant,
  {
    gradient: string;
    border: string;
    shadow: string;
    shadowHover: string;
    glow: string;
    icon: string;
    accent: string;
    accentBg: string;
    badge?: string;
  }
> = {
  silver: {
    gradient: 'linear-gradient(135deg,#fdfefe 0%,#f4f7fb 45%,#e9edf5 100%)',
    border: '#cfd5e2',
    shadow: '0 18px 55px rgba(152,163,189,0.18)',
    shadowHover: '0 26px 80px rgba(152,163,189,0.30)',
    glow: 'rgba(201,211,224,0.45)',
    icon: '#7b869c',
    accent: '#0f172a',
    accentBg: 'rgba(12,31,63,0.06)',
  },
  golden: {
    gradient: 'linear-gradient(135deg,#fffaf2 0%,#fff4de 45%,#f7e6b8 100%)',
    border: '#d7b75b',
    shadow: '0 20px 60px rgba(212,175,55,0.18)',
    shadowHover: '0 30px 90px rgba(212,175,55,0.32)',
    glow: 'rgba(244,208,111,0.50)',
    icon: '#b58d1d',
    accent: '#0f172a',
    accentBg: 'rgba(212,175,55,0.12)',
    badge: 'linear-gradient(120deg,#d4af37,#f4d06f)',
  },
  diamond: {
    gradient: 'linear-gradient(135deg,#f8fcff 0%,#edf7ff 45%,#dff2ff 100%)',
    border: '#b9e6ff',
    shadow: '0 18px 55px rgba(137,210,255,0.20)',
    shadowHover: '0 28px 85px rgba(137,210,255,0.32)',
    glow: 'rgba(185,230,255,0.48)',
    icon: '#3f9bd8',
    accent: '#0f172a',
    accentBg: 'rgba(63,155,216,0.10)',
  },
};

export function PlanCard({
  variant,
  name,
  subtitle,
  highlight,
  features,
  featured,
  ctaHref,
  ctaLabel,
}: PlanCardProps) {
  const v = variants[variant];

  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 backdrop-blur-[2px] transition duration-300 ease-out transform hover:-translate-y-2 will-change-transform'
      )}
      style={{
        borderColor: v.border,
        boxShadow: v.shadow,
        backgroundImage: v.gradient,
      }}
    >
      {/* Soft aura */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-70 blur-3xl transition duration-300"
        style={{
          background: `radial-gradient(circle at 18% 18%, ${v.glow}, transparent 55%)`,
        }}
      />

      <div className="relative flex-1 space-y-3 transition-transform duration-300 group-hover:-translate-y-1">
        {featured && (
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-sm"
            style={{
              background: v.badge ?? 'linear-gradient(135deg,#d94545,#c12f2f)',
              color: v.accent,
            }}
          >
            Recommandé
          </span>
        )}
        <h3 className="font-display text-2xl text-[color:var(--ink)]">{name}</h3>
        {subtitle ? <p className="text-sm text-[color:var(--muted)]">{subtitle}</p> : null}
        {highlight ? (
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">{highlight}</p>
        ) : null}

        <div className="mt-4 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
              <CheckCircleIcon className="mt-0.5 h-5 w-5" style={{ color: v.icon }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-6">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 bg-[color:var(--cta-bg)] hover:bg-[color:var(--cta-bg-hover)]"
          style={{
            color: v.accent,
            boxShadow: '0 12px 32px rgba(15,23,42,0.08)',
            ['--cta-bg' as string]: 'rgba(255,255,255,0.82)',
            ['--cta-bg-hover' as string]: v.accentBg,
          }}
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Hover state */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl border transition duration-300 ease-out"
        style={{ borderColor: v.border }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 ease-out group-hover:opacity-100"
        style={{
          boxShadow: v.shadowHover,
        }}
      />
    </div>
  );
}
