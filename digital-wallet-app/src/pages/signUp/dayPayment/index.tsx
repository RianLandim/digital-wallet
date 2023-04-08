import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigation } from "../../../router/stack";

export function DayPayment() {
  const navigator = useNavigation<StackScreenNavigation>();


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box
          safeArea
          flex={1}
          alignItems="center"
          justifyContent="center"
          marginTop="25%"
        >
          <Box alignItems={"center"} marginTop={"15%"}>
            <Text fontSize={"3xl"} textAlign="center">
              Qual o dia do seu pagamento?
            </Text>
          </Box>

          <VStack flex={1} width="80%" marginTop={10}>
            <FormControl>
              <Controller
                control={control}
                name="name"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="00"
                    onBlur={onBlur}
                    value={value}
                    fontSize={16}
                    onChangeText={(val) => onChange(val)}
                  />
                )}
              />
            </FormControl>
          </VStack>

          <VStack
            flex={1}
            width="80%"
            justifyContent="space-evenly"
            marginTop={10}
          >
            <Button
              borderRadius={50}
              backgroundColor={"primary"}
              onPress={() => navigator.navigate("Welcome")}
            >
              <Text fontSize={"lg"} color={"#fff"}>
                Finalizar
              </Text>
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
