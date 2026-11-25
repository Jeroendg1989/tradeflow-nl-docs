export const HUB_URL = 'https://mantine-extensions.vercel.app/';

export type TemplateKey = 'nextra';

export interface Template {
  key: TemplateKey;
  engine: string;
  name: string;
  enginePackage: string;
  engineName: string;
  tagline: string;
  lead: string;
  points: string[];
  repo: string;
  demo: string;
  host: { name: string; href: string };
  paper: 'blue' | 'violet' | 'orange';
  beam: [string, string];
}

export const templates: Record<TemplateKey, Template> = {
  nextra: {
    key: 'nextra',
    engine: 'Docs',
    name: 'TradeFlow NL Docs',
    enginePackage: 'nextra',
    engineName: 'Nextra',
    tagline: 'TradeFlow NL documentation on Nextra 4 with Mantine: one theme, dark mode in sync, and your own components in every MDX page.',
    lead: 'TradeFlow NL documentation starter on Nextra 4 with Mantine wired in: one design system, dark mode in sync, and your own components in every MDX page.',
    points: [
      'Nextra 4 with its docs theme',
      'Mantine and Nextra dark modes in sync',
      'Pagefind search out of the box',
    ],
    repo: 'Jeroendg1989/tradeflow-nl-docs',
    demo: 'https://tradeflow-fresh.vercel.app/',
    host: { name: 'Vercel', href: 'https://vercel.com/' },
    paper: 'blue',
    beam: ['#F36C21', '#A9DCEB'],
  },
};

export const templateList: Template[] = [templates.nextra];
