import { Box, Divider, Flex, Text, Button, IconButton } from "native-base";
import { CaretLeft, CreditCard, Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Cartao } from "../components/Cartao";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../services";
import type { CreditCard as CreditCardProps } from "../../../utils/interfaces";

export function Cartoes() {
  const navigator = useNavigation();

  const { data: creditCards } = useQuery({
    queryKey: ["find-credit-cards"],
    queryFn: () =>
      api.get<CreditCardProps[]>("credit-card").then(({ data }) => data),
  });

  return (
    <>
      <Flex
        background={"green.400"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"10%"}
      >
        <Button marginTop={"10%"} onPress={() => navigator.goBack()}>
          <CaretLeft size={30} />
        </Button>
        <Text
          marginTop={"10%"}
          fontSize={16}
          fontWeight={"bold"}
          marginRight={"40%"}
        >
          Cartões cadastrados
        </Text>
      </Flex>

      {creditCards?.map((creditCard) => (
        <Cartao
          key={creditCard.id}
          bank={creditCard.bank}
          digits={creditCard.digits}
        />
      ))}

      <Box position="absolute" bottom="4" right="5">
        <IconButton
          icon={<Plus size={30} color="#fff" />}
          backgroundColor="green.400"
          borderRadius="30"
          width="62"
          height="16"
          onPress={() => navigator.navigate("NewCartao" as never)}
        />
      </Box>
    </>
  );
}