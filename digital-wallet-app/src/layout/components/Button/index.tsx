import { Button as NativeButton, IButtonProps, Text } from "native-base";
import { theme } from "../../theme";


interface ButtonProps extends IButtonProps {
  title: String;
}

export function Button({ title, variant = "solid", ...props }: ButtonProps) {
  return (
    <NativeButton
      variant={variant}
      {...props}
      bgColor={"#15D706"}
      rounded={10}
      onPress={props.onPress}
    >
      <Text color={"white"} fontSize={18}  fontWeight="bold">{title}</Text>
    </NativeButton>
  );
}
