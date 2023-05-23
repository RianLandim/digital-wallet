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

export function NewMeta({   modalVisible,
    setModalVisible,
}: Props) {
    const [service, setService] = useState("");
    const [groupValues, setGroupValues] = useState([]);

    return<>
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
                    <FormControl mt="3">
                        <FormControl.Label>Meta</FormControl.Label>
                        <Input />
                        <FormControl.Label>Valor da meta</FormControl.Label>
                        <Input />
                        <FormControl.Label>Valor de depósito</FormControl.Label>
                        <Input />
                    </FormControl>

            

                    <FormControl mt="3">
                        <FormControl.Label>Periodo de depósito</FormControl.Label>

                    <Checkbox value="one" isChecked={true}>Mensal</Checkbox>
                    
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
}