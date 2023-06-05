import { Box, Text, Flex } from "native-base";
import { CaretLeft, Camera } from "phosphor-react-native";
import {  FormControl, Input } from "native-base";
import { Button } from "../../../layout/components/Button";
import { useNavigation } from "@react-navigation/native";
import { Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export function EditarPerfil(){

  const navigator = useNavigation();

    return (
      <>
        <Flex
          background={"green.400"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          height={"10%"}
        >
          <TouchableOpacity style={{marginTop: "10%"}} onPress={() => navigator.goBack()}>
            <CaretLeft size={30} />
          </TouchableOpacity>
          <Text
            marginTop={"10%"}
            fontSize={16}
            fontWeight={"bold"}
            marginRight={"40%"}
          >
            Editar Perfil
          </Text>
        </Flex>
      
        <Box display={"flex"} alignItems={"center"} marginTop={22} marginBottom={22}>
        <Camera size={80} />
        </Box>
  
        <Flex width={"80%"} marginLeft={"10%"}>
          <Input marginBottom={"10%"} placeholder="Nome" />
          <Input marginBottom={"10%"} placeholder="CPF" />
          <Input marginBottom={"10%"} placeholder="Data de Nascimento" />
          <Input marginBottom={"10%"} placeholder="Email" />
          <Input marginBottom={"10%"} placeholder="Senha atual" />
          <Input marginBottom={"10%"} placeholder="Nova senha" />
          <Input marginBottom={"10%"} placeholder="Confirme a nova senha" />
          <Button title={"Salvar"}/>
        </Flex>
      </>
    );
  }
  