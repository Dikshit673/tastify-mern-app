import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5 font-medium',
  md: 'text-sm px-5 py-2 font-semibold',
  lg: 'text-md px-7 py-2.5 font-bold',
};

const variantClasses = {
  primary:
    'bg-prime-100 border-prime-100 inline-block rounded-md border  text-white ',
  secondary:
    'bg-prime-100 border-prime-100 inline-block rounded-md border px-5 py-2 text-sm font-semibold text-white capitalize transition-[scale] duration-150 ease-in active:scale-95',
};

const Button: FC<ButtonProps> = memo(
  ({
    children,
    className = '',
    size = 'md',
    variant = 'primary',
    ...props
  }) => {
    return (
      <div>
        <button
          {...props}
          className={cn(
            'transition-all duration-150 ease-in',
            'inline-block capitalize active:scale-95',
            'bg-prime-100 border-prime-100 border text-white',
            'rounded-md px-5 py-2 text-sm font-semibold',
            sizeClasses[size],
            variantClasses[variant],
            className
          )}
        >
          {children}
        </button>
      </div>
    );
  }
);

export { Button };
