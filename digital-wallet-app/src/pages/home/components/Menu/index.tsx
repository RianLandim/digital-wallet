import { Box, Column, Text } from "native-base";
import { Image } from "react-native";
import { useAuth } from "../../../../context/auth.context";

export function Menu() {
  const { user } = useAuth();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="5"
      >
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
          <Text
            fontWeight="semibold"
            fontSize="20"
            marginLeft="5"
            marginTop="22%"
          >
            Olá, {user.name}
          </Text>
          <Text fontWeight="medium" fontSize="18" marginLeft="5">
            Vamos organizar?
          </Text>
        </Column>
        <Box marginRight={3} marginTop="10%">
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
