import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { PersonalData } from './personalData'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { EmailPassword } from './emailPassword'
import { MonthlyEarning } from './monthlyEarning'
import { DayPayment } from './dayPayment'


const createUserSchema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  cpf: z.string().nonempty('Cpf obrigatório')
})

type CreateUserFormData = z.infer<typeof createUserSchema>

export type SignUpNavigationScreens = {
  personalData: undefined;
  emailPassword: undefined;
  monthlyEarning: undefined;
  dayPayment: undefined;
}

export function SignUpPage() {

  const Stack = createNativeStackNavigator<SignUpNavigationScreens>()

  const { 
    watch,
    handleSubmit
  } = useForm<CreateUserFormData>({ resolver: zodResolver(createUserSchema) })

  function createUserSubmit(data: CreateUserFormData) {
    console.log(data)
  }

  return (
    <Stack.Navigator initialRouteName='personalData' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='personalData' component={PersonalData} />
      <Stack.Screen name='emailPassword' component={EmailPassword} />
      <Stack.Screen name='monthlyEarning' component={MonthlyEarning} />
      <Stack.Screen name='dayPayment' component={DayPayment} />
    </Stack.Navigator>
  )
}