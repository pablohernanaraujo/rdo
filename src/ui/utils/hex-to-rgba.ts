import { EmphasisType } from '@theme/emphasis';
import { palette } from '@theme/palette';

type Color = typeof palette[keyof typeof palette];

type HexColors = NonNullable<Color extends `#${infer C}` ? `#${C}` : null>;

export const hexToRgba = (
  hex: HexColors,
  opacity: EmphasisType[keyof EmphasisType],
): string => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex,
  ) as string[];

  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(
    b,
    16,
  )}, ${opacity})`;
};
