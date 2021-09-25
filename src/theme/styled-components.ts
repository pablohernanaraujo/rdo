/* eslint-disable @typescript-eslint/unbound-method */
import * as styledComponents from 'styled-components';

import { MinWidthType, PaddingType } from './button';
import { ColorsType } from './colors';
import { EmphasisType } from './emphasis';
import { StrokeWidthType, SizeType } from './icon';
import { SpacersType } from './spacers';
import {
  FontSizeType,
  FontWeightType,
  LineHeightType,
  FontFamilyType,
} from './text';

const {
  default: styled,
  ThemeProvider,
  css,
  createGlobalStyle,
  ThemeContext,
  ServerStyleSheet,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<{
  colors: ColorsType;
  emphasis: EmphasisType;
  spacers: SpacersType;
  text: {
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
    lineHeight: LineHeightType;
    fontFamily: FontFamilyType;
  };
  icon: {
    strokeWidth: StrokeWidthType;
    size: SizeType;
  };
  button: {
    minWidth: MinWidthType;
    padding: PaddingType;
  };
}>;

export {
  ServerStyleSheet,
  ThemeProvider,
  css,
  createGlobalStyle,
  ThemeContext,
};

export default styled;
