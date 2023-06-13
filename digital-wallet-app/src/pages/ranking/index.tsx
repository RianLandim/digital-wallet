import {
  Box,
  Text,
  Row,
  IconButton,
  ScrollView,
  Column,
} from "native-base";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { VictoryPie } from "victory-native";
import { StackScreenNavigation } from "../../router/stack";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { LaunchPropsChart } from "../../utils/interfaces/launch";
import { api } from "../../services";

export function Ranking() {
  const navigator = useNavigation<StackScreenNavigation>();

  const {
    data: userLaunchs,
  } = useQuery({
    queryKey: ["user-launch"],
    queryFn: () => api.get<LaunchPropsChart[]>("launch/false").then(({ data }) => data),
  });


  const colors = {
    Lazer: "#00008B",
    'Salário': "#FF0000",
    Boletos: "#04cc77",
    Contas:"#00aeef",
    Fixas: "#505353",
    Entretenimento: "#e28e25"
  } as const 
  

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
          {userLaunchs?.map((elemento, index) => 
            (
              <Row justifyContent="flex-start" marginLeft="5">
                <Text fontSize="17" fontWeight="medium" marginBottom="2" bold>
                  {(index + 1) +
                    "º " +
                    elemento.title +
                    " R$ " +
                    elemento.data}
                </Text>
              </Row>
            )
          )}
        </Column>

        <Column justifyContent="center" alignItems="center">
          <VictoryPie
            data={userLaunchs}
            x="title"
            y="data"
            width={Dimensions.get('window').width}
            colorScale='qualitative'
          />
        </Column>
      </ScrollView>
    </>
  );
}
