import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { MoviesScreen } from '../screens'
import { AddMovieScreen } from '../screens/AddMovieScreen'
import { MovieScreen } from '../screens/MovieScreen'

const optionsParams: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center'
}

export type RootStackParamList = {
  Movies: { reload?: boolean } | undefined;
  AddMovie: undefined;
  Movie: { movieId: number } | undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movies">
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          initialParams={{
            reload: false
          }}
          options={{
            ...optionsParams,
            headerSearchBarOptions: {
              placeholder: "Chercher un film"
            },
            headerTitle: "Films"
          }}
        />

        <Stack.Screen
          name="AddMovie"
          component={AddMovieScreen}
          options={{ ...optionsParams, headerTitle: "Ajouter un film" }}
        />

        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{ ...optionsParams, headerTitle: "Détail du film" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
