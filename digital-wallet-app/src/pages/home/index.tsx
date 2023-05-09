import { Box, Divider, Text } from "native-base";
import { Divide, UserCircle } from "phosphor-react-native";
import { Image } from "react-native";
import { Button } from "../../layout/components/Button";

// import logo from '../../../assets/logo.png';

export function Home() {
  return <>
  <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Image source={require("../../../assets/logo.png")} 
       style={{marginTop: "10%", marginLeft: 10,  width: 50, height: 50, resizeMode: "stretch" }}/>
      <Box marginRight={3} marginTop="10%">
        <UserCircle size={60} />
      </Box>

  </Box>
    <Box marginLeft="5%" background="#EDEDED" width="90%" height="20%" alignItems="center" borderRadius={20}>
      <Text marginTop="5%">Saldo</Text>
      <Text>R$ 1.000,00</Text>
      <Box marginTop="5%" display="flex" flexDirection="row" alignItems="center">
        <Box width="45%" marginLeft="25%">
          <Text>Receitas</Text>
          <Text>R$ 0,00</Text>
        </Box>
        <Box width="45%">
          <Text>Despesas</Text>
          <Text>R$ 0,00</Text>
        </Box>
      </Box>
    </Box>

    <Box marginTop="10%" marginLeft="5%" background="#EDEDED" width="90%" height="20%" alignItems="center" borderRadius={20}>
      <Text fontWeight="bold" fontSize={20}>Contas</Text>
      <Box>
        <Text>Cadastre seus cartões</Text>
        <Button title="Adicionar cartão"></Button>
        </Box>
    </Box>
  </>
}
