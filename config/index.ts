export default {
  metadata: {
    title: {
      default: 'TradeFlow NL Docs',
      template: '%s | TradeFlow NL Docs',
    },
    description:
      'TradeFlow NL documentation: embedded BNPL for Dutch logistics & trade-credit SMEs. Contract management, invoice drafting, and installment tracking with Mantine and Nextra.',
    metadataBase: new URL('https://tradeflow-fresh.vercel.app/'),
    keywords: [
      'TradeFlow',
      'Nextra',
      'Next.js',
      'React',
      'Mantine',
      'BNPL',
      'logistics',
      'Dutch',
      'trade credit',
      'documentation',
    ],
    generator: 'Next.js',
    applicationName: 'TradeFlow NL',
    appleWebApp: {
      title: 'TradeFlow NL',
    },
    openGraph: {
      url: './',
      siteName: 'TradeFlow NL',
      locale: 'nl_NL',
      type: 'website',
    },
    other: {
      'msapplication-TileColor': '#0D2340',
    },
    twitter: {
      site: 'https://tradeflow-fresh.vercel.app/',
    },
    alternates: {
      canonical: './',
    },
  },
  nextraLayout: {
    docsRepositoryBase: 'https://github.com/Jeroendg1989/tradeflow-nl-docs/tree/main/app/docs/',
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
    nextThemes: {
      defaultTheme: 'light',
    },
  },
  head: {
    mantine: {
      defaultColorScheme: 'light',
      nonce: '8IBTHwOdqNKAWeKl7plt8g==',
    },
  },
  gitHub: {
    repo: 'Jeroendg1989/tradeflow-nl-docs',
    apiUrl: 'https://api.github.com',
    releasesUrl: 'https://api.github.com/repos/Jeroendg1989/tradeflow-nl-docs/releases',
  },
  releaseNotes: {
    url: 'https://github.com/Jeroendg1989/tradeflow-nl-docs/releases',
    maxReleases: 10,
  },
  search: {
    queryKeyword: 'q',
    minQueryLength: 3,
    limitKeyword: 'limit',
    defaultMaxResults: 5,
    excerptLengthKeyword: 'excerptLength',
    defaultExcerptLength: 30,
    defaultLanguage: 'nl',
  },
} as const;
