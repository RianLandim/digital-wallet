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
import axios from 'axios';
import { api } from "../../services";

export function Login() {

  const baseUrl = 'http://192.168.143.13:5432';



async function login(){
  // axios.get(`${baseUrl}/user/teste@gmail.com/find`).then((response) => {
  //   console.log(response.data);
  // });

  // await axios.post(`${baseUrl}/auth`, {
  //   username: "teste@gmail.com",
  //   password: "123456789",
  // }).then((response) =>{
  //   console.log(response.data);
    navigator.navigate("BottomNavigationBar" as never)
  // });

}



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
                    fontSize="md"
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
                    fontSize="md"
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
            <ButtonSecondary title="Cadastrar"  onPress={() => navigator.navigate("SignUp" as never)} />
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
