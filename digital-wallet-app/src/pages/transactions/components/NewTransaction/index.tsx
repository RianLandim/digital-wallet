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

type Props = {
    modalVisible: boolean;
    setModalVisible: Function;
};

export default function NewTransaction({
    modalVisible,
    setModalVisible,
}: Props) {
    const [service, setService] = useState("");
    const [groupValues, setGroupValues] = useState([]);

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
                    <FormControl mt="3">
                        <FormControl.Label>Título</FormControl.Label>
                        <Input />
                    </FormControl>

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

                    <FormControl mt="3">
                        <FormControl.Label>Valor:</FormControl.Label>
                        <Input />
                    </FormControl>

                    <Checkbox value="one" isChecked={true}>
                        Entreda
                    </Checkbox>
                    
                    <Checkbox value="two">Saída</Checkbox>
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
    );
}
