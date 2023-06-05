import { Divider, Flex, Text } from "native-base";
import { CreditCard } from "phosphor-react-native";

interface CardProps {
  bank: string;
  digits: number;
}

export function Cartao({ bank, digits }: CardProps) {
  return (
    <>
      <Divider marginTop={5} />
      <Flex
        marginLeft={3}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <CreditCard size={70} />
        <Text marginTop={5} marginRight={"50%"}>
          {bank}
        </Text>
        <Text marginTop={5} marginRight={3}>
          {digits}
        </Text>
      </Flex>
      <Divider />
    </>
  );
}
