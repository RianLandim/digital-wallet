import { Box, FormControl, Input, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import zod from 'zod'
import { Button } from "../../layout/components/Button";

export function Login() {

  const formSchema = zod.object({
    username: zod.string(),
    password: zod.string()
  })

  type FormProps = zod.infer<typeof formSchema>
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box safeArea flex={1} alignItems="center" justifyContent="space-around">
        <Box flex={1} />
        <VStack flex={1} width="80%">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                  secureTextEntry
                />
              )}
            />
          </FormControl>
        </VStack>
        <VStack flex={1} width="80%" justifyContent="space-evenly">
          <Button title="Entrar"  color='primary.100' />
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
