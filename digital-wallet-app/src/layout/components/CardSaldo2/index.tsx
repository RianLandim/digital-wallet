import { Flex } from "native-base";
import { Text } from "native-base";
import { ReactNode } from "react";


interface PropsCardSaldo{
    value: String;
    children: ReactNode;
  }

export function CardSaldo2({value, children}: PropsCardSaldo){
    return <>
        <Flex marginTop="3%"
      backgroundColor="gray.200"
      width="90%"
      height="100"
      alignSelf="center"
      alignItems="center"
      borderRadius={20}
      py={1.5}>
        <Text fontWeight={"bold"} fontSize={"25"}>Saldo</Text>
        <Text fontWeight={"bold"} fontSize={"25"} color={"green.600"}>R$ {value}</Text>
        {children}
      </Flex>
  
    </>
}