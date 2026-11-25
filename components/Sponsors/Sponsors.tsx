'use client';

import { IconHeartFilled, IconPlus } from '@tabler/icons-react';
import { ActionIcon, Anchor, Avatar, Button, Group, Stack, Text } from '@mantine/core';
import { RENDER_LATER, revealItem } from '@/components/Motion/reveal-props';
import { RevealScope } from '@/components/Motion/RevealScope';
import { site } from '@/config/site';
import home from '../Home/Home.module.css';
import { sponsors } from '../MantineFooter/links';
import classes from './Sponsors.module.css';
import { SectionHeader } from '@/components/Home/SectionHeader';

// Social share — "spread the word" buttons rendered below the sponsor CTAs.
// Share-intent links (no SDK); brand marks are inline SVGs (fill=currentColor).
const shareUrl = site.demo;
const shareText = `Check out the ${site.name}`;
const encodedUrl = encodeURIComponent(shareUrl);
const encodedText = encodeURIComponent(shareText);
const encodedTextWithUrl = encodeURIComponent(`${shareText} ${shareUrl}`);

const shareSvgProps = { width: 18, height: 18, fill: 'currentColor', 'aria-hidden': true } as const;

const shareLinks = [
  {
    key: 'x',
    label: 'Share on X',
    href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    icon: (
      <svg viewBox="0 0 24 24" {...shareSvgProps}>
        <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'Share on LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    icon: (
      <svg viewBox="0 0 16 16" {...shareSvgProps}>
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    ),
  },
];

/**
 * TradeFlow NL sponsors wall — title, pitch, sponsor avatars and the "Become a sponsor" CTA.
 * A section of the home page; the navbar Sponsor button scrolls/navigates to the `#sponsors`
 * anchor. A client component, so the share icons' paths are not sent twice (markup and RSC
 * payload) in the home page's document.
 */
export const Sponsors = () => {
  return (
    <RevealScope
      as="section"
      id="sponsors"
      className={`${home.section} ${classes.sponsorsSection}`}
      aria-labelledby="sponsors-title"
      {...RENDER_LATER}
    >
      <Stack gap="md" align="center">
        <div className={home.center}>
          <SectionHeader eyebrow="Open source, sponsored" id="sponsors-title" title={<>Sponsors</>}>
            If my open-source work saves you or your team time, consider sponsoring its development.
            Sponsors get their name or logo featured here and across all my projects&apos;
            documentation sites.
          </SectionHeader>
        </div>
        <Group justify="center" gap="xl" mt="md" {...revealItem('rise', 180)}>
          {sponsors.map((sponsor) => (
            <Anchor
              key={sponsor.key}
              href={sponsor.href ?? `https://github.com/${sponsor.github}`}
              target="_blank"
              rel="noopener noreferrer"
              underline="never"
            >
              <Stack gap={4} align="center">
                <Avatar
                  // 96px for a 56px avatar at 2x: the default is the full 460px image (45 KB vs 3 KB)
                  src={`https://github.com/${sponsor.github}.png?size=96`}
                  alt=""
                  size="lg"
                  radius="xl"
                />
                <Text fz={12} c="dimmed">
                  {sponsor.name}
                </Text>
              </Stack>
            </Anchor>
          ))}
          <Anchor
            href="https://github.com/sponsors/Jeroendg1989"
            target="_blank"
            rel="noopener noreferrer"
            underline="never"
          >
            <Stack gap={4} align="center">
              <Avatar size="lg" radius="xl" className={classes.sponsorSlot}>
                <IconPlus size={20} aria-hidden="true" />
              </Avatar>
              <Text fz={12} c="dimmed">
                Your logo here
              </Text>
            </Stack>
          </Anchor>
        </Group>
        <Group gap="sm" justify="center" {...revealItem('rise', 240)}>
          <Button
            component="a"
            href="https://github.com/sponsors/Jeroendg1989"
            target="_blank"
            rel="noopener noreferrer"
            // TradeFlow NL Signal Red: white on red is 4.5:1+
            color="red.8"
            radius="md"
            className={home.button}
            leftSection={<IconHeartFilled size={16} aria-hidden="true" />}
          >
            Become a sponsor
          </Button>
          <Button
            component="a"
            href="https://donate.stripe.com/fZu4gy4Tn3b1dgudGx0co00"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            radius="md"
            className={`${home.button} ${home.secondary}`}
            leftSection={
              <IconPlus size={16} color="#D95716" aria-hidden="true" />
            }
          >
            Buy me a coffee
          </Button>
        </Group>

        <Stack gap={8} align="center" mt="xs">
          <Text fz={11} fw={600} c="dimmed" tt="uppercase" lts={0.5}>
            Share this template
          </Text>
          <Group gap="xs" justify="center">
            {shareLinks.map((item) => (
              <ActionIcon
                key={item.key}
                component="a"
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                variant="subtle"
                color="gray"
                size="lg"
                radius="xl"
                aria-label={item.label}
              >
                {item.icon}
              </ActionIcon>
            ))}
          </Group>
        </Stack>
      </Stack>
    </RevealScope>
  );
};
