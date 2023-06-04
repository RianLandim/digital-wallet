import { Box, Text } from "native-base";
import { ButtonConfig } from "../../layout/components/ButtonConfig";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";



export function Settings(): JSX.Element{
  const navigator = useNavigation();
  return <>
    <Box background={"green.400"}  width={"100%"} height={"10%"} alignItems={"center"}>
      <Text marginTop={"10%"} fontSize={16} fontWeight={"bold"}>Configurações</Text>
    </Box>

    <ButtonConfig title={"Cartões"} _icon={<MaterialIcons name="credit-card" size={26} />}  onPress={() =>  navigator.navigate("Cartoes" as never)}/>
    <ButtonConfig _icon={<MaterialIcons name="person" size={26} />} title={"EditarPerfil"} onPress={() => navigator.navigate("EditarPerfil" as never)}/>
    <ButtonConfig _icon={<MaterialIcons name="logout" size={26} />} title={"Sair"} />

  </>
}
