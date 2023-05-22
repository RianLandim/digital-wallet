import { Box } from "native-base";
import { Image } from "react-native";
import { UserCircle } from "phosphor-react-native";

export function Menu(){
  return <>
     <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Image
        //imagem não funciona
          source={require("../../../../assets/logo.png")}
          style={{
            marginTop: "10%",
            marginLeft: 10,
            width: 50,
            height: 50,
            resizeMode: "stretch",
          }}
        />
        <Box marginRight={3} marginTop="10%">
          <UserCircle size={60} />
        </Box>
      </Box>
  </>
}