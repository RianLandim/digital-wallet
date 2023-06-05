import { Row, Text } from "native-base";
import { Money } from "phosphor-react-native";
import { currencyFormat } from "../../../../utils/functions/format";

interface totalTicketsProps {
  value: number;
}

export default function TotalTickets(props: totalTicketsProps) {
  return (
    <Row
      backgroundColor={"gray.200"}
      paddingX={15}
      paddingY={2}
      borderRadius={5}
      justifyContent="space-between"
      width={"90%"}
      marginLeft={"5"}
      marginTop={"10"}
      alignItems="center"
    >
      <Row alignItems={"center"}>
        <Money size={32} color={"#15D706"} />
        <Text marginLeft={4} fontSize="16" fontWeight="semibold">
          Total de entradas
        </Text>
      </Row>
      <Text fontSize="18" fontWeight="semibold" color="#5AE468">
        {currencyFormat(props.value)}
      </Text>
    </Row>
  );
}
