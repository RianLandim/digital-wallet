import { Row, Text } from "native-base";
import { ArrowCircleDown } from "phosphor-react-native";


interface TotalExpensesProps{
  value: number;
}


export function TotalExpenses(props: TotalExpensesProps){
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
          <ArrowCircleDown size={38} color={"#EF1111"} />
          <Text marginLeft={2} fontSize="16" fontWeight="semibold">
            Total de despesas
          </Text>
        </Row>
        <Text fontSize="18" fontWeight="semibold" color="#EF1111">
          R$ {props.value},00
        </Text>
      </Row>
    );
}
