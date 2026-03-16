'use client';

import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type SpaceSlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
  badge: string;
};

interface SpacesCarouselProps {
  slides: SpaceSlide[];
}

export default function SpacesCarousel({ slides }: SpacesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const advanceSlide = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);

    return () => {
      mediaQuery.removeEventListener('change', syncPreference);
    };
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || isPaused || prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (!document.hidden) {
        advanceSlide();
      }
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[activeIndex];

  return (
    <div className="rounded-[2rem] border border-[color:var(--line)] bg-white/90 p-3 shadow-sm sm:p-4">
      <div
        className="group relative overflow-hidden rounded-[1.6rem] bg-[color:var(--brand-dark)]"
        aria-roledescription="carousel"
        aria-label="Galerie des espaces et de l'equipe NESEL"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          setIsPaused(true);
        }}
        onTouchEnd={(event) => {
          const startX = touchStartX.current;
          const endX = event.changedTouches[0]?.clientX ?? null;

          if (startX !== null && endX !== null) {
            const delta = endX - startX;

            if (Math.abs(delta) > 40) {
              if (delta > 0) {
                showPrevious();
              } else {
                showNext();
              }
            }
          }

          touchStartX.current = null;
          setIsPaused(false);
        }}
      >
        <div
          className="flex transform-gpu transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative min-w-full">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,22,47,0.82)] via-[rgba(8,22,47,0.18)] to-transparent" />
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <div className="max-w-xl rounded-[1.5rem] border border-white/15 bg-black/20 p-4 text-white shadow-[0_18px_60px_rgba(8,22,47,0.35)] backdrop-blur-sm">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90">
              {currentSlide.badge}
            </span>
            <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{currentSlide.title}</h3>
            <p className="mt-2 max-w-lg text-sm text-white/80 sm:text-base">{currentSlide.description}</p>
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3 sm:px-4">
          <button
            type="button"
            onClick={showPrevious}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white shadow-lg backdrop-blur transition hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Afficher l'image precedente"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white shadow-lg backdrop-blur transition hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Afficher l'image suivante"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 sm:hidden">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">{currentSlide.badge}</p>
          <p className="mt-1 text-sm font-semibold text-[color:var(--ink)]">{currentSlide.title}</p>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goToSlide(index)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === activeIndex ? 'w-8 bg-[color:var(--accent)]' : 'w-2.5 bg-[color:var(--silver)]'
              )}
              aria-label={`Afficher la slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goToSlide(index)}
            className={cn(
              'rounded-[1.4rem] border p-4 text-left transition',
              index === activeIndex
                ? 'border-[color:var(--accent)] bg-[color:var(--brand-dark)] text-white shadow-[0_16px_40px_rgba(8,22,47,0.16)]'
                : 'border-[color:var(--line)] bg-white text-[color:var(--ink)] hover:border-[color:var(--silver)]'
            )}
            aria-pressed={index === activeIndex}
          >
            <p
              className={cn(
                'text-[11px] font-semibold uppercase tracking-[0.22em]',
                index === activeIndex ? 'text-white/70' : 'text-[color:var(--muted)]'
              )}
            >
              {slide.badge}
            </p>
            <p className="mt-2 text-base font-semibold">{slide.title}</p>
            <p className={cn('mt-2 text-sm', index === activeIndex ? 'text-white/75' : 'text-[color:var(--muted)]')}>
              {slide.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
