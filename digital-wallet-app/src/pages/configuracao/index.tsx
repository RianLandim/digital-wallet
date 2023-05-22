import { Box, Text } from "native-base";
import { ButtonConfig } from "../../layout/components/ButtonConfig";
import { Cartao } from "../Cartao";
import { useNavigation } from "@react-navigation/native";


export function Config(){
  const navigator = useNavigation();
  return <>
    <Box background={"green.400"} marginTop={7} width={"100%"} height={54} alignItems={"center"}>
      <Text marginTop={3} fontSize={16} fontWeight={"bold"}>Configurações</Text>
    </Box>

    <ButtonConfig title={"Cartões"} onPress={() =>  navigator.navigate("Cartao" as never)}/>
    <ButtonConfig title={"Editar Perfil"}/>

  </>
}