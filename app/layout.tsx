import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Layout } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';

import { MantineFooter, MantineNavBar } from '@/components';
import config from '@/config';
import pack from '../package.json';
import { theme } from '../theme';

import './global.css';

export const metadata = config.metadata;

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ibm-plex-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ibm-plex-mono',
});

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let pageMap: any = [];
  try {
    pageMap = await getPageMap();
  } catch {
    pageMap = [];
  }
  const { nextraLayout, head } = config;

  return (
    <html lang="nl" dir="ltr" className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`} {...mantineHtmlProps}>
      <Head
        backgroundColor={{ light: '#F3F6F8', dark: '#0D2340' }}
        color={{
          hue: { light: 24, dark: 26 },
          saturation: { light: 100, dark: 100 },
          lightness: { light: 52, dark: 64 },
        }}
      >
        <ColorSchemeScript
          nonce={head.mantine.nonce}
          defaultColorScheme={head.mantine.defaultColorScheme}
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={head.mantine.defaultColorScheme}>
          <Layout
            banner={
              <Banner storageKey="tradeflow-release-notes">
                ✨ TradeFlow NL Docs
              </Banner>
            }
            navbar={<MantineNavBar />}
            pageMap={pageMap}
            docsRepositoryBase={nextraLayout.docsRepositoryBase}
            footer={<MantineFooter />}
            sidebar={nextraLayout.sidebar}
            nextThemes={nextraLayout.nextThemes}
          >
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
