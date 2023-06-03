import { Box, Column, Text } from "native-base";
import { Image } from "react-native";

export function Menu() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="5" marginTop="10">
        {/* <Image
          source={require("../../../../assets/logo.png")}
          style={{
            marginTop: "10%",
            marginLeft: 10,
            width: 50,
            height: 50,
            resizeMode: "stretch",
          }}
        /> */}
        <Column>
          <Text fontWeight="semibold" fontSize="20" marginLeft="5">Olá, Ana!</Text>
          <Text fontWeight="medium" fontSize="18" marginLeft="5">Vamos organizar?</Text>
        </Column>
        <Box marginRight={3}>
          {/* <UserCircle size={60} /> */}
          <Image
            source={require("../../../../../assets/avatar.png")}
            style={{
              marginTop: "10%",
              marginLeft: 10,
              width: 50,
              height: 50,
              resizeMode: "stretch",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
