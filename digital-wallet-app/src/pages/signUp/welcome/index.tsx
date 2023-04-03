import { Box, Button, Text, VStack } from "native-base";
import { THEME } from "../../../theme/theme";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigator = useNavigation();

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box
          safeArea
          flex={1}
          alignItems="center"
          justifyContent="center"
          marginTop="45%"
        >
          <Image
            source={require("../../../../assets/logo.png")}
            style={{ width: 100, height: 100, resizeMode: "stretch" }}
          />

          <Box alignItems={"center"} marginTop={"15%"} width="80%">
            <Text fontSize={"3xl"} fontWeight={700} textAlign={"center"}>
              Seja bem vindo a sua carteira digital!
            </Text>
          </Box>

          <VStack
            flex={1}
            width="80%"
            justifyContent="space-evenly"
            marginTop={10}
          >
            <Button borderRadius={50} backgroundColor={'primary'}>
              <Text
                fontWeight={600}
                fontSize={"lg"}
                color={"#fff"}
                onPress={() => navigator.navigate("Home" as never)}
              >
                Iniciar
              </Text>
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
