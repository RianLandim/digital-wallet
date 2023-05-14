import { Button as NativeButton, IButtonProps, Text } from "native-base";
import { theme } from "../../theme";


interface ButtonProps extends IButtonProps {
  title: String;
}

export function ButtonSecondary({ title, variant = "solid", ...props }: ButtonProps) {
  return (
    <NativeButton
      variant={variant}
      {...props}
      // bgColor={"#5AE468"}
      rounded={10}
      onPress={props.onPress}
    >
      
      <Text  fontWeight="600" fontSize="md"  color="#1A78E5">{title}</Text>
    </NativeButton>
  );
}
