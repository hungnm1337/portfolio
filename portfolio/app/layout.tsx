import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Nguyen Manh Hung — Full Stack Developer',
  description:
    'Portfolio of Nguyen Manh Hung, a Full Stack Developer specializing in ASP.NET Core, Next.js, and Angular. Based in Hanoi, Vietnam.',
  keywords: ['Full Stack Developer', 'ASP.NET Core', 'Next.js', 'Angular', 'Portfolio', 'Nguyen Manh Hung'],
  authors: [{ name: 'Nguyen Manh Hung' }],
  openGraph: {
    title: 'Nguyen Manh Hung — Full Stack Developer',
    description: 'Portfolio of Nguyen Manh Hung, a Full Stack Developer based in Hanoi, Vietnam.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
