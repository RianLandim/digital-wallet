import {Button as NativeButton, IButtonProps} from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string
}

export function Button({ title, variant= 'solid', ...props }: ButtonProps) {
  return <NativeButton variant={variant} {...props}>{title}</NativeButton>
}