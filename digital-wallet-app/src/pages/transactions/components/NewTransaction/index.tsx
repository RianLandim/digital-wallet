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

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const createUserFormSchema = z.object({
  title: z.string().nonempty({ message: "Escreva o título" }),
  value: z.string().nonempty({ message: "Informe o valor" }),
});

export default function NewTransaction({
  modalVisible,
  setModalVisible,
}: Props) {
  const [service, setService] = useState("");

  async function saveTransaction() {
    const result = await trigger(["title", "value"], {
      shouldFocus: true,
    });
    if (result) {
      console.log(control._formValues.title);
    }
  }

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  return (
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
        <Modal.Header>Nova transação</Modal.Header>

        <Modal.Body>
          <VStack>
            <Controller
              control={control}
              name="title"
              defaultValue=""
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

          <FormControl.Label>Selecione a categoria</FormControl.Label>

          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Categoria"
            placeholder="Categoria"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Fixas" value="ux" />
            <Select.Item label="lazer" value="web" />
          </Select>

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
                    onChangeText={(val) => onChange(val)}
                  />
                  <FormControl.ErrorMessage>
                    {errors?.value?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </VStack>

          <Checkbox value="one" isChecked={true}>
            Entrada
          </Checkbox>

          <Checkbox value="two">Saída</Checkbox>
        </Modal.Body>

        <Modal.Footer justifyContent="center">
          <Box width="50%">
            <Button title={"Salvar"} onPress={saveTransaction} />
          </Box>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
