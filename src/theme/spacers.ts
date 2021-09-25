export const spacers = {
  '7xl': '256px',
  '6xl': '128px',
  '5xl': '96px',
  '4xl': '64px',
  '3xl': '48px',
  '2xl': '40px',
  xl: '32px',
  l: '24px',
  m: '16px',
  s: '14px',
  xs: '12px',
  '2xs': '10px',
  '3xs': '8px',
  '4xs': '6px',
  '5xs': '4px',
  '6xs': '2px',
  '7xs': '1px',
} as const;

export type SpacersType = typeof spacers;
export type KeySpacers = keyof typeof spacers;
