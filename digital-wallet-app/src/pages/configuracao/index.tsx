import { Box, Text } from "native-base";
import { ButtonConfig } from "../../layout/components/ButtonConfig";
import { useNavigation } from "@react-navigation/native";


export function Config(): JSX.Element{
  const navigator = useNavigation();
  return <>
    <Box background={"green.400"}  width={"100%"} height={"10%"} alignItems={"center"}>
      <Text marginTop={"10%"} fontSize={16} fontWeight={"bold"}>Configurações</Text>
    </Box>

    <ButtonConfig title={"Cartões"} onPress={() =>  navigator.navigate("Cartao" as never)}/>
    <ButtonConfig title={"EditarPerfil"} onPress={() => navigator.navigate("EditarPerfil" as never)}/>
    <ButtonConfig title={"Cartões"} onPress={() =>  navigator.navigate("Cartoes" as never)}/>
    <ButtonConfig title={"Editar Perfil"}/>

  </>
}