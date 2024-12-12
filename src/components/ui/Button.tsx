import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({ variant = 'primary', children, href, className }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-colors';
  const styles = clsx(
    baseStyles,
    {
      'bg-white text-blue-600 hover:bg-gray-100': variant === 'primary',
      'border-2 border-white hover:bg-white hover:text-blue-600': variant === 'secondary',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles}>
      {children}
    </button>
  );
}