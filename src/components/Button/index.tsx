import { ButtonHTMLAttributes } from 'react';

import { Slot } from '@radix-ui/react-slot';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button(props: ButtonProps) {
  const { asChild, ...attrs } = props;

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors outline-none hover:bg-cyan-300 focus:outline-2 focus:outline-cyan-500 focus:outline-offset-4"
      {...attrs}
    />
  );
}
