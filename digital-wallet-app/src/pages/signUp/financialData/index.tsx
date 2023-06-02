import { Box, FormControl, Input, Text, VStack } from "native-base";
import { Controller, useForm, useFormContext } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigation } from "../../../router/stack";
import { Button } from "../../../layout/components/Button";
import { ButtonSecondary } from "../../../layout/components/ButtonSecondary";
import axios from "axios";

export function FinancialData() {
  const navigator = useNavigation<StackScreenNavigation>();

  const { control, trigger } = useFormContext();

  const baseUrl = "http://192.168.143.13:5432";

  async function createUser() {
    const result = await trigger(["username", "password"], {
      shouldFocus: true,
    });

    await axios
      .post(`${baseUrl}/user`, {
        username: control._formValues.email,
        password: control._formValues.password,
        name: control._formValues.name,
        cpf: control._formValues.cpf,
        earning: parseInt(control._formValues.earning),
        earningDay: parseInt(control._formValues.earningDay),
        // birthday: "2023-05-27T16:36:41.464Z",
        birthday: convertStringDate(control._formValues.birthday),
        earningMontly: false,
        balance: 0,
      })
      .then((response) => {
        console.log(response.data);
        navigator.reset({
          index: 0,
          routes: [{ name: "BottomNavigationBar" as never }],
        });
      });
  }

  function convertStringDate(dateString: string){
    // console.log(control._formValues.birthday)
    // var dateString = control._formValues.birthday;
    let array = dateString.split('/');
    console.log(array)
    dateString = array[2] + '-' + array[1] + '-'+ array[0]
    console.log(dateString)
    let dateString2 = `${dateString}T00:00:00`;
    let date = new Date(dateString2);
    console.log(date);
    return date;
  }

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
              name="earning"
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
                name="earningDay"
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
                onPress={createUser}
              />
            </VStack>

          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
