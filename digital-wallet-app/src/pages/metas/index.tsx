import { CardSaldo2 } from "../../layout/components/CardSaldo2";
import { Menu } from "../home/components/Menu";
import { Flex, Text, Button, Divider, Box } from "native-base";
import { Plus, Trash, Bank } from "phosphor-react-native";
import { NewMeta } from "./components/NewMetas";
import React, { useState } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { api } from "../../services";
import type { GoalProps } from "../../utils/interfaces";
import { BalanceResponseProps } from "../home";

export function Metas() {
  const [modalVisible, setModalVisible] = useState(false);

  const { data: goals, refetch } = useQuery({
    queryKey: ["find-goals"],
    queryFn: () => api.get<GoalProps[]>("goal").then(({ data }) => data),
  });

  const { data: userBalance } = useQuery({
    queryKey: ["user-balance-info", 1],
    queryFn: () =>
      api.get<BalanceResponseProps>("user/balance").then(({ data }) => data),
  });

  return (
    <>
      <Menu />
      <CardSaldo2
        value={userBalance?.balance.toFixed(2) ?? ""}
        children={undefined}
      />
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
          Metas
        </Text>

        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          <Text textAlign={"left"} marginLeft={38} py={5}>
            Nova Meta
          </Text>

          <Button marginRight={38} onPress={() => setModalVisible(true)}>
            <Plus size={20} />
          </Button>
          <NewMeta
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            refetch={refetch}
          />
        </Flex>
        <Divider />

        {goals?.map((goal) => (
          <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            marginTop={"5%"}
            marginBottom={"5%"}
          >
            <Text marginLeft={38}>{goal.title}</Text>
            <Flex>
              <Text color={"green.500"}>{goal.value}</Text>
              <Text color={"red.500"}>{goal.value}</Text>
            </Flex>

            <Box marginLeft={12}>
              <Bank size={28} />
            </Box>

            <Box marginRight={38}>
              <Trash size={25} color="red" />
            </Box>
          </Flex>
        ))}
        <Divider />
      </Flex>
    </>
  );
}
