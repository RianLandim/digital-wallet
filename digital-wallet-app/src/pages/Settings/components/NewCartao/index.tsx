import { Box, Text, Flex } from "native-base";
import { CaretLeft, Camera } from "phosphor-react-native";
import { FormControl, Input } from "native-base";
import { Button } from "../../../../layout/components/Button";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../services";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import type { StackScreenNavigation } from "../../../../router/stack";
import { TouchableOpacity } from "react-native";
import { AxiosError } from "axios";

const REQUIRED_MESSAGE_ERROR = "Obrigatório";

const creditCardSchema = z.object({
  digits: z.string({ required_error: REQUIRED_MESSAGE_ERROR }),
  ownerName: z.string({ required_error: REQUIRED_MESSAGE_ERROR }),
  flag: z.string({ required_error: REQUIRED_MESSAGE_ERROR }),
  bank: z.string({ required_error: REQUIRED_MESSAGE_ERROR }),
  closedAt: z.string({ required_error: REQUIRED_MESSAGE_ERROR }),
  expiratedAt: z.string({ required_error: REQUIRED_MESSAGE_ERROR }),
});

type CreditCardProps = z.infer<typeof creditCardSchema>;

export function NewCartao() {
  const navigate = useNavigation<StackScreenNavigation>();

  const { mutate, status } = useMutation({
    mutationKey: ["register-credit-card"],
    mutationFn: (data: CreditCardProps) => api.post("credit-card", data),
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Cartão Cadastrado",
      });
      navigate.navigate("Home");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      Toast.show({
        type: "error",
        text1: error?.response?.data.message,
      });
    },
  });

  const { control, handleSubmit } = useForm<CreditCardProps>({
    resolver: zodResolver(creditCardSchema),
  });

  const submit = (data: CreditCardProps) => mutate({ ...data });

  return (
    <>
      <Flex
        background={"green.400"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"10%"}
      >
        <Box marginTop={"10%"}>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <CaretLeft size={30} />
          </TouchableOpacity>
        </Box>
        <Text
          marginTop={"10%"}
          fontSize={16}
          fontWeight={"bold"}
          marginRight={"40%"}
        >
          Cartões
        </Text>
      </Flex>

      <Box
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Camera size={70} />
      </Box>

      <Flex
        flex={7}
        flexDirection={"column"}
        justifyContent={"space-around"}
        width={"80%"}
        marginLeft={"10%"}
      >
        <Controller
          control={control}
          name="digits"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.digits}>
              <Input
                placeholder="4 últimos dígitos"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
              <FormControl.ErrorMessage>
                {errors.digits?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="ownerName"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.ownerName}>
              <Input
                placeholder="Nome do Cartão"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
              <FormControl.ErrorMessage>
                {errors.ownerName?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="bank"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.bank}>
              <Input
                placeholder="Banco"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
              <FormControl.ErrorMessage>
                {errors.bank?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="expiratedAt"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.expiratedAt}>
              <Input
                placeholder="Dia de Vencimento da fatura"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
              <FormControl.ErrorMessage>
                {errors.expiratedAt?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="closedAt"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.flag}>
              <Input
                placeholder="Dia de fechamento da fatura"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
              <FormControl.ErrorMessage>
                {errors.flag?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="flag"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.flag}>
              <Input
                placeholder="Bandeira"
                onChangeText={(val) => onChange(val)}
                value={value}
              />
              <FormControl.ErrorMessage>
                {errors.digits?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />

        <Button
          title={"Salvar"}
          onPress={handleSubmit(submit)}
          isLoading={status === "loading"}
        />
      </Flex>
    </>
  );
}
