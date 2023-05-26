
import { CardSaldo2 } from "../../layout/components/CardSaldo2";
import { Menu } from "../../layout/components/Menu";
import { Button, Divider, Flex, ScrollView, Text } from "native-base";
import { Plus,  } from "phosphor-react-native";


export function Orcamento() {
  return (
    <>
      <Menu />
      <CardSaldo2 value={"1.000,00"} children={undefined} />
      <ScrollView>
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
            Orçamento por categoria
          </Text>

          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            
          <Text textAlign={"left"} marginLeft={38} py={5}>
            Novo orçamento
          </Text>

          <Button marginRight={38}>
            <Plus size={20} />
          </Button>

          </Flex>

          <Divider />
        </Flex>
      </ScrollView>
    </>
  );
}
