import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack";
import AuthContextProvider from "../context/auth.context";
import Toast from "react-native-toast-message";

function Routes() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StackRoutes />
        <Toast autoHide={true} visibilityTime={5000} position="top" />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default Routes;
