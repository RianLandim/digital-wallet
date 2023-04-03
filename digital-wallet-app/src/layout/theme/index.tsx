import { extendTheme } from 'native-base'

export const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    sm: 14,
    md: 16,
    lg: 24
  },
  fontConfig: {
    Inter: {
      400:'Inter_400Regular',
      600:'Inter_600SemiBold',
      700:'Inter_700Bold',
      900:'Inter_900Black'
    }
  },
  colors: {
    primary: '#15D706',
    secondary: '#1A78E5',
    text: '#FFFFFF',
    success: '#34D399',
    alert: '#F87171',
    caption: {
      500: '#71717A',
      400: '#A1A1AA',
      300: '#D4D4D8'
    },
    shape: '#2A2634',
    background: {
      900: '#121214',
      800: '#18181B'
    }
  },
})

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
