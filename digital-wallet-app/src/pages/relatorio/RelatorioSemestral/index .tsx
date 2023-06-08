import { Text, Box, Flex, ScrollView } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import { Button } from "../../../layout/components/Button";
import { TotalExpenses } from "../components/totalExpenses";
import TotalTickets from "../components/totalTickets";
import ItemList from "../components/itemList";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function RelatorioSemestral() {
  const navigator = useNavigation();

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
          Relátorio Semestral
        </Text>
      </Flex>

      <ScrollView>
        <Text
          marginTop="6"
          fontSize={22}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          2023.1
        </Text>

        <TotalTickets value={80} />

        <TotalExpenses value={20} />

        <Box>
          <Text
            marginTop="16"
            fontSize={20}
            fontWeight="semibold"
            textAlign={"center"}
            marginBottom="10"
          >
            Gastos por categoria
          </Text>

          <ItemList position={1} value={1000} title={"Eletronica"} />
          <ItemList position={2} value={500} title={"Alimentação"} />
          <ItemList position={3} value={200} title={"Despesa Fixas"} />
          <ItemList position={4} value={500} title={"Lazer"} />
        </Box>

        <Box>
          <Text
            marginTop="16"
            fontSize={20}
            fontWeight="semibold"
            textAlign={"center"}
            marginBottom="10"
          >
            Gastos por meses
          </Text>

          <ItemList position={1} value={50} title={"Fevereiro"} />
          <ItemList position={2} value={50} title={"Março"} />
          <ItemList position={3} value={50} title={"Janeiro"} />
        </Box>

        <Box
          width="100%"
          marginBottom="20"
          marginTop="10%"
          alignItems={"center"}
        >
          <Button
            title={"Exportar relatorio"}
            width={"70%"}
            marginTop={50}
            textAlign={"center"}
          />
        </Box>
      </ScrollView>
    </>
  );
}
