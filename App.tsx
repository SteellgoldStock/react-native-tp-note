import { SQLiteProvider } from 'expo-sqlite';
import { Providers } from './src/navigation/MoviesLoader';
import StackNavigator from './src/navigation/StackNavigator';
import { migrateDbIfNeeded } from './src/services/database';

export default function App() {
  return (
    <SQLiteProvider databaseName="tp.db" onInit={migrateDbIfNeeded}>
      <Providers>
        <StackNavigator />
      </Providers>
    </SQLiteProvider>
  )
}
