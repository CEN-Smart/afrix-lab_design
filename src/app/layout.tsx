import type { Metadata } from 'next';
import { Instrument_Sans, Libre_Caslon_Text } from 'next/font/google';
import './globals.css';
import { ChakraProviders } from '@/providers/chakraprovider';
import React from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/header/Header';
import Footer from '@/components/footer-section/Footer';

const bodyFont = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const titleFont = Libre_Caslon_Text({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400', '700'],
});

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
      <body
        suppressHydrationWarning
        className={cn(
          'antialiased font-body',
          bodyFont.variable,
          titleFont.variable
        )}
      >
        <ChakraProviders>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ChakraProviders>
      </body>
    </html>
  );
}
