
import { CardSaldo2 } from "../../layout/components/CardSaldo2";
import { Button, Divider, Flex, ScrollView, Text } from "native-base";
import { Plus,  } from "phosphor-react-native";
import React, {useState} from "react";
import { NewOrcamento } from "./NewOrcamento";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../services";
import { BalanceResponseProps } from "../home";


export function Orcamento() {

  const [modalVisible, setModalVisible] = useState(false);

  const { data: userBalance, refetch: refecthBalance } = useQuery({
    queryKey: ["user-balance-info"],
    queryFn: () =>
      api.get<BalanceResponseProps>("user/balance").then(({ data }) => data),
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always'
  });

  return (
    <>
      <CardSaldo2 value={userBalance?.balance ?? 0} children={undefined} />
      <ScrollView>
        <Flex
          marginTop="10%"
          backgroundColor="gray.200"
          width="90%"
          height="500"
          alignSelf="center"
          borderRadius={20}
          py={1.5}
        >
          <Text fontSize={20} fontWeight={"bold"} textAlign={"center"}>
            Orçamento por categoria
          </Text>

          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            
          <Text textAlign={"left"} marginLeft={38} py={5}>
            Novo orçamento
          </Text>

          <Button marginRight={38} onPress={() => setModalVisible(true)}>
            <Plus size={20} />
          </Button>
          <NewOrcamento modalVisible={modalVisible} setModalVisible={setModalVisible}/>

          </Flex>

          <Divider />
        </Flex>
      </ScrollView>
    </>
  );
}
