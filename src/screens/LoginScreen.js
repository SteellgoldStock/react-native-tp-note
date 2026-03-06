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

export const LoginScreen = ({ navigation }) => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateForm = async () => {
    if (!validators.required(email) || !validators.required(password)) {
      showError("L'adresse email et le mot de passe sont requis.")
      return
    }

    if (!validators.email(email)) {
      showError("L'adresse email est invalide.")
      return
    }

    if (!validators.minLength(password, 8)) {
      showError('Le mot de passe doit contenir au minimum 8 caractères.')
      return
    }

    try {
      const username = await login(email, password)
      navigation.navigate('Tableau de bord', { username })
    } catch (error) {
      showError(error)
    }
  }

  return (
    <ScreenWrapper>
      <HeaderTitle text="Connexion" />
      <InputCustom
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        type="email"
      />
      <InputCustom
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        type="password"
      />
      <ButtonCustom
        text="Connexion"
        onPress={validateForm}
      />
      <ButtonLink
        text="S'inscrire"
        onPress={() => navigation.navigate('Inscription')}
      />
      <ButtonLink
        text="Mot de passe oublié ?"
        onPress={() => navigation.navigate('Mot de passe oublié')}
      />
    </ScreenWrapper>
  )
}
