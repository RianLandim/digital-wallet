import { Text, Box, Row, Divider } from "native-base";
import { ArrowCircleDown, Money } from "phosphor-react-native";
import { Button } from "../../layout/components/Button";
import { TotalExpenses } from "./components/totalExpenses";
import TotalTickets from "./components/totalTickets";
import ItemList from "./components/itemList";

export function Relatorio() {
  return (
    <>
      <Box
        background={"green.400"}
        width={"100%"}
        height={"10%"}
        alignItems={"center"}
      >
        <Text marginTop={"10%"} fontSize={22} fontWeight={"bold"}>
          Relatório Mensal
        </Text>
      </Box>

      <Text
        marginTop={"10%"}
        fontSize={20}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Maio 2023
      </Text>

      <TotalTickets value={80} />

      <TotalExpenses />

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

        <ItemList position={1} value={50} title={"Eletronica"} />

        <Box width="100%" alignItems={"center"}>
          <Button
            title={"Exportar relatorio"}
            width={"70%"}
            marginTop={50}
            textAlign={"center"}
          />
        </Box>
      </Box>
    </>
  );
}
