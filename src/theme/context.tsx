import { FC } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import { colors } from './colors';
import { emphasis } from './emphasis';
import { strokeWidth, size } from './icon';
import { spacers } from './spacers';
import { fontSize, fontWeight } from './text';

const ThemeProvider: FC = ({
  /** Internal content componets */
  children,
}) => (
  <Provider
    theme={{
      colors,
      spacers,
      emphasis,
      text: {
        fontSize,
        fontWeight,
      },
      icon: {
        strokeWidth,
        size: size,
      },
    }}
  >
    {children}
  </Provider>
);

export default ThemeProvider;
