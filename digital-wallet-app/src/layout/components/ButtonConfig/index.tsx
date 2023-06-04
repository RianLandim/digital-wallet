import { IButtonProps, Button, Image, Text, Row } from "native-base";
import { ReactDOM } from "react";



interface PropsConfig extends IButtonProps {
  title: String;
}

export function ButtonConfig({title, _icon, variant = "solid", ...props}: PropsConfig){
  return <>
  <Button
  variant={variant}
  {...props}
  bgColor={"gray.200"} marginTop={8} width={"85%"} marginLeft={"7.5%"} justifyContent="flex-start">
      <Row  width="70%" alignItems="center" marginLeft={5}>
      {_icon}
      <Text marginLeft={5}>{title}</Text>
    </Row>
  </Button>

  
  </>
}