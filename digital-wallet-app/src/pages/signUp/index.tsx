import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { PersonalData } from './personalData'
import zod from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"


const zodSchema = zod.object({
  name: zod.string(),
  cpf: zod.string()
})

type FormProps = zod.infer<typeof zodSchema>

type StackNavigationScreens = {
  personalData: undefined
}

export function SignUpPage() {

  const Stack = createNativeStackNavigator<StackNavigationScreens>()

  const {watch, handleSubmit} = useForm<FormProps>({resolver: zodResolver(zodSchema)})

  return (
      <Stack.Navigator initialRouteName='personalData' screenOptions={{headerShown: false}}>
        <Stack.Screen name='personalData' component={PersonalData} />
      </Stack.Navigator>
  )
}