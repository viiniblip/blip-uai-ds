import React from 'react';
import { BdsThemeProvider } from 'blip-ds-react';

type Theme = 'light' | 'dark' | 'high-contrast';

export function UaiKitProvider({
  theme = 'light',
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}) {
  return <BdsThemeProvider theme={theme}>{children}</BdsThemeProvider>;
}
