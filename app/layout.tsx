import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Major_Mono_Display as Display, IBM_Plex_Mono as Primary } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ModeToggle } from '@/components/ModeToggle';
import StructuredData from '@/components/StructuredData';

const display = Display({ subsets: ['latin'], weight: ['400'], variable: '--font-display' });
const primary = Primary({ subsets: ['latin'], weight: ['400'], variable: '--font-primary' });

const siteUrl = 'https://sulaimanagara.com';

export const metadata: Metadata = {
  title: 'Sulaiman Agara — Web & Game Developer | Philadelphia',
  description:
    'Sulaiman Agara — web developer, game developer, and security analyst based in Philadelphia. Explore projects in React, Next.js, TypeScript, Node.js, and C# (Unity).',
  keywords: [
    'Philadelphia web developer',
    'Philadelphia frontend developer',
    'Philadelphia full-stack developer',
    'Philadelphia React developer',
    'Philadelphia TypeScript developer',
    'Philadelphia game developer',
    'Unity game developer Philadelphia',
    'Philadelphia cybersecurity analyst',
    'software engineer Philadelphia',
    'Sulaiman Agara portfolio'
  ],
  authors: [{ name: 'Sulaiman Agara' }],
  creator: 'Sulaiman Agara',
  applicationName: 'SulaimanAgara Portfolio',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Sulaiman Agara — Web & Game Developer | Philadelphia',
    description:
      'Web & game developer and security analyst based in Philadelphia. Specialties: React, Next.js, TypeScript, Node.js, C#, Unity.',
    url: siteUrl,
    siteName: 'SulaimanAgara',
    images: [{ url: `${siteUrl}/images/profile.svg`, alt: 'Sulaiman Agara' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sulaiman Agara — Web & Game Developer | Philadelphia',
    description:
      'Web & game developer and security analyst based in Philadelphia. Specialties: React, Next.js, TypeScript, Node.js, C#, Unity.',
    images: [`${siteUrl}/images/profile.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        style={{ overflow: 'auto !important', marginRight: '0px !important' }}
        className={cn(
          primary.className,
          primary.variable,
          display.variable,
          'selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black'
        )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <StructuredData />
          {children}
          {/* <div className='fixed right-8 top-[10px] z-50'>
            <ModeToggle />
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
