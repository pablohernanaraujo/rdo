import { FC } from 'react';

import ThemeProvider from '@theme/context';

export const App = () => (
  <ThemeProvider>
    <header>
      <p>React development optimization</p>
    </header>
  </ThemeProvider>
);
