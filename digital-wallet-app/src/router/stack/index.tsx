import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Home, Login, Welcome } from "../../pages";
import { SignUpNavigationScreens, SignUpPage } from "../../pages/signUp";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomNavigationBar } from "../../pages/bottomNavigationBar/bottomNavigationBar";
import { Metas } from "../../pages/metas";
import { NewCartao } from "../../pages/configuracao/components/NewCartao";
import { Cartoes } from "../../pages/configuracao/cartoes";

export type StackRouteProps = {
  Login: undefined;
  SignUp: undefined;
  Welcome: undefined;
  Home: undefined;
  BottomNavigationBar: undefined;
  Cartoes: undefined;
  Metas: undefined;
  NewCartao: undefined;
};

export type StackScreenNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<StackRouteProps, "SignUp">,
  NativeStackNavigationProp<SignUpNavigationScreens>
>;

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

      <Stack.Screen
        name="BottomNavigationBar"
        component={BottomNavigationBar}
      />

      <Stack.Screen name="Cartoes" component={Cartoes} />
      <Stack.Screen name="Metas" component={Metas} />
      <Stack.Screen name="NewCartao" component={NewCartao}/>
    </Stack.Navigator>
  );
}
