import { useMutation } from "@tanstack/react-query";
import { Checkbox, FormControl, Input, Modal } from "native-base";
import { api } from "../../../../services";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../layout/components/Button";
import { AxiosError } from "axios";
import Toast from "react-native-toast-message";

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
  refetch: Function;
};

const REQUIRED_ERROR_MESSAGE = "Obrigatório";

const goalSchema = z.object({
  value: z.string({ required_error: REQUIRED_ERROR_MESSAGE }),
  title: z.string({ required_error: REQUIRED_ERROR_MESSAGE }),
  description: z.string({ required_error: REQUIRED_ERROR_MESSAGE }),
  monthly: z.boolean({ required_error: REQUIRED_ERROR_MESSAGE }),
});

type GoalFormProps = z.infer<typeof goalSchema>;

export function NewMeta({ modalVisible, setModalVisible, refetch }: Props) {
  const { control, handleSubmit } = useForm<GoalFormProps>({
    resolver: zodResolver(goalSchema),
  });

  const { mutate, status } = useMutation({
    mutationKey: ["create-goal"],
    mutationFn: (data: GoalFormProps) =>
      api.post("goal", { ...data, value: Number(data.value) }),
    onSuccess: () => {
      refetch();
      setModalVisible(false);
    },
    onError: (data: AxiosError<{ message: string }>) => {
      Toast.show({
        type: "error",
        text1: data.response?.data.message,
      });
    },
  });

  const submit = (data: GoalFormProps) => mutate(data);

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Nova Meta</Modal.Header>

          <Modal.Body>
            <Controller
              control={control}
              name="title"
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl mt="3" isInvalid={!!errors.title}>
                  <FormControl.Label>Meta</FormControl.Label>
                  <Input onChangeText={(val) => onChange(val)} value={value} />
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="value"
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl isInvalid={!!errors.title}>
                  <FormControl.Label>Valor da meta</FormControl.Label>
                  <Input onChangeText={(val) => onChange(val)} value={value} />
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl isInvalid={!!errors.title}>
                  <FormControl.Label>Descrição</FormControl.Label>
                  <Input
                    numberOfLines={3}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="monthly"
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FormControl mt="3" isInvalid={!!errors.title}>
                  <FormControl.Label>Período de depósito</FormControl.Label>

                  <Checkbox
                    defaultIsChecked={true}
                    value="true"
                    isChecked={value}
                    onChange={onChange}
                    colorScheme="green"
                  >
                    Mensal
                  </Checkbox>
                  <FormControl.ErrorMessage>
                    {errors.monthly?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              title={"Salvar"}
              flex={1}
              onPress={handleSubmit(submit)}
              isLoading={status === "loading"}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
