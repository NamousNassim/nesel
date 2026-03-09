import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[color:var(--brand)] text-white shadow-sm shadow-[rgba(12,31,63,0.25)] hover:bg-[color:var(--brand-dark)] focus-visible:ring-[color:var(--brand)]':
              variant === 'primary',
            'bg-[color:var(--accent)] text-white shadow-sm shadow-[rgba(227,53,61,0.2)] hover:bg-[color:var(--accent-dark)] focus-visible:ring-[color:var(--accent)]':
              variant === 'secondary',
            'border border-[color:var(--line)] bg-white/70 text-[color:var(--ink)] hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] focus-visible:ring-[color:var(--brand)]':
              variant === 'outline',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-5 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

