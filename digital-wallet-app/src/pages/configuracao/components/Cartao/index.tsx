import { Divider, Flex, Text } from "native-base";
import { CreditCard } from "phosphor-react-native";

export function Cartao(){
    return(
        <>
        <Divider marginTop={5} /><Flex marginLeft={3} flexDirection={"row"} justifyContent={"space-between"}>
            <CreditCard size={70} />
            <Text marginTop={5} marginRight={"50%"}>Nubank</Text>
            <Text marginTop={5} marginRight={3}>1234</Text>
        </Flex>
        <Divider />
        </>
    );
}
