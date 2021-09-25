export const strokeWidth = {
  '4xl': 4,
  '3xl': 3.5,
  '2xl': 3,
  xl: 2.5,
  l: 2,
  m: 1.5,
  s: 1,
  xs: 0.5,
};

export type StrokeWidthType = typeof strokeWidth;
export type KeyStrokeWidth = keyof StrokeWidthType;

export const size = {
  '3xl': 64,
  '2xl': 48,
  xl: 36,
  l: 32,
  m: 24,
  s: 20,
  xs: 18,
  '2xs': 16,
  '3xs': 12,
  '4xs': 8,
  '5xs': 6,
  '6xs': 4,
};

export type SizeType = typeof size;
export type KeySize = keyof SizeType;
