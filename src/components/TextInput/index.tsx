import { InputHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

export type RootProps = {
  children: ReactNode;
};

function Root(props: RootProps) {
  const { children } = props;
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

Root.displayName = 'TextInput.Root';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

Input.displayName = 'TextInput.Input';

export type IconProps = {
  children: ReactNode;
};

function Icon(props: IconProps) {
  const { children } = props;

  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

Icon.displayName = 'TextInput.Icon';

export const TextInput = {
  Root,
  Icon,
  Input,
};
