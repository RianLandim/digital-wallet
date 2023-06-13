import { Column, IconButton, Row, Text, Box, View } from "native-base";
import {
  ArrowCircleDown,
  CaretLeft,
  CaretRight,
  Plus,
} from "phosphor-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Transaction } from "./components/Transaction";
import React, { useState } from "react";
import NewTransaction from "./components/NewTransaction";
import { dateLaunchFormat, dateMonthFormat } from "../../utils/functions/format";
import { BalanceResponseProps } from "../home";
import { api } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { currencyFormat } from "../../utils/functions/format";
import { LaunchProps } from "../../utils/interfaces/launch";
import { SafeAreaView, SectionList } from "react-native";

export function Transactions() {
  const [modalVisible, setModalVisible] = useState(false);

  const { data: userBalance, refetch: refecthBalance } = useQuery({
    queryKey: ["user-balance-info"],
    queryFn: () =>
      api.get<BalanceResponseProps>("user/balance").then(({ data }) => data),
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always'
  });

  const {
    data: userLaunchs,
    refetch,
    fetchStatus,
  } = useQuery({
    queryKey: ["user-launch"],
    queryFn: () => api.get<LaunchProps[]>("launch").then(({ data }) => data),
    onSuccess: () => refecthBalance()
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        height="120"
        backgroundColor="green.400"
        paddingTop="10"
        justifyContent="space-around"
      >
        <Row justifyContent="space-between" alignItems="center" marginX="5">
          <Text color="#000" fontSize="22" fontWeight="bold">
            Transações
          </Text>
        </Row>
        {/* <Row justifyContent="center" alignItems="center">
          <IconButton icon={<CaretLeft size={28} color="#000" />} />
          <Text fontSize="18" fontWeight="semibold" marginX="4">
            {dateMonthFormat(new Date())}
          </Text>
          <IconButton icon={<CaretRight size={28} color="#000" />} />
        </Row> */}
      </Box>

      <View flex={1}>
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
                {currencyFormat(userBalance?.balance ?? 0)}
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
            <ArrowCircleDown size={32} color="#EF1111" />
            <Column marginLeft="2">
              <Text fontSize="16" fontWeight="semibold">
                Despesas
              </Text>
              <Text fontSize="18" fontWeight="semibold" color="alert">
                {currencyFormat(userBalance?.debit ?? 0)}
              </Text>
            </Column>
          </Row>
        </Row>

        <Column flex={1}>
          <SectionList
            onRefresh={() => refetch()}
            refreshing={fetchStatus === "fetching"}
            sections={userLaunchs ?? []}
            renderSectionHeader={({ section: { title } }) => (
              <Text marginY="6" marginX="4" fontSize="22" fontWeight="medium">
                {dateLaunchFormat(new Date(title))}
              </Text>
            )}
            renderItem={({ item: launch }) => (
              <Transaction
                key={launch.id}
                name={launch.title}
                transactionAt={launch.createdAt}
                value={launch.value}
                type={launch.type}
              />
            )}
          />
        </Column>
      </View>

      <NewTransaction
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        refetch={refetch}
      />

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
    </SafeAreaView>
  );
}
