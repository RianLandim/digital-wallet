
import { CardSaldo } from "../../layout/components/CardSaldo";
import { Menu } from "../../layout/components/Menu";
import { Box, Button, Divider, Flex, ScrollView, Text, VStack } from "native-base";
import { Plus } from "phosphor-react-native";

export function Transactions() {
  return (
    <>
      <Box height="150" backgroundColor="primary" paddingTop="10">
        <VStack>
          <Text color="#000" fontSize="20" fontWeight="bold">Transações</Text>
        
        </VStack>
      </Box>
      <ScrollView>
        
      </ScrollView>
    </>
  );
}
