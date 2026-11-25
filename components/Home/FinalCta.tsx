import { IconBook, IconBrandGithub } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Link } from '@/components/Link/Link';
import { RENDER_LATER, revealItem } from '@/components/Motion/reveal-props';
import { RevealScope } from '@/components/Motion/RevealScope';
import { site } from '@/config/site';
import pack from '../../package.json';
import { InstallLine } from './InstallLine';
import classes from './FinalCta.module.css';
import home from './Home.module.css';

/**
 * TradeFlow NL closing call: the repository to start from, the docs, the command, in a frame
 * with its registration marks, over the circles a compass leaves round the logo.
 */
export function FinalCta() {
  return (
    <section
      className={`${home.section} ${classes.cta}`}
      aria-labelledby="start-title"
      {...RENDER_LATER}
    >
      <RevealScope className={`${home.marks} ${classes.inner}`}>
        <span {...revealItem('pop', 0, classes.logo)} aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="8" fill="#0D2340" />
            <path d="M9 6h4v3h-4zM9 10h4v3h-4zM9 14h4v3h-4zM9 18h4v3h-4zM9 22h4v3h-4zM22 6h2v3h-2zM22 10h2v3h-2zM22 14h2v3h-2zM22 18h2v3h-2zM22 22h2v3h-2z" fill="#F36C21" />
            <path d="M25 6h2v3h-2zM25 10h2v3h-2zM25 14h2v3h-2zM25 18h2v3h-2zM25 22h2v3h-2z" fill="#A9DCEB" />
          </svg>
        </span>
        <h2 id="start-title" {...revealItem('rise', 80, classes.title)}>
          Your docs, <span className={home.gradient}>live this afternoon</span>
        </h2>
        <p {...revealItem('rise', 140, home.lead)}>
          Start from the template, write your pages in MDX, deploy. Everything else on this page is
          already in the repository.
        </p>
        <div {...revealItem('rise', 200, classes.actions)}>
          <Button
            component="a"
            href={`https://github.com/${site.repo}`}
            size="lg"
            radius="md"
            className={`${home.button} ${home.primary}`}
            leftSection={<IconBrandGithub size={20} aria-hidden="true" />}
          >
            Use template v{pack.version}
          </Button>
          <Button
            component={Link}
            href="/docs"
            size="lg"
            radius="md"
            variant="default"
            className={`${home.button} ${home.secondary}`}
            leftSection={<IconBook size={20} aria-hidden="true" />}
          >
            Read the docs
          </Button>
        </div>
        <div {...revealItem('rise', 260, classes.install)}>
          <InstallLine />
        </div>
      </RevealScope>
    </section>
  );
}
