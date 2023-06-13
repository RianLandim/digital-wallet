import {
  Button,
  CheckIcon,
  Checkbox,
  FormControl,
  Input,
  Modal,
  Select,
} from "native-base";
import { useState } from "react";
import { categoryEnum } from "../../../utils/enums/category";
import { z } from "zod";

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const budgetFormSchema = z.object({
  category: categoryEnum,
  period: z.string()
})

export function NewOrcamento({ modalVisible, setModalVisible }: Props) {

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
          <Modal.Header>Novo Orçamento</Modal.Header>

          <Modal.Body>
            <Select
              minWidth="200"
              accessibilityLabel="Categoria"
              placeholder="Selecione a categoria"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              {
                budgetFormSchema.shape.category.options.map((item) => (
                  <Select.Item key={item} label={item} value={item} />
                ))
              }
            </Select>

            <FormControl mt="3">
              <FormControl.Label>Valor</FormControl.Label>
              <Input />
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>Período de gastos</FormControl.Label>

              <Checkbox value="one" isChecked={true}>
                Mensal
              </Checkbox>

              <Checkbox value="two">Semanal</Checkbox>
            </FormControl>
          </Modal.Body>

          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Salvar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
