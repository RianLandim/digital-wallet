import { Box, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigation } from "../../../router/stack";
import { Button } from "../../../layout/components/Button";
import { ButtonSecondary } from "../../../layout/components/ButtonSecondary";

export function FinancialData() {
  const navigator = useNavigation<StackScreenNavigation>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box safeArea flex={1} alignItems="center" justifyContent="center">
          <Box alignItems="center" marginTop="15%" width="80%">
            <Text fontSize="22" fontWeight="600" textAlign="center">
              Responda a algumas perguntas para conhecermos mais sua vida
              financeira:
            </Text>
          </Box>

          <VStack flex={1} width="80%" marginTop={10}>
            <Text fontSize="20" fontWeight="500" textAlign="left">
              Qual sua renda mensal?
            </Text>
            <Controller
              control={control}
              name="name"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControl>
                  <Input
                    placeholder="00,00"
                    onBlur={onBlur}
                    value={value}
                    fontSize="md"
                    onChangeText={(val) => onChange(val)}
                  />
                </FormControl>
              )}
            />
          </VStack>

          <VStack flex={1} width="80%" marginTop={10}>
            <Text fontSize="20" fontWeight="500" textAlign="left">
              Qual dia do seu pagamento?
            </Text>

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
                    fontSize="md"
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
            <VStack width="50%">
              <ButtonSecondary
                title="Voltar"
                borderColor="black"
                marginRight="5%"
                borderWidth="1"
              />
            </VStack>

            <VStack  width="50%">
              <Button
                title="Próximo"
                onPress={() => navigator.navigate("Welcome")}
              />
            </VStack>

          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
