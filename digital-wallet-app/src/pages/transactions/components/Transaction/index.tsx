import { Box, Column, Row, Text } from "native-base";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react-native";
import {
  currencyFormat,
  dateFullFormat,
} from "../../../../utils/functions/format";
import { LaunchTypeEnum } from "../../../../utils/interfaces/launch";

interface TransactionProps {
  name: string;
  value: number;
  type: string;
  transactionAt: Date;
}

export function Transaction(props: TransactionProps) {

  return (
    <Row
      justifyContent="space-between"
      width="90%"
      marginLeft="5"
      alignItems="center"
    >
      <Row>
        {props.type == LaunchTypeEnum.CREDIT ? (
          <ArrowCircleUp size={38} color={"#59E367"} />
        ) : (
          <ArrowCircleDown size={38} color={"#EF1111"} />
        )}

        <Column marginLeft="3">
          <Text fontSize="18" fontWeight="semibold">
            {props.name}
          </Text>
          <Text color="#A7A5A5">
            {dateFullFormat(new Date(props.transactionAt))}
          </Text>
        </Column>
      </Row>
      <Text
        color={"success"}
        fontSize="18"
        fontWeight="semibold"
      >
        {currencyFormat(props.value)}
      </Text>
    </Row>
  );
}
