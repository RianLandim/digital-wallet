import { Box, Divider, ScrollView, Select, Text, Flex } from "native-base";
import { ArrowUp, ArrowDown } from "phosphor-react-native";
import { Button } from "../../layout/components/Button";
import { Card } from "../../layout/components/Card";
import { CardSaldo } from "../../layout/components/CardSaldo";
import { Menu } from "./components/Menu";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/auth.context";
import { StackScreenNavigation } from "../../router/stack";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../services";

export type BalanceResponseProps = {
  balance: number;
  credit: number;
  debit: number;
};

export function Home() {
  const navigator = useNavigation<StackScreenNavigation>();

  const { data: userBalance, status } = useQuery({
    queryKey: ["user-balance-info"],
    queryFn: () =>
      api.get<BalanceResponseProps>("user/balance").then(({ data }) => data),
  });

  return (
    <>
      <Menu />

      <CardSaldo value={userBalance?.balance.toFixed(2) ?? "0.00"}>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          <Box>
            <ArrowUp size={30} color="#34D399" />
          </Box>
          <Box width={"45%"}>
            <Text>Receitas</Text>
            <Text>R$ {userBalance?.credit.toFixed(2)}</Text>
          </Box>

          <ArrowDown size={30} color="#F87171" />
          <Box>
            <Text>Despesas</Text>
            <Text>R$ {userBalance?.debit.toFixed(2)}</Text>
          </Box>
        </Flex>
      </CardSaldo>

      <ScrollView>
        <Card title={"Cartões"}>
          <Text>Cadastre seu cartão</Text>
          <Divider bg="gray.400" />

          <Box width="75%" marginBottom="2">
            <Button
              title={"Adicionar Cartão"}
              onPress={() => navigator.navigate("NewCartao")}
            />
          </Box>
        </Card>

        <Card title={"Metas"}>
          <Text>Adicione metas para o ano </Text>
          <Divider bg="gray.400" />
          <Box width="75%" marginBottom="2">
            <Button
              title="Visitar minhas metas"
              onPress={() => navigator.navigate("Metas")}
            />
          </Box>
        </Card>

        <Card title={"Ranking"}>
          <Text></Text>
          <Box width="75%" marginBottom="2">
            <Button title={"Acessar ranking"} onPress={() => navigator.navigate('Ranking')} />
          </Box>
        </Card>

        <Card title="Relatórios">
          <Select
            selectedValue={"Selecione um Período"}
            accessibilityLabel="Selecione um Período"
            placeholder="Selecione um Período"
            width={299}
          >
            <Select.Item
              label="Relátorio Anual"
              value="opcao-um"
              onPress={() => navigator.navigate("RelatorioAnual")}
            />
            <Select.Item
              label="Relatório Semestral"
              value="opcao-um"
              onPress={() => navigator.navigate("RelatorioSemestral")}
            />
            <Select.Item
              label="Relatório Mensal"
              value="opcao-um"
              onPress={() => navigator.navigate("RelatorioMensal")}
            />
          </Select>
          <Box width="75%" marginBottom="2">
            <Button
              title={"Gerar relatório"}
              onPress={() => navigator.navigate("RelatorioMensal")}
            />
          </Box>
        </Card>
        <Box height={10}></Box>
      </ScrollView>
    </>
  );
}
