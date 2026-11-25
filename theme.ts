import { createTheme } from '@mantine/core';

export const theme = createTheme({
  // Headings use Instrument Serif; body uses IBM Plex Sans (Mantine's default system stack)
  headings: {
    fontFamily: 'var(--font-instrument-serif), serif',
    fontWeight: '700',
  },
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontFamilyMonospace: 'IBM Plex Mono, monospace',
  // TradeFlow NL colour palette
  colors: {
    navy: ['#0D2340', '#17395E', '#1E4E7B', '#2A6BA3', '#4089C4', '#5AA6D8', '#80C4E6', '#A9DCEB', '#D4EEF4', '#E9F7FA'],
    orange: ['#FFF0E6', '#F9B184', '#F36C21', '#D95716', '#C04A10', '#A83E0D', '#90350B', '#782B09', '#602107', '#481705'],
    red: ['#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#EF4444', '#E11D48', '#DC2626', '#B91C1C', '#991B1B', '#7F1D1D'],
  },
  // TradeFlow NL component defaults
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        radius: 'sm',
      },
      styles: {
        root: {
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 600,
        },
      },
    },
    Text: {
      defaultProps: {
        fz: 'sm',
      },
    },
  },
  // TradeFlow NL shadows - subtle glassmorphism
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -4px rgba(0, 0, 0, 0.02)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
  },
});
