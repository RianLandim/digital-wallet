import { Box, Divider, ScrollView, Select, Text, Flex } from "native-base";
import { ArrowUp, ArrowDown } from "phosphor-react-native";
import { Button } from "../../layout/components/Button";
import { Card } from "../../layout/components/Card";
import { CardSaldo } from "../../layout/components/CardSaldo";
import { Menu } from "../../layout/components/Menu";
import { useNavigation } from "@react-navigation/native";


export function Home() {
  const navigator = useNavigation();
  return (
    <>
     <Menu/>

      <CardSaldo value={"1.000,00"}>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          <Box>
            <ArrowUp size={30} color="#34D399" />
          </Box>
          <Box width={"45%"}>
            <Text>Receitas</Text>
            <Text>R$ 0,00</Text>
          </Box>

          <ArrowDown size={30} color="#F87171" />
          <Box>
            <Text>Despesas</Text>
            <Text>R$ 0,00</Text>
          </Box>
        </Flex>
      </CardSaldo>

      <ScrollView>
        <Card title={"Contas"}>
          <Text>Cadastre seu cartão</Text>
          <Divider bg="gray.400" />

          <Box width="75%"  marginBottom="2">
            <Button title={"Adicionar Cartão"} onPress={() => navigator.navigate("NewCartao" as never)} />
          </Box>
        </Card>

        <Card title={"Metas"}>
          <Text>Adicione metas para o ano </Text>
          <Divider bg="gray.400" />
          <Box width="75%" marginBottom="2">
            <Button title="Visitar minhas metas"  onPress={() => navigator.navigate("Metas" as never)} />
          </Box>
        </Card>

        <Card title={"Ranking"}>
          <Text></Text>
          <Box width="75%" marginBottom="2">
            <Button title={"Acessar ranking"} onPress={() => navigator.navigate("Ranking" as never)}/>
          </Box>
        </Card>

        <Card title="Relatórios">
          <Select
            selectedValue={"Selecione um Período"}
            accessibilityLabel="Selecione um Período"
            placeholder="Selecione um Período"
            width={299}
          >
            <Select.Item label="Opção 1" value="opcao-um" />
            <Select.Item label="Opção 2" value="opcao-um" />
            <Select.Item label="Opção 3" value="opcao-um" />
          </Select>
          <Box width="75%" marginBottom="2">
            <Button title={"Gerar relatorio"} onPress={()=> navigator.navigate("Relatorio" as never)}/>
          </Box>
        </Card>
      </ScrollView>
    </>
  );
}
