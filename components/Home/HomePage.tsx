import { RenderLater } from '@/components/Motion/RenderLater';
import { Sponsors } from '@/components/Sponsors/Sponsors';
import { site } from '@/config/site';
import { Extensions } from './Extensions';
import { Features } from './Features';
import { FinalCta } from './FinalCta';
import { Hero } from './Hero';
import { Stack } from './Stack';
import { NO_STATS, type HomeStats } from './stats';
import { Templates } from './Templates';
import classes from './Home.module.css';

/**
 * TradeFlow NL home page: which we do (the hero), what we run on (the stack), what we give
 * (the features), who supports us (sponsors), and the way in again. The same component shape as
 * the template: what differs comes from `config/site.ts`.
 *
 * A server component: only the islands that move or react are client code. The sections under
 * the stack are left out of the first render and handed back once the page has loaded
 * (`RenderLater`). It renders no `<main>` of its own, since `app/page.tsx` provides it.
 *
 * `data-site-paper` turns the document to TradeFlow NL paper: header, navbar, sidebar, footer
 * included, and its value is which paper (`site.paper`): see theme/site.css.
 */
export function HomePage({ badge, stats = NO_STATS }: { badge?: React.ReactNode; stats?: HomeStats }) {
  return (
    <div className={classes.page} data-site-paper={site.paper}>
      <div className={classes.frame}>
        <Hero badge={badge} stars={stats.stars[site.key]} />
        <Stack />
        <Features />
        <Templates stars={stats.stars} />
        <Extensions downloads={stats.downloads} />
        <Sponsors />
        <FinalCta />
      </div>
      <RenderLater />
    </div>
  );
}
