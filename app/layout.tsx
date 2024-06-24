import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Major_Mono_Display as Display, IBM_Plex_Mono as Primary } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ModeToggle } from '@/components/ModeToggle';

const display = Display({ subsets: ['latin'], weight: ['400'], variable: '--font-display' });
const primary = Primary({ subsets: ['latin'], weight: ['400'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Sulaiman Agara',
  description:
    'Welcome to the portfolio of Sulaiman Agara. Explore my works featuring stunning designs, innovative projects, and creative insights.',
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
          {children}
          {/* <div className='fixed right-8 top-[10px] z-50'>
            <ModeToggle />
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
