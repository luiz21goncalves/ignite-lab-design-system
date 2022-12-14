import { ReactNode } from 'react';

import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export type TextProps = {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
};

export function Text(props: TextProps) {
  const { size = 'md', asChild, children, className } = props;

  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}
