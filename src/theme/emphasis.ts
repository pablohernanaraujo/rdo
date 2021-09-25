export type EmphasisType = typeof emphasis;

export type KeyEmphasis = keyof EmphasisType;

export const emphasis = {
  pure: 1,
  high: 0.87,
  medium: 0.6,
  low: 0.38,
  contrast5: 0.2,
  contrast4: 0.15,
  contrast3: 0.1,
  contrast2: 0.05,
  contrast1: 0.03,
  contrast0: 0,
} as const;
