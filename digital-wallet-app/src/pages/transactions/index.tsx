import {
  Column,
  IconButton,
  Row,
  ScrollView,
  Text,
  Box,
} from "native-base";
import {
  ArrowCircleDown,
  CaretLeft,
  CaretRight,
  DotsThreeVertical,
  Plus,
} from "phosphor-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Transaction } from "./components/Transaction";
import React, { useState } from "react";
import NewTransaction from "./components/NewTransaction";

export function Transactions() {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>
      <Box
        height="150"
        backgroundColor="green.400"
        paddingTop="10"
        justifyContent="space-around"
      >
        <Row justifyContent="space-between" alignItems="center" marginX="5">
          <Text color="#000" fontSize="20" fontWeight="bold">
            Transações
          </Text>
        </Row>
        <Row justifyContent="center" alignItems="center">
          <IconButton icon={<CaretLeft size={28} color="#000" />} />
          <Text fontSize="18" fontWeight="semibold" marginX="4">
            Maio
          </Text>
          <IconButton icon={<CaretRight size={28} color="#000" />} />
        </Row>
      </Box>

      <ScrollView>
        <Row
          justifyContent="space-between"
          marginTop="5"
          width="90%"
          marginLeft="4"
        >
          <Row
            backgroundColor="#EDEDED"
            width="45%"
            height="20"
            borderRadius="xl"
            alignItems="center"
            justifyContent="center"
          >
            <MaterialIcons name="lock" size={30} />
            <Column marginLeft="2">
              <Text fontSize="16" fontWeight="semibold">
                Saldo atual
              </Text>
              <Text fontSize="18" fontWeight="semibold" color="#5AE468">
                R$ 200,00
              </Text>
            </Column>
          </Row>

          <Row
            backgroundColor="#EDEDED"
            width="45%"
            height="20"
            borderRadius="xl"
            alignItems="center"
            justifyContent="center"
          >
            <ArrowCircleDown size={32} />
            <Column marginLeft="2">
              <Text fontSize="16" fontWeight="semibold">
                Despesas
              </Text>
              <Text fontSize="18" fontWeight="semibold" color="alert">
                R$ 200,00
              </Text>
            </Column>
          </Row>
        </Row>

        <Column>
          <Text marginY="6" marginX="4" fontSize="22" fontWeight="medium">
            Hoje
          </Text>
          <Transaction />
        </Column>
      </ScrollView>

      <NewTransaction modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <Box position="absolute" bottom="4" right="5">
        <IconButton
          icon={<Plus size={30} color="#fff" />}
          backgroundColor="green.400"
          borderRadius="50"
          width="62"
          height="16"
          onPress={() => setModalVisible(true)}
        />
      </Box>
    </>
  );
}
