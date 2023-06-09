import {
  Box,
  Text,
  Row,
  IconButton,
  ScrollView,
  Column,
  TextArea,
} from "native-base";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { VictoryPie } from "victory-native";
import { StackScreenNavigation } from "../../router/stack";
import { useNavigation } from "@react-navigation/native";

export function Ranking() {
  const navigator = useNavigation<StackScreenNavigation>();

  const expenses = [
    {
      id: "1",
      label: "Internet",
      value: 99,
      color: "#975FFF",
      percent: "14%",
    },
    {
      id: "2",
      label: "Carro",
      value: 550.25,
      color: "#FF8555",
      percent: "79%",
    },
    {
      id: "3",
      label: "Livro",
      value: 45,
      color: "#55C5FE",
      percent: "6%",
    },
    {
      id: "4",
      label: "Pizza",
      value: 60,
      color: "#55C5FE",
      percent: "5%",
    },
    {
      id: "5",
      label: "Teste",
      value: 120,
      color: "#975FFF",
      percent: "14%",
    },
    {
      id: "6",
      label: "Alimentação",
      value: 120,
      color: "#975FFF",
      percent: "14%",
    },
  ];

  const colors = [
    "#00008B",
    "#FF0000",
    "#04cc77",
    "#00aeef",
    "#505353",
    "#e28e25",
    "#8B008B",
    "#0072bc",
    "#DC143C",
    "#000000",
    "#4d0000",
    "#ff00ff",
  ];

  let date = new Date;
  const [month, setMonth ] = useState(date.getMonth());
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  function previousMonth(){
    if(month > 0){
      setMonth(month - 1);
    }
  }

  function nextMonth(){
    if(month <= date.getMonth()){
      setMonth(month + 1);
    }
  }


  return (
    <>
      <Box
        height="100"
        backgroundColor="green.400"
        paddingTop="6"
        justifyContent="space-around"
      >
        <Row>
          <TouchableOpacity
            onPress={() => navigator.goBack()}
            style={{ marginLeft: 10 }}
          >
            <CaretLeft size={30} />
          </TouchableOpacity>

          <Row justifyContent="center" width="80%">
            <Text color="#000" fontSize="22" fontWeight="bold">
              Ranking
            </Text>
          </Row>
        </Row>
      </Box>

      <Row justifyContent="center" alignItems="center" marginTop="2">
        <IconButton icon={<CaretLeft size={28} color="#000" />} onPress={previousMonth} />
        <Text fontSize="18" fontWeight="semibold" marginX="4">
          {months[month]}
        </Text>
        <IconButton icon={<CaretRight size={28} color="#000" />} onPress={nextMonth} />
      </Row>

      <ScrollView>
        <Column marginTop="6">
          <Text fontSize="22" fontWeight="600" marginBottom="5" textAlign="center">
            Gastos por categorias
          </Text>
          {expenses.map(function (elemento, indice) {
            return (
              <Row justifyContent="flex-start" marginLeft="5">
                <Text fontSize="17" fontWeight="medium" marginBottom="2" color={colors[indice]}>
                  {elemento.id +
                    "º " +
                    elemento.label +
                    " R$ " +
                    elemento.value}
                </Text>
              </Row>
            );
          })}
        </Column>

        <Column justifyContent="center" alignItems="center">
          <VictoryPie
            data={expenses}
            x="label"
            y="value"
            width={310}
            colorScale={colors}
          />
        </Column>
      </ScrollView>
    </>
  );
}
