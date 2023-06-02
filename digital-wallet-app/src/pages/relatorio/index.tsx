import { Text, Box, Row, Divider } from "native-base";
import { ArrowCircleDown, Money } from "phosphor-react-native";
import { Button } from "../../layout/components/Button";

export function Relatorio() {
  return (
    <>
      <Box
        background={"green.400"}
        width={"100%"}
        height={"10%"}
        alignItems={"center"}
      >
        <Text marginTop={"10%"} fontSize={22} fontWeight={"bold"}>
          Relatório Mensal
        </Text>
      </Box>
      <Text
        marginTop={"10%"}
        fontSize={20}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Maio 2023
      </Text>
      <Row
        backgroundColor={"gray.200"}
        paddingX={15}
        paddingY={2}
        borderRadius={5}
        justifyContent="space-between"
        width={"90%"}
        marginLeft={"5"}
        marginTop={"10"}
        alignItems="center"
      >
        <Row alignItems={"center"}>
          <Money size={32} color={"#15D706"} />
          <Text marginLeft={4} fontSize="16" fontWeight="semibold">
            Total de entradas
          </Text>
        </Row>
        <Text fontSize="18" fontWeight="semibold" color="#5AE468">
          R$ 50,00
        </Text>
      </Row>
      <Row
        backgroundColor={"gray.200"}
        paddingX={15}
        paddingY={2}
        borderRadius={5}
        justifyContent="space-between"
        width={"90%"}
        marginLeft={"5"}
        marginTop={"10"}
        alignItems="center"
      >
        <Row alignItems={"center"}>
          <ArrowCircleDown size={38} color={"#EF1111"} />
          <Text marginLeft={2} fontSize="16" fontWeight="semibold">
            Total de despesas
          </Text>
        </Row>
        <Text fontSize="18" fontWeight="semibold" color="#EF1111">
          R$ 50,00
        </Text>
      </Row>
      <Box alignItems={"center"}>
        <Text
          marginTop={"10%"}
          fontSize={18}
          fontWeight={"500"}
          textAlign={"center"}
        >
          Gastos por categoria
        </Text>
        <Divider bgColor={"#B3B3B3"} width={"90%"} marginTop={"10"} />
        <Row justifyContent={"space-between"} alignItems={"center"} width={"90%"}>
          <Text marginTop={"3"}>1º Alimentação</Text>
          <Text fontSize="18" fontWeight="semibold" color="#EF1111" marginTop={2}>
          R$ 50,00
        </Text>
        </Row>
        <Divider bgColor={"#B3B3B3"} width={"90%"} marginTop={"3"} />
        <Row justifyContent={"space-between"} alignItems={"center"} width={"90%"}>
          <Text marginTop={"3"}>2º Eletronica</Text>
          <Text fontSize="18" fontWeight="semibold" color="#EF1111" marginTop={2}>
          R$ 50,00
        </Text>
        </Row>
        <Divider bgColor={"#B3B3B3"} width={"90%"} marginTop={"3"} />
        
        <Row justifyContent={"space-between"} alignItems={"center"} width={"90%"}>
          <Text marginTop={"3"}>3º Jogos </Text>
          <Text fontSize="18" fontWeight="semibold" color="#EF1111" marginTop={2}>
          R$ 50,00
        </Text>
        </Row>
        <Divider bgColor={"#B3B3B3"} width={"90%"} marginTop={"3"} />
       <Button title={"Exportar relatorio"} width={"70%"} marginTop={50}/>
      </Box>
    </>
  );
}
