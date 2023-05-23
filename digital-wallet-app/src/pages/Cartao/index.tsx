import { Box, Divider, Flex, Text, Button, IconButton } from "native-base";
import { CaretLeft, CreditCard, Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";


export function Cartao() {
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
        <Box marginTop={"10%"}>
          <CaretLeft size={30} />
        </Box>
        <Text
          marginTop={"10%"}
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

      <Box position="absolute" bottom="4" right="5">
        <IconButton
          icon={<Plus size={30} color="#fff" />}
          backgroundColor="green.400"
          borderRadius="30"
          width="62"
          height="16"
          onPress={() =>  navigator.navigate("NewCartao" as never)}
        />
      </Box>
    </>
  );
}
