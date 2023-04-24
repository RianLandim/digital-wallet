import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useForm, FormProvider, FieldPath } from 'react-hook-form'
import { PersonalData } from './personalData'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { EmailPassword } from './emailPassword'
import { MonthlyEarning } from './monthlyEarning'
import { DayPayment } from './dayPayment'

const createUserSchema = z.object({
  name: z.string({ required_error: 'Nome obrigatório' }),
  cpf: z.string({ required_error: 'Cpf obrigatório' }),
  birthday: z.string({ required_error: 'Data de nascimento é obrigatório' }),
  email: z.string({ required_error: 'Email é obrigatório' }).email('Formato do email invalido'),
  password: z.string({ required_error: 'Senha é obrigatória' }).min(8, 'Mínimo de 8 caracteres'),
  cPassword: z.string({ required_error: 'Confirme sua senha' }),
  earning: z.string({ required_error: 'Nome obrigatório' }),
  earningDay: z.string({ required_error: 'Nome obrigatório' })
}).superRefine((arg, ctx) => {
  if(arg.password !== arg.cPassword) {
    ctx.addIssue({
      code: 'custom',
      message: 'As senhas não são iguais'
    })
  }
})

export type SignUpNavigationScreens = {
  personalData: undefined;
  emailPassword: undefined;
  monthlyEarning: undefined;
  dayPayment: undefined;
}

export type CreateUserFormData = z.infer<typeof createUserSchema>

export function SignUpPage() {

  const Stack = createNativeStackNavigator<SignUpNavigationScreens>()

  const methods = useForm<CreateUserFormData>({ 
    resolver: zodResolver(createUserSchema),
  })

  function createUserSubmit(data: CreateUserFormData) {
    console.log(data)
  }


  async function handleNext(fields: FieldPath<CreateUserFormData> | FieldPath<CreateUserFormData>[] , callback: Function) {
    const result = await methods.trigger(fields, { shouldFocus: true })
  
    if(result) {
      callback()
    }
  }

  return (
    <FormProvider {...methods}>
      <Stack.Navigator initialRouteName='personalData' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='personalData' component={PersonalData}/>
        <Stack.Screen name='emailPassword' component={EmailPassword} />
        <Stack.Screen name='monthlyEarning' component={MonthlyEarning} />
        <Stack.Screen name='dayPayment' component={DayPayment} />
      </Stack.Navigator>
    </FormProvider>
  )
}
