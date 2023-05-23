import { Box, Divider, Flex, Text } from "native-base";
import { CaretLeft, CreditCard } from "phosphor-react-native";

export function Cartao() {

  return (
    <>
      <Flex
        background={"green.400"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        marginTop={7}
        width={"100%"}
        height={54}
      >
        <Box marginTop={3}>
          <CaretLeft size={30} />
        </Box>
        <Text
          marginTop={3}
          fontSize={16}
          fontWeight={"bold"}
          marginRight={"40%"}
        >
          Cartões
        </Text>
      </Flex>

      <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={20}
        marginTop={5}
      >
        Cartões cadastrados
      </Text>

      <Divider marginTop={5} />
      <Flex marginLeft={3} flexDirection={"row"} justifyContent={"space-between"} >
        <CreditCard size={70} />
        <Text marginTop={5} marginRight={"50%"}>Nubank</Text>
        <Text marginTop={5} marginRight={3}>1234</Text>
      </Flex>
      <Divider />
    </>
  );
}
