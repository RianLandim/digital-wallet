import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  CheckIcon,
  Checkbox,
  FormControl,
  Input,
  Modal,
  Select,
  VStack,
} from "native-base";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../../layout/components/Button";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../services";
import { Replace } from "../../../../utils/helpers/replace";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { AxiosError } from "axios";

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
  refetch: Function;
};

const createLaunchFormSchema = z.object({
  title: z.string(),
  value: z.string(),
  category: z.enum(["Fixas", "Lazer", "Contas", "Boleto", "Entretenimento"]),
  type: z.enum(["CREDIT", "DEBIT"]),
});

export type LaunchFormProps = z.infer<typeof createLaunchFormSchema>;

export default function NewTransaction({
  modalVisible,
  setModalVisible,
  refetch,
}: Props) {
  const [service, setService] = useState("");

  const { control, handleSubmit } = useForm<LaunchFormProps>({
    resolver: zodResolver(createLaunchFormSchema),
  });

  const { mutate } = useMutation({
    mutationKey: ["create-launch"],
    mutationFn: (data: Replace<LaunchFormProps, { value: number }>) =>
      api.post("launch", data),
    onSuccess: () => {
      setModalVisible(false);
      refetch();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      Toast.show({ type: "error", text1: error.response?.data.message });
    },
  });

  const submit = (data: LaunchFormProps) =>
    mutate({
      ...data,
      value: parseFloat(data.value),
    });

  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible(false)}
      avoidKeyboard
      justifyContent="space-around"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Nova transação</Modal.Header>

        <Modal.Body flex={1} justifyContent="space-around">
          <VStack>
            <Controller
              control={control}
              name="title"
              render={({
                field: { onChange, onBlur, value },
                formState: { errors },
              }) => (
                <FormControl mt="3" isInvalid={!!errors.title}>
                  <FormControl.Label>Título</FormControl.Label>
                  <Input
                    value={value}
                    onBlur={onBlur}
                    fontSize="md"
                    placeholder="Titulo"
                    onChangeText={(val) => onChange(val)}
                  />
                  <FormControl.ErrorMessage>
                    {errors?.title?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </VStack>

          <Controller
            control={control}
            name="category"
            render={({ formState: { errors }, field: { value, onChange } }) => (
              <FormControl isInvalid={!!errors.category}>
                <FormControl.Label>Selecione a categoria</FormControl.Label>
                <Select
                  selectedValue={value}
                  minWidth="200"
                  accessibilityLabel="Categoria"
                  placeholder="Categoria"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={onChange}
                >
                  {createLaunchFormSchema.shape.category.options.map((item) => (
                    <Select.Item label={item} value={item}>
                      {item}
                    </Select.Item>
                  ))}
                </Select>
              </FormControl>
            )}
          />

          <VStack>
            <Controller
              control={control}
              name="value"
              defaultValue=""
              render={({
                field: { onChange, onBlur, value },
                formState: { errors },
              }) => (
                <FormControl mt="3" isInvalid={!!errors.value}>
                  <FormControl.Label>Valor: </FormControl.Label>
                  <Input
                    value={value}
                    onBlur={onBlur}
                    fontSize="md"
                    placeholder="Valor"
                    onChangeText={onChange}
                    keyboardType="numeric"
                  />
                  <FormControl.ErrorMessage>
                    {errors?.value?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </VStack>
          <VStack>
            <Controller
              name="type"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl isInvalid={!!errors.type}>
                  <FormControl.Label>Selecione o tipo</FormControl.Label>
                  <Select
                    selectedValue={value}
                    minWidth="200"
                    accessibilityLabel="Categoria"
                    placeholder="Tipo"
                    _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={onChange}
                  >
                    {createLaunchFormSchema.shape.type.options.map((item) => (
                      <Select.Item label={item} value={item}>
                        {item}
                      </Select.Item>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </VStack>
        </Modal.Body>

        <Modal.Footer justifyContent="center">
          <Box width="50%">
            <Button title={"Salvar"} onPress={handleSubmit(submit)} />
          </Box>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
