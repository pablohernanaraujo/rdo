import { palette } from './palette';

export const colors = {
  black: palette.black,
  white: palette.white,

  text: palette.chefsHat,
  addonText: palette.exclusivePlum,
  badgeText: palette.amethystHaze,
  checkboxIcon: palette.chaosBlack,

  primaryLight: palette.acidPops,
  primary: palette.praxetiWhite,
  primaryDark: palette.greenRevolution,
  primaryDarker: palette.coldGreen,

  infoLight: palette.guillimanBlue,
  info: palette.heroicBlue,
  infoDark: palette.luchinBlue,
  infoDarker: palette.soulstoneBlue,

  errorLight: palette.glowingBrkeDisc,
  error: palette.lust,
  errorDark: palette.hawthornBerry,
  errorDarker: palette.buchelCherry,

  purple: palette.singaporeOrchid,
  pink: palette.schiaparelliPink,
  brown: palette.orangeSquash,
  orange: palette.brightMarigold,
  yellow: palette.lager,

  backgroundSolid: palette.eerieBlack,
  backgroundDark: palette.chaosBlack,
  contextMenuBackground: palette.brightBeauty,
} as const;

export type ColorsType = typeof colors;
export type KeyColors = keyof ColorsType;
