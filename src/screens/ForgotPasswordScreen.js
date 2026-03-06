import { useState } from 'react'
import {
  ButtonCustom,
  ButtonLink,
  HeaderTitle,
  InputCustom,
  ScreenWrapper,
} from '../components'
import { useAuth } from '../hooks/useAuth'
import { showError, validators } from '../utils'

export const ForgotPasswordScreen = ({ navigation }) => {
  const { changePassword } = useAuth()
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const validateForm = async () => {
    if (!validators.required(email) || !validators.required(newPassword)) {
      showError("L'adresse email et le mot de passe sont requis.")
      return
    }

    if (!validators.email(email)) {
      showError("L'adresse email est invalide.")
      return
    }

    if (!validators.minLength(newPassword, 8)) {
      showError('Le mot de passe doit contenir au minimum 8 caractères.')
      return
    }

    try {
      await changePassword(email, newPassword)
      navigation.navigate('Connexion')
    } catch (error) {
      showError(error)
    }
  }

  return (
    <ScreenWrapper>
      <HeaderTitle text="Mot de passe oublié" />
      <InputCustom
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        type="email"
      />
      <InputCustom
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Mot de passe"
        type="password"
      />
      <ButtonCustom
        text="Modifier"
        onPress={validateForm}
      />
      <ButtonLink
        text="Se connecter"
        onPress={() => navigation.navigate('Connexion')}
      />
    </ScreenWrapper>
  )
}
