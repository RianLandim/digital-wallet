import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { THEME } from "../../../theme/theme";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function EmailPassword() {
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
            source={require("../../../../assets/logo.png")}
            style={{ width: 100, height: 100, resizeMode: "stretch" }}
          />

          <Box alignItems={"center"} marginTop={"15%"} width={"80%"}>
            <Text fontSize={"3xl"} fontWeight={700} textAlign="center">
              Informe o seu e-mail e defina sua senha
            </Text>
          </Box>

          <VStack flex={1} width="80%" marginTop={10}>
            <FormControl>
              <Controller
                control={control}
                name="Email"
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
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true}
                    placeholder="Senha"
                    onChangeText={(val) => onChange(val)}
                  />
                )}
              />
            </FormControl>
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="ConfirmPassord"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    placeholder="Confirmar senha"
                    secureTextEntry={true}
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
            <Button borderRadius={50} backgroundColor={THEME.COLORS.PRIMARY}>
              <Text
                fontWeight={600}
                fontSize={"lg"}
                color={"#fff"}
                onPress={() => navigator.navigate("Welcome" as never)}
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
