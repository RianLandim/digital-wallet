import { Box, Flex, Text } from "native-base";
import { Button } from "../Button";
import { ReactNode } from "react";

interface PropsCard {
  title: String;
  children: ReactNode;
}

export function Card({ title, children }: PropsCard) {
  return (
    <Flex
      marginTop="10%"
      backgroundColor="gray.200"
      width="90%"
      height="180"
      alignSelf="center"
      alignItems="center"
      borderRadius={20}
      justifyContent={"space-between"}
      py={1.5}
    >
      <Text fontWeight="bold" fontSize={20}>
        {title}
      </Text>

      {children}
    </Flex>
  );
}
