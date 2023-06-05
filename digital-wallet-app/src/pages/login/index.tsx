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
import { api } from "../../services";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Snackbar } from "react-native-paper";
import { useMutation } from "@tanstack/react-query";
import type { StackScreenNavigation } from "../../router/stack";
import { useAuth } from "../../context/auth.context";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";

const loginFormSchema = z.object({
  username: z.string().nonempty({ message: "Informe o seu email" }),
  password: z
    .string()
    .nonempty({ message: "Digite sua senha" })
    .min(8, "A senha precisa no mínimo 8 caracteres"),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function Login() {
  const [visible, setVisible] = useState(false);

  const navigator = useNavigation<StackScreenNavigation>();
  const { setStorageUser } = useAuth();

  const onDismissSnackBar = () => setVisible(false);

  const { control, handleSubmit, setError } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate, status } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginFormSchema) => api.post("/auth", data),
    onSuccess: ({ data }) => {
      setStorageUser(data);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      Toast.show({ type: "error", text1: error.response?.data.message });
      setError("username", { type: "server" });
      setError("password", { type: "server" });
    },
  });

  const submitLogin = (data: LoginFormSchema) => mutate(data);

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
                <FormControl marginTop={5} isInvalid={!!errors.password}>
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
            <Button
              isLoading={status === "loading"}
              title="Entrar"
              onPress={handleSubmit(submitLogin)}
              // onPress={() => navigator.navigate("BottomNavigationBar" as never)}
            />
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
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Senha ou email incorreto
      </Snackbar>
    </ScrollView>
  );
}
