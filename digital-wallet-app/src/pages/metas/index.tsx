import { CardSaldo2 } from "../../layout/components/CardSaldo2";
import { Menu } from "../home/components/Menu";
import { Flex, Text, Button, Divider, Box } from "native-base";
import { Plus, Trash, Bank } from "phosphor-react-native";
import { NewMeta } from "./components/NewMetas";
import React, { useState } from "react";

export function Metas() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Menu />
      <CardSaldo2 value={"1.000,00"} children={undefined} />
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
          />
        </Flex>
        <Divider />

        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginTop={"5%"}
          marginBottom={"5%"}
        >
          <Text marginLeft={38}>Viagem</Text>
          <Flex>
            <Text color={"green.500"}>3.000</Text>
            <Text color={"red.500"}>2.500</Text>
          </Flex>

          <Box marginLeft={12}>
            <Bank size={28} />
          </Box>

          <Box marginRight={38}>
            <Trash size={25} color="red" />
          </Box>
        </Flex>
        <Divider />
      </Flex>
    </>
  );
}
