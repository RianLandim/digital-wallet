import { Column, Divider, Row, Text } from "native-base";

interface Props {
  position: number;
  value: number;
  title: String;
}

export default function ItemList(props: Props) {
  return (
    <Column alignItems="center">
      <Row justifyContent={"space-between"} width="90%">
        <Text marginTop={"3"}>{props.position + "º " + props.title}</Text>
        <Text fontSize="18" fontWeight="semibold" color="#EF1111" marginTop={2}>
          R$ {props.value},00
        </Text>
      </Row>
      <Divider bgColor={"#B3B3B3"} width={"90%"} marginTop={"3"} />
    </Column>
  );
}
