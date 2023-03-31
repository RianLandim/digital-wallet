import { extendTheme } from 'native-base'

export const theme = extendTheme({
  fontConfig: {},
  colors: {
    primary: {
      '100': '#15D706'
    },
    secondary: {}
  },
})

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
