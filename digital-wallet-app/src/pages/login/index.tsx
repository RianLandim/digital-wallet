import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackRouteProps } from "../../router/stack";

export function Login() {
  const navigator = useNavigation();

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
            source={require("../../../assets/logo.png")}
            style={{ width: 100, height: 100, resizeMode: "stretch" }}
          />

          <Box alignItems={"center"} marginTop={"15%"}>
            <Text fontSize={"3xl"} fontWeight={700}>
              Entrar
            </Text>
          </Box>

          <VStack flex={1} width="80%" marginTop={10}>
            <FormControl>
              <Controller
                control={control}
                name="Username"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Email"
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
                name="Password"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    secureTextEntry={true}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Senha"
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
            <Button borderRadius={50} backgroundColor="primary">
              <Text fontWeight={600} fontSize={"lg"} color={"#fff"}>
                Entrar
              </Text>
            </Button>
          </VStack>

          <VStack flex={1} width="50%" justifyContent="space-evenly">
            <Button borderRadius={50} backgroundColor={"transparent"}>
              <Text
                fontWeight={600}
                fontSize={"md"}
                color={'secondary'}
              >
                Esqueceu a senha?
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
              onPress={() => navigator.navigate("SignUp" as never)}
            >
              <Text
                fontWeight={600}
                fontSize={"md"}
                color={'secondary'}
              >
                Cadastrar
              </Text>
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
