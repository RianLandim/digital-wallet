import React, { Children } from "react";
import { CardSaldo2 } from "../../layout/components/CardSaldo2";
import { Menu } from "../../layout/components/Menu";
import { Flex, Text, Button, Divider } from "native-base";
import { Plus } from "phosphor-react-native";
import { MaterialIcons } from '@expo/vector-icons';



export function Metas(){
    return <>
    <Menu/>
    <CardSaldo2 value={"1.000,00"} children={undefined}/>
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

          <Button marginRight={38}>
            <Plus size={20} />
          </Button>

          </Flex>

          
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Text marginLeft={38}>Viagem</Text>
            <Flex>
              <Text>3.000</Text>
              <Text>2.500</Text>
            </Flex>
            <MaterialIcons name="Savings'" color={"black"}/>
            

          </Flex>



          <Divider />
        </Flex>

    </>
}   