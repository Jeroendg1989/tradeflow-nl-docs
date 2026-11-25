import { useMantineTheme } from '@mantine/core';

export function Logo() {
  const theme = useMantineTheme();

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill={theme.colors.navy[6]} />
      <path
        d="M12 8h8v4h-8zM12 14h8v4h-8zM12 20h8v4h-8zM12 26h8v4h-8zM12 32h8v4h-8z"
        fill="#F36C21"
      />
      <path d="M30 8h4v4h-4zM30 14h4v4h-4zM30 20h4v4h-4zM30 26h4v4h-4zM30 32h4v4h-4z" fill="#A9DCEB" />
    </svg>
  );
}
