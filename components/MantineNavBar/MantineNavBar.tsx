'use client';

import { Navbar } from 'nextra-theme-docs';
import { Group, Text } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { HeaderControl } from '../ColorSchemeControl/HeaderControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * TradeFlow NL navbar: navy background, light text, Dutch Orange accents.
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={4}>
            <Logo />
            <Text size="xl" fw={700} ff="heading" visibleFrom="xl" c="navy.9">
              TradeFlow{' '}
              <Text span inherit c="orange.6">
                NL
              </Text>
            </Text>
          </Group>
        }
        chatLink="https://github.com/Jeroendg1989/tradeflow-nl-docs"
        chatIcon={<IconMoon width="24" aria-label="TradeFlow GitHub" />}
        projectLink="https://github.com/Jeroendg1989/tradeflow-nl-docs"
      >
        <Group gap="sm" wrap="nowrap">
          <ColorSchemeControl />
        </Group>
      </Navbar>
    </>
  );
};
