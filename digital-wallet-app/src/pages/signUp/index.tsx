import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { PersonalData } from './personalData'
import zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { EmailPassword } from './emailPassword'
import { MonthlyEarning } from './monthlyEarning'
import { DayPayment } from './dayPayment'


const zodSchema = zod.object({
  name: zod.string(),
  cpf: zod.string()
})

type FormProps = zod.infer<typeof zodSchema>

type StackNavigationScreens = {
  personalData: undefined;
  emailPassword: undefined;
  montlyEarning: undefined;
  dayPayment: undefined;
}

export function SignUpPage() {

  const Stack = createNativeStackNavigator<StackNavigationScreens>()

  const { watch, handleSubmit } = useForm<FormProps>({ resolver: zodResolver(zodSchema) })

  return (
    <Stack.Navigator initialRouteName='personalData' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='personalData' component={PersonalData} />
      <Stack.Screen name='emailPassword' component={EmailPassword} />
      <Stack.Screen name='montlyEarning' component={MonthlyEarning} />
      <Stack.Screen name='dayPayment' component={DayPayment} />
    </Stack.Navigator>
  )
}