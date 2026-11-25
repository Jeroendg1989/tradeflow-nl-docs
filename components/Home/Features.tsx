import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { RENDER_LATER, revealItem } from '@/components/Motion/reveal-props';
import { RevealScope } from '@/components/Motion/RevealScope';
import { useComputedColorScheme } from '@mantine/core';
import { Icon, IconMoon, IconSun } from '@tabler/icons-react';
import { site } from '@/config/site';
import { features } from './feature-list';
import classes from './Features.module.css';
import home from './Home.module.css';
import { SectionHeader } from './SectionHeader';
import { Sketch } from './Sketch';

/**
 * What TradeFlow NL gives: five feature cards and a sixth every sibling shares, the colour
 * scheme, with the buttons that switch it live. Each card carries a line drawing in its corner,
 * and the group a registration mark at each of its own.
 */
export function Features() {
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <section className={home.section} aria-labelledby="features-title" {...RENDER_LATER}>
      <RevealScope className={home.center}>
        <SectionHeader
          eyebrow="What you get"
          id="features-title"
          title={
            <>
              TradeFlow NL <span className={home.gradient}>docs, wired</span>
            </>
          }
        >
          Contract management, invoice drafting, and installment tracking are in place. You write
          the pages.
        </SectionHeader>
      </RevealScope>
      <RevealScope as="ul" className={`${home.marks} ${classes.cells}`}>
        {features[site.key].map(({ icon: Icon, art, title, body }, i) => (
          <li key={title} {...revealItem('rise', 70 * i)}>
            <div className={classes.cell}>
              <Sketch name={art} className={classes.art} />
              <span className={classes.icon}>
                <Icon size={22} stroke={1.6} aria-hidden="true" />
              </span>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.body}>{body}</p>
            </div>
          </li>
        ))}
        <li {...revealItem('rise', 350)}>
          <div className={classes.cell}>
            <Sketch name="sun" className={classes.art} />
            <span className={classes.icon}>
              {computedColorScheme === 'dark' ? (
                <IconMoon size={22} stroke={1.6} aria-hidden="true" />
              ) : (
                <IconSun size={22} stroke={1.6} aria-hidden="true" />
              )}
            </span>
            <h3 className={classes.title}>Light and dark, both designed</h3>
            <p className={classes.body}>
              TradeFlow NL&apos;s colour scheme, light by default and remembered per visitor. Try it
              here:
            </p>
            <ColorSchemeToggle />
          </div>
        </li>
      </RevealScope>
    </section>
  );
}
