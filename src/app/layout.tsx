import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Footer } from './footer';
import './globals.css';
import { Header } from './header';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: '300',
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Douglas Tenfen - Software Engineer',
  description: `Douglas' personal website`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col">
          <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
