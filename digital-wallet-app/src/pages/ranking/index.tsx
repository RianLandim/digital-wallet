import { Box, Text, Row, IconButton, ScrollView, Column, TextArea } from "native-base";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import React from "react";
import { VictoryPie } from "victory-native";

export function Ranking() {
  const expenses =  [
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
        label: "Alimentação",
        value: 120,
        color: "#975FFF",
        percent: "14%",
      },
    ]

  const colors = [
    "#0000FF",
    "#FF0000",
    "#00FA9A",
    "#F4A460",
    "#800000",
    "#9400D3",
    "#C71585",
    "#FFD700",
    "#696969",
    "#228B22",
    "#FFA500",
    "#FFA500",
    "#1E90FF",
  ]

  return (
    <>
      <Box
        height="160"
        backgroundColor="green.400"
        paddingTop="10"
        justifyContent="space-around"
      >
        <Row justifyContent="center" alignItems="center">
          <Text color="#000" fontSize="22" fontWeight="bold">
            Ranking
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
        <Column justifyContent="center" alignItems="center" marginTop="5">
          <Text fontSize="20" fontWeight="600">Gastos por categorias</Text>
          {
            expenses.map(function(elemento, indice) {
            return <Row justifyContent="center">
              <Text fontSize="16" fontWeight="500" color={colors[indice]}>{elemento.id + ' ' + elemento.label + ' R$   ' + elemento.value}</Text>
            </Row>
          })
          }
        </Column>

        <Column justifyContent="center" alignItems="center">
          <VictoryPie
            data={expenses}
            x="label"
            y="value"
            width={350}
            colorScale={colors}
          />
        </Column>
      </ScrollView>
    </>
  );
}
