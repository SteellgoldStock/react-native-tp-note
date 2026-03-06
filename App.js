import { SQLiteProvider } from 'expo-sqlite'
import { migrateDbIfNeeded } from './src/services/database'
import StackNavigator from './src/navigation/StackNavigator'

export default function App() {
  return (
    <SQLiteProvider databaseName="app.db" onInit={migrateDbIfNeeded}>
      <StackNavigator />
    </SQLiteProvider>
  )
}
