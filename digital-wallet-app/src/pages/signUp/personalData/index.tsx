import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useFormContext } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigation } from "../../../router/stack";

export function PersonalData() {
  const navigator = useNavigation<StackScreenNavigation>();

  const { control, trigger } = useFormContext()

  async function nextPage() {
    const result = await trigger(['name', 'birthday', 'cpf'], { shouldFocus: true })

    if(result) {
      navigator.navigate("emailPassword")
    }
  }

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
          <Image
            source={require("../../../../assets/logo.png")}
            style={{ width: 100, height: 100, resizeMode: "stretch" }}
          />

          <Box alignItems={"center"} marginTop={"15%"}>
            <Text fontSize={"3xl"} fontWeight={700}>
              Cadastrar
            </Text>
          </Box>

          <VStack flex={1} width="80%" marginTop={10}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, ref }, formState: { errors } }) => (
                  <FormControl isInvalid={!!errors.name}>
                    <Input
                      placeholder="Nome Completo"
                      fontSize="md"
                      value={value}
                      onChangeText={(val) => onChange(val)}
                      ref={ref}
                    />
                    <FormControl.ErrorMessage>{errors?.name?.message}</FormControl.ErrorMessage>
                  </FormControl>
                )}
              />
              
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="birthday"
                render={({ field: { onChange, value, ref } }) => (
                  <Input
                    fontSize="md"
                    value={value}
                    placeholder="Data de Nascimento"
                    onChangeText={(val) => onChange(val)}
                    ref={ref}
                  />
                )}
              />
            </FormControl>
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="cpf"
                render={({ field: { onChange, value, ref } }) => (
                  <Input
                    value={value}
                    placeholder="CPF"
                    fontSize="md"
                    onChangeText={(val) => onChange(val)}
                    ref={ref}
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
              onPress={nextPage}
            >
              <Text fontWeight={600} fontSize={18} color={"#fff"}>
                Próximo
              </Text>
            </Button>
          </VStack>

          <VStack
            flex={1}
            width="50%"
            justifyContent="space-evenly"
            marginTop="20%"
          >
            <Button
              borderRadius={50}
              backgroundColor={"transparent"}
              onPress={() => navigator.navigate("Login")}
            >
              <Text fontWeight={600} fontSize="md" color={"secondary"}>
                Entrar
              </Text>
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
