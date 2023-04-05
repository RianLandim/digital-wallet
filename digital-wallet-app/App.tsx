import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SplashScreen from 'expo-splash-screen'
import Routes from "./src/router";
import { theme } from "./src/layout/theme";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { View } from "react-native";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const queryClient = new QueryClient();

    // const [fontsLoaded] = useFonts({
    //   'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    // });
  
    // const onLayoutRootView = useCallback(async () => {
    //   if (fontsLoaded) {
    //     await SplashScreen.hideAsync();
    //   }
    // }, [fontsLoaded]);
  
    // if (!fontsLoaded) {
    //   return
    // }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
          <Routes />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
