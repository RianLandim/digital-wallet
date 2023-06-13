import { Text, Box, Flex, ScrollView } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import { Button } from "../../../layout/components/Button";
import { TotalExpenses } from "../components/totalExpenses";
import TotalTickets from "../components/totalTickets";
import ItemList from "../components/itemList";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { dateMonthFormat } from "../../../utils/functions/format";
import { useQuery } from "@tanstack/react-query";
import { BalanceResponseProps } from "../../home";
import { api } from "../../../services";
import { LaunchPropsChart } from "../../../utils/interfaces/launch";

export function RelatorioMensal() {
  const navigator = useNavigation();

  const { data: userBalance } = useQuery({
    queryKey: ["user-balance-info"],
    queryFn: () =>
      api.get<BalanceResponseProps>("user/balance").then(({ data }) => data),
  });

  const {
    data: userLaunchs,
  } = useQuery({
    queryKey: ["user-launch"],
    queryFn: () => api.get<LaunchPropsChart[]>("launch/false").then(({ data }) => data),
  });


  return (
    <>
      <Flex
        background={"green.400"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"10%"}
      >
        <TouchableOpacity
          style={{ marginTop: "10%", marginLeft: 10 }}
          onPress={() => navigator.goBack()}
        >
          <CaretLeft size={30} />
        </TouchableOpacity>
        <Text
          marginTop={"10%"}
          fontSize={20}
          fontWeight={"bold"}
          marginRight={"30%"}
        >
          Relatório Mensal
        </Text>
      </Flex>

      <ScrollView>
        <Text
          marginTop={"10%"}
          fontSize={20}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          {dateMonthFormat(new Date())}
        </Text>

        <TotalTickets value={userBalance?.credit ?? 0} />

        <TotalExpenses value={userBalance?.debit ?? 0} />

        <Box>
          <Text
            marginTop={"10%"}
            fontSize={18}
            fontWeight={"500"}
            textAlign={"center"}
            marginBottom="10"
          >
            Gastos por categoria
          </Text>
            {userLaunchs?.map((item, index) => <ItemList position={index + 1} value={item.data} title={item.title} />)}
        </Box>

        <Box width="100%" alignItems={"center"}>
          <Button
            title={"Exportar relatório"}
            width={"70%"}
            marginTop={50}
            textAlign={"center"}
          />
        </Box>
      </ScrollView>
    </>
  );
}
