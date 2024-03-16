import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.scss';

interface Props {
  /** Встраиваемый контент. */
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Museum',
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
}
