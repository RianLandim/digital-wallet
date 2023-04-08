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

export function PersonalData() {
  
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
            <FormControl>
              <Controller
                control={control}
                name="name"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Nome Completo"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(val) => onChange(val)}
                  />
                )}
              />
            </FormControl>
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="DateBirth"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    placeholder="Data de Nascimento"
                    onChangeText={(val) => onChange(val)}
                  />
                )}
              />
            </FormControl>
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="cpf"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    placeholder="CPF"
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
              onPress={() => navigator.navigate("monthlyEarning")}
            >
              <Text fontWeight={600} fontSize={"lg"} color={"#fff"}>
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
              <Text fontWeight={600} fontSize={"md"} color={"secondary"}>
                Entrar
              </Text>
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
