import { Box, Column, Row, Text } from "native-base"
import { ArrowCircleDown } from "phosphor-react-native";

interface TransactionProps{
    name: string;
    value: number;
    type: string;
}

export function Transaction(props: TransactionProps) {

    let teste = false;

    return (
        <Row  justifyContent="space-between" width="90%" marginLeft="5" alignItems="center">
            <Row>
                <ArrowCircleDown size={38} color={props.type == "credit" ? "#59E367" : "#EF1111"  } />
                <Column marginLeft="3">
                    <Text fontSize="18" fontWeight="semibold">{props.name}</Text>
                    <Text color="#A7A5A5">Cetegoria</Text>
                </Column>
                
            </Row>
            <Text color={teste ? "success" : "alert" } fontSize="18" fontWeight="semibold">R$ {props.value},00</Text>
        </Row>

    );
}
