import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Login, Welcome } from "../../pages";
import { SignUpNavigationScreens, SignUpPage } from "../../pages/signUp";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomNavigationBar } from "../../pages/bottomNavigationBar/bottomNavigationBar";
import { Metas } from "../../pages/metas";
import { EditarPerfil } from "../../pages/Settings/EditarPerfil";
import { Cartoes } from "../../pages/Settings/Cartoes";
import { NewCartao } from "../../pages/Settings/components/NewCartao";
import { Ranking } from "../../pages/ranking";
import { RelatorioMensal } from "../../pages/relatorio/RelatorioMensal";
import { RelatorioAnual } from "../../pages/relatorio/RelatorioAnual";
import { RelatorioSemestral } from "../../pages/relatorio/RelatorioSemestral";

export type StackRouteProps = {
  Login: undefined;
  SignUp: undefined;
  Welcome: undefined;
  BottomNavigationBar: undefined;
  Cartoes: undefined;
  Metas: undefined;
  NewCartao: undefined;
  EditarPerfil: undefined;
  RelatorioMensal: undefined;
  RelatorioAnual: undefined;
  RelatorioSemestral: undefined;
  Ranking: undefined;
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

      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="SignUp" component={SignUpPage} />

      <Stack.Screen
        name="BottomNavigationBar"
        component={BottomNavigationBar}
      />

      <Stack.Screen name="Cartoes" component={Cartoes} />
      <Stack.Screen name="Metas" component={Metas} />
      <Stack.Screen name="NewCartao" component={NewCartao} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="RelatorioMensal" component={RelatorioMensal} />
      <Stack.Screen name="RelatorioAnual" component={RelatorioAnual} />
      <Stack.Screen name="RelatorioSemestral" component={RelatorioSemestral} />
      <Stack.Screen name="Ranking" component={Ranking} />
    </Stack.Navigator>
  );
}
