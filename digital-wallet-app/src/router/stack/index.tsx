import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../pages/login";
import { Welcome } from "../../pages/signUp/welcome";
import { PersonalData } from "../../pages/signUp/personalData";
import { EmailPassword } from "../../pages/signUp/emailPassword";
import { Home } from "../../pages/home";

type StackRouteProps = {
  Login: undefined;
  PersonalData: undefined;
  Home: undefined;
};

export function StackRoutes() {
  const Stack = createNativeStackNavigator<StackRouteProps>();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PersonalData"
        component={PersonalData}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EmailPassword"
        component={EmailPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
