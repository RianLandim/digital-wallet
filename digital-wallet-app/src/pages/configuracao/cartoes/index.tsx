import { Box, Divider, Flex, Text, Button, IconButton } from "native-base";
import { CaretLeft, CreditCard, Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Cartao } from "../components/Cartao";


export function Cartoes() {
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

      <Cartao />

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
