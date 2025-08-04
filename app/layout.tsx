import Analytics from 'app/components/analytics/analytics';
import Footer from 'app/components/layouts/footer';
import Header from 'app/components/layouts/header';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { mukta } from './fonts';
import './tailwind.css';
import FlareCursor from './components/FlareCusor';

export const metadata: Metadata = {
  title: {
    template: '%s | James Pham',
    default: 'James Pham',
  },
  description: 'I build things for the web.',
  metadataBase: new URL('https://jamespham.vercel.app'),
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={mukta.className}>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          <FlareCursor />
          <Header />
          <LenisProvider>{children}</LenisProvider>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
