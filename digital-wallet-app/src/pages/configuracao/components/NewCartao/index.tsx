import { Box, Text, Flex } from "native-base";
import { CaretLeft, Camera } from "phosphor-react-native";
import {  FormControl, Input } from "native-base";
import { Button } from "../../../../layout/components/Button";

export function NewCartao() {
  return (
    <>
      <Flex
        background={"green.400"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"10%"}
      >
        <Box marginTop={"10%"}>
          <CaretLeft size={30} />
        </Box>
        <Text
          marginTop={"10%"}
          fontSize={16}
          fontWeight={"bold"}
          marginRight={"40%"}
        >
          Cartões
        </Text>
      </Flex>

    
      <Box display={"flex"} alignItems={"center"} marginTop={22} marginBottom={22}>
      <Camera size={80} />
      </Box>

      <Flex width={"80%"} marginLeft={"10%"}>
        <Input marginBottom={"10%"} placeholder="4 últimos dígitos" />
        <Input marginBottom={"10%"} placeholder="Nome do Cartão" />
        <Input marginBottom={"10%"} placeholder="Banco" />
        <Input marginBottom={"10%"} placeholder="Dia de Vencimento da fatura" />
        <Input marginBottom={"10%"} placeholder="Dia de fechamento da fatura" />
        <Input marginBottom={"10%"} placeholder="Bandeira" />
        <Button title={"Salvar"}/>
      </Flex>
    </>
  );
}
