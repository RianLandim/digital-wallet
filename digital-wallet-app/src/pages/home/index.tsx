import { Box, Divider, ScrollView, Select, Text, Flex } from "native-base";
import { UserCircle, ArrowUp, ArrowDown } from "phosphor-react-native";
import { Image } from "react-native";
import { Button } from "../../layout/components/Button";
import { Card } from "../../layout/components/Card";
import { CardSaldo } from "../../layout/components/CardSaldo";

// import logo from '../../../assets/logo.png';

export function Home() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Image
          source={require("../../../assets/logo.png")}
          style={{
            marginTop: "10%",
            marginLeft: 10,
            width: 50,
            height: 50,
            resizeMode: "stretch",
          }}
        />
        <Box marginRight={3} marginTop="10%">
          <UserCircle size={60} />
        </Box>
      </Box>

      <CardSaldo title={"Saldo"} value={"1.000,00"}>
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

      <ScrollView h="80">
        <Card title={"Contas"}>
          <Text>Cadastre seu cartão</Text>
          <Divider bg="gray.400" />

          <Button title={"Adicionar Cartão"} />
        </Card>

        <Card title={"Metas"}>
          <Text>Adicione metas para o ano </Text>
          <Divider bg="gray.400" />
          <Button title={"Visitar minhas metas"} />
        </Card>

        <Card title={"Ranking"}>
          <Text></Text>
          <Button title={"Acessar ranking"} />
        </Card>

        <Card title={"Relatórios"}>
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
          <Button title={"Gerar relatorio"} />
        </Card>
      </ScrollView>
    </>
  );
}
