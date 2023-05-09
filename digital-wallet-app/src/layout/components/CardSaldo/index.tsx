import { Flex } from "native-base";
import { Text } from "native-base";
import { ReactNode } from "react";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface PropsCardSaldo{
  title: String;
  value: String;
  children: ReactNode;
}

export function CardSaldo({title, value, children}: PropsCardSaldo){
  return <>
      <Flex marginTop="10%"
      backgroundColor="gray.200"
      width="90%"
      height="180"
      alignSelf="center"
      alignItems="center"
      borderRadius={20}
      py={1.5}>
        <Text fontWeight={"bold"} fontSize={"25"}>{title}</Text>
        <Text fontWeight={"bold"} fontSize={"25"} color={"green.600"}>R$ {value}</Text>
        {children}
      </Flex>
  
  </>

}