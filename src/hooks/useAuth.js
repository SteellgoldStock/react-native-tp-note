import { useSQLiteContext } from 'expo-sqlite'
import { getUser, insertUser, updatePassword } from '../services/database'

export const useAuth = () => {
  const db = useSQLiteContext()

  const changePassword = async (email, password) => {
    return await updatePassword(db, email, password)
  }

  const login = async (email, password) => {
    return await getUser(db, email, password)
  }

  const register = async (name, email, password) => {
    return await insertUser(db, name, email, password)
  }

  return { changePassword, login, register }
}
