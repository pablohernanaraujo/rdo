export const fontSize = {
  '8xl': '96px',
  '7xl': '72px',
  '6xl': '60px',
  '5xl': '48px',
  '4xl': '36px',
  '3xl': '30px',
  '2xl': '24px',
  xl: '20px',
  l: '18px',
  m: '16px',
  s: '14px',
  xs: '12px',
  '2xs': '10px',
  '3xs': '8px',
};

export type FontSizeType = typeof fontSize;
export type KeyFontSize = keyof FontSizeType;

export const lineHeight = {
  '8xl': '132px',
  '7xl': '90px',
  '6xl': '76px',
  '5xl': '60px',
  '4xl': '40px',
  '3xl': '36px',
  '2xl': '32px',
  xl: '28px',
  l: '24px',
  m: '20px',
  s: '18px',
  xs: '16px',
  '2xs': '14px',
  '3xs': '12px',
};

export type LineHeightType = typeof lineHeight;
export type KeyLineHeight = keyof LineHeightType;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export type FontWeightType = typeof fontWeight;
export type KeyFontWeight = keyof FontWeightType;

export const fontFamily = {
  montserrat: "'Montserrat', sans-serif",
  poppins: "'Poppins', sans-serif",
};

export type FontFamilyType = typeof fontFamily;
export type KeyFontFamily = keyof FontFamilyType;
