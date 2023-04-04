import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmailPassword, Home, Login, PersonalData, Welcome } from "../../pages";
import { MonthlyEarning } from "../../pages/signUp/monthlyEarning";
import { DayPayment } from "../../pages/signUp/dayPayment";

type StackRouteProps = {
  Login: undefined;
  PersonalData: undefined;
  Welcome: undefined;
  EmailPassword: undefined;
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

      <Stack.Screen name="PersonalData" component={PersonalData} />

      <Stack.Screen name="EmailPassword" component={EmailPassword} />

      <Stack.Screen name="MonthlyEarning" component={MonthlyEarning} />

      <Stack.Screen name="DayPayment" component={DayPayment} />
    </Stack.Navigator>
  );
}
