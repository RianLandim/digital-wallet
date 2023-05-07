import { Box, Button, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm, useFormContext } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigation } from "../../../router/stack";
import { CreateUserFormData } from "..";

export function EmailPassword() {
  const navigator = useNavigation<StackScreenNavigation>();

  const { control, trigger } = useFormContext();

  async function nextPage() {
    const result = await trigger(["email", "password", "cPassword"], {
      shouldFocus: true,
    });

    if (result) {
      navigator.navigate("emailPassword");
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
          <Box alignItems="center" marginTop="15%" width="80%">
            <Text fontSize="3xl" fontWeight="700" textAlign="center">
              Informe o seu e-mail e defina sua senha
            </Text>
          </Box>

          <VStack flex={1} width="80%" marginTop="10">
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({
                field: { onChange, onBlur, value },
                formState: { errors },
              }) => (
                <FormControl isInvalid={!!errors.email}>
                  <Input
                    placeholder="Email"
                    fontSize="md"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(val) => onChange(val)}
                  />
                  <FormControl.ErrorMessage>
                    {errors?.email?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true}
                    fontSize="md"
                    placeholder="Senha"
                    onChangeText={(val) => onChange(val)}
                  />
                )}
              />
            </FormControl>
            <FormControl marginTop={5}>
              <Controller
                control={control}
                name="cPassword"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    fontSize="md"
                    placeholder="Confirmar senha"
                    secureTextEntry={true}
                    onChangeText={(val) => onChange(val)}
                  />
                )}
              />
            </FormControl>
          </VStack>

          <VStack
            flexWrap="wrap"
            flexDirection="row"
            marginTop="10"
            width="80%"
            justifyContent="space-between"
          >
            <Button
              borderRadius="50"
              backgroundColor="transparent"
              width="45%"
              alignItems="center"
              textAlign="center"
              borderColor="primary"
              borderWidth="1"
              height="12"
            >
              <Text
                fontWeight="600"
                fontSize="20"
                color="#000"
                onPress={() => navigator.navigate("monthlyEarning")}
              >
                Voltar
              </Text>
            </Button>

            <Button borderRadius="50" backgroundColor="primary" width="45%" height="12">
              <Text
                fontWeight="black"
                fontSize="20"
                color="#fff"
                onPress={() => navigator.navigate("monthlyEarning")}
              >
                Proximo
              </Text>
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
