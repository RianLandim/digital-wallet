import { Box, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../layout/components/Button";
import { ButtonSecondary } from "../../layout/components/ButtonSecondary";
import axios from "axios";
import { api } from "../../services";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  username: z.string().nonempty({ message: "Email obrigatório" }),
  password: z
    .string()
    .nonempty({ message: "Email obrigatório" })
    .min(8, "A senha precisa de no mínimo 8 caracteres"),
});

export function Login() {
  const baseUrl = "http://192.168.143.13:5432";

  async function login() {
    const result = await trigger(["username", "password"], {
      shouldFocus: true,
    });

    await axios
      .post(`${baseUrl}/auth`, {
        username: control._formValues.username,
        password: control._formValues.password,
      })
      .then((response) => {
        console.log(response.data);
        navigator.reset({
          index: 0,
          routes: [{ name: "BottomNavigationBar" as never }],
        });
      });
  }

  const navigator = useNavigation();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

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
            <Controller
              control={control}
              name="username"
              defaultValue=""
              render={({
                field: { onChange, onBlur, value },
                formState: { errors },
              }) => (
                <FormControl isInvalid={!!errors.username}>
                  <Input
                    placeholder="Email"
                    fontSize="md"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(val) => onChange(val)}
                  />
                  <FormControl.ErrorMessage>
                    {errors?.username?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({
                field: { onChange, onBlur, value },
                formState: { errors },
              }) => (
                <FormControl marginTop={5}>
                  <Input
                    secureTextEntry={true}
                    onBlur={onBlur}
                    fontSize="md"
                    value={value}
                    placeholder="Senha"
                    onChangeText={(val) => onChange(val)}
                  />
                  <FormControl.ErrorMessage>
                    {errors?.password?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </VStack>

          <VStack
            flex={1}
            width="80%"
            justifyContent="space-evenly"
            marginTop={10}
          >
            <Button title="Entrar" onPress={login} />
          </VStack>

          <VStack flex={1} width="50%" justifyContent="space-evenly">
            <ButtonSecondary title="Esqueceu a senha?" />
          </VStack>

          <VStack
            flex={1}
            width="50%"
            justifyContent="space-evenly"
            marginTop="20%"
          >
            <ButtonSecondary
              title="Cadastrar"
              onPress={() => navigator.navigate("SignUp" as never)}
            />
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
