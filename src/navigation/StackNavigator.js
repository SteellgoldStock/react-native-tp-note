import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DashboardScreen, ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen } from '../screens'

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Connexion"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inscription"
          component={RegisterScreen}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="Tableau de bord"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mot de passe oublié"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
