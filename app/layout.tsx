import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Major_Mono_Display as Display, IBM_Plex_Mono as Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const display = Display({ subsets: ['latin'], weight: ['400'], variable: '--font-display' });
const mono = Mono({ subsets: ['latin'], weight: ['400'] });

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
      <body className={cn(mono.className, display.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
