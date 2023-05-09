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
      bgColor={"#5AE468"}
      rounded={10}
      width={299}
    >
      <Text color={"white"}  fontWeight="bold">{title}</Text>
    </NativeButton>
  );
}
