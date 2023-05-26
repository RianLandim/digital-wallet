import { IButtonProps, Button, Image, Icon } from "native-base";
import { ReactDOM } from "react";
import { Text } from "react-native";


interface PropsConfig extends IButtonProps {
  title: String;
}

export function ButtonConfig({title, _icon, variant = "solid", ...props}: PropsConfig){
  return <>
  <Button
  variant={variant}
  {...props}
  bgColor={"gray.200"} marginTop={8} width={"85%"} marginLeft={"7.5%"}>
      <Text>{title}</Text>
      
  </Button>

  
  </>
}