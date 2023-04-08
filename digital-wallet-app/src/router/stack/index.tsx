import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  Home, Login, Welcome } from "../../pages";
import { SignUpPage } from "../../pages/signUp";

export type StackRouteProps = {
  Login: undefined;
  SignUp: undefined;
  Welcome: undefined;
  Home: undefined;
};

export function StackRoutes() {
  const Stack = createNativeStackNavigator<StackRouteProps>();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="SignUp" component={SignUpPage} />

    </Stack.Navigator>
  );
}
