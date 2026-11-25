import {
  IconBrandGithub,
  IconBrandMantine,
  IconCode,
  IconLayoutNavbar,
  IconMarkdown,
  IconNotes,
  IconReplace,
  IconSearch,
  type Icon,
} from '@tabler/icons-react';
import type { TemplateKey } from '@/config/templates';
import type { SketchName } from './Sketch';

export interface Feature {
  icon: Icon;
  /** The line drawing in the card's corner */
  art: SketchName;
  title: string;
  body: string;
}

/**
 * What TradeFlow NL gives: five feature cards and a sixth every sibling shares, the colour
 * scheme, with the buttons that switch it live. The same file in the three siblings, like
 * `config/templates.ts`.
 */
export const features: Record<TemplateKey, Feature[]> = {
  nextra: [
    {
      icon: IconBrandMantine,
      art: 'block',
      title: 'Mantine inside Nextra',
      body: 'Nextra 4 and its docs theme with Mantine wired in: one provider, one theme, and your own components in every MDX page.',
    },
    {
      icon: IconMarkdown,
      art: 'layers',
      title: 'Content in MDX',
      body: 'Pages live in the content folder and _meta files order the sidebar, exactly as the Nextra documentation describes.',
    },
    {
      icon: IconSearch,
      art: 'target',
      title: 'Search with Pagefind',
      body: 'A static index written after every build, for the search box in the navbar and for a server search API.',
    },
    {
      icon: IconLayoutNavbar,
      art: 'frame',
      title: 'Your navbar and footer',
      body: 'The navbar and the footer of the docs theme are replaced by Mantine components that live in your repository.',
    },
    {
      icon: IconNotes,
      art: 'timeline',
      title: 'Release notes from GitHub',
      body: 'A page that lists your GitHub releases through a small API proxy, with an optional token against rate limits.',
    },
  ],
};
