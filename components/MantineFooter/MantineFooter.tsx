'use client';

import {
  IconBrandGithub,
  IconMailHeart,
} from '@tabler/icons-react';
import { site } from '@/config/site';
import pack from '../../package.json';
import { AnimateBadge } from './AnimateBadge';
import { apps, highlights, mantineComponentCategories, resources, templateLinks, type FooterLink } from './links';
import classes from './MantineFooter.module.css';

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Jeroendg1989', icon: IconBrandGithub },
  { label: 'Blog', href: 'https://undolog.com/', icon: IconMailHeart },
];

function Links({ list }: { list: FooterLink[] }) {
  return (
    <ul className={classes.links}>
      {list.map((item) => (
        <li key={item.key}>
          <a
            className={classes.link}
            href={item.href}
            target={item.newWindow ? '_blank' : undefined}
            rel={item.newWindow ? 'noopener noreferrer' : undefined}
            aria-current={item.current ? 'true' : undefined}
          >
            {item.title}
          </a>
          {item.current && <span className={classes.current}>This site</span>}
          {item.new && <AnimateBadge />}
        </li>
      ))}
    </ul>
  );
}

function Column({ title, list }: { title: string; list: FooterLink[] }) {
  return (
    <nav aria-label={title} className={classes.column}>
      <h2 className={classes.title}>{title}</h2>
      <Links list={list} />
    </nav>
  );
}

/**
 * TradeFlow NL footer: light navy ground, Dutch Orange links, clean typography.
 */
export const MantineFooter = () => {
  return (
    <footer className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.top}>
          <div className={classes.brand}>
            <span className={classes.logo} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#0D2340" />
                <path d="M6 4h4v2h-6zM6 8h4v2h-6zM6 12h4v2h-6zM6 16h4v2h-6zM6 20h4v2h-6zM14 4h2v2h-2zM14 8h2v2h-2zM14 12h2v2h-2zM14 16h2v2h-2zM14 20h2v2h-2z" fill="#F36C21" />
                <path d="M17 4h2v2h-2zM17 8h2v2h-2zM17 12h2v2h-2zM17 16h2v2h-2zM17 20h2v2h-2z" fill="#A9DCEB" />
              </svg>
            </span>
            <p className={classes.name}>{site.name}</p>
            <p className={classes.blurb}>
              {site.tagline} Free and open source:{' '}
              <a href={`https://github.com/${site.repo}`}>star it on GitHub</a>,{' '}
              <a href={`https://github.com/${site.repo}/issues`}>report an issue</a> or{' '}
              <a href="https://github.com/sponsors/Jeroendg1989">sponsor the work</a>.
            </p>
            <ul className={classes.social}>
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className={classes.socialLink}>
                    <Icon size={20} stroke={1.6} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Column title="Documentation" list={templateLinks} />
          <Column title="Highlights" list={highlights} />
          <Column title="Resources" list={resources} />
          <Column title="Apps" list={apps} />
        </div>

        <div className={classes.extensions}>
          <h2 className={classes.title}>TradeFlow NL Docs</h2>
          <div className={classes.categories}>
            {mantineComponentCategories.map((category) => (
              <nav key={category.key} aria-label={category.title} className={classes.column}>
                <h3 className={classes.subTitle}>{category.title}</h3>
                <Links list={[...category.links]} />
              </nav>
            ))}
          </div>
        </div>

        <div className={classes.colophon}>
          <p className={classes.credits}>
            Made with ❤️ by <a href="https://gfazioli.github.io/">Undolog</a>
            <span className={classes.dot} aria-hidden="true">·</span>
            Hosted on <a href={site.host.href}>{site.host.name}</a>
            <span className={classes.dot} aria-hidden="true">·</span>
            Built with{' '}
            <a href="https://nextjs.org/" className={classes.built}>
              Next.js
            </a>
            ,{' '}
            <a href="https://mantine.dev/" className={classes.built}>
              Mantine v{pack.dependencies['@mantine/core']}
            </a>
            and {site.engineName}
          </p>
          <p className={classes.credits}>
            v{pack.version}
            <span className={classes.dot} aria-hidden="true">·</span>
            <a href={`https://github.com/${site.repo}/blob/main/LICENCE`}>MIT licence</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
