import {  NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./src/router";
import { theme } from "./src/layout/theme";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <Routes />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
