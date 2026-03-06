import { Alert } from 'react-native'

export const showError = (error) => {
  const message =
    typeof error === 'string'
      ? error
      : error instanceof Error
        ? error.message
        : 'Une erreur est survenue.'
  Alert.alert('Erreur', message)
}
