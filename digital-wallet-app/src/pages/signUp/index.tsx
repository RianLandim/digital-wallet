import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useForm, FormProvider } from 'react-hook-form'
import { PersonalData } from './personalData'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { EmailPassword } from './emailPassword'
import { MonthlyEarning } from './monthlyEarning'
import { DayPayment } from './dayPayment'

export type SignUpNavigationScreens = {
  personalData: undefined;
  emailPassword: undefined;
  monthlyEarning: undefined;
  dayPayment: undefined;
}

const createUserSchema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  cpf: z.string().nonempty('Cpf obrigatório'),
  birthday: z.string().nonempty('Data de nascimento é obrigatório'),
  email: z.string().nonempty('Email é obrigatório').email('Formato do email invalido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Mínimo de 8 caracteres'),
  cPassword: z.string().nonempty('Confirme sua senha'),
  earning: z.string().nonempty(),
  earningDay: z.string().nonempty(),
}).superRefine((arg, ctx) => {
  if(arg.password !== arg.cPassword) {
    ctx.addIssue({
      code: 'custom',
      message: 'As senhas não são iguais'
    })
  }
})

export type CreateUserFormData = z.infer<typeof createUserSchema>

export function SignUpPage() {

  const Stack = createNativeStackNavigator<SignUpNavigationScreens>()

  const methods = useForm<CreateUserFormData>({ 
    resolver: zodResolver(createUserSchema),
  })

  function handleNextPage(route: string) {
    if(methods.formState.errors) {}
  }    

  function createUserSubmit(data: CreateUserFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <Stack.Navigator initialRouteName='personalData' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='personalData' component={PersonalData} />
        <Stack.Screen name='emailPassword' component={EmailPassword} />
        <Stack.Screen name='monthlyEarning' component={MonthlyEarning} />
        <Stack.Screen name='dayPayment' component={DayPayment} />
      </Stack.Navigator>
    </FormProvider>
  )
}