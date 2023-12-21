import type { Metadata } from 'next';
import './globals.css';
import { ChakraProviders } from '@/providers/chakraprovider';
import React from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'Afrix Lab',
  description:
    'Afrix Lab is a blockchain development company based in Lagos, Nigeria.',
  icons: {
    icon: 'favicon.ico',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning className={cn('antialiased font-body')}>
        <ChakraProviders>
          <Navbar />
          {children}
        </ChakraProviders>
      </body>
    </html>
  );
}
