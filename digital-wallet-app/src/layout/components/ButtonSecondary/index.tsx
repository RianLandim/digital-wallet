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
      rounded={10}
      onPress={props.onPress}
    >
      
      <Text  fontWeight="600" fontSize="18"  color="#1A78E5">{title}</Text>
    </NativeButton>
  );
}
