import { useState } from 'react'
import { Text } from 'react-native'
import {
  ButtonCustom,
  ButtonLink,
  HeaderTitle,
  InputCustom,
  ScreenWrapper,
} from '../components'
import { useAuth } from '../hooks/useAuth'
import { showError, validators } from '../utils'

export const RegisterScreen = ({ navigation }) => {
  const { register } = useAuth()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const validateForm = async () => {
    if (
      !validators.required(email) ||
      !validators.required(name) ||
      !validators.required(password)
    ) {
      showError("Le nom, l'adresse email et le mot de passe sont requis.")
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
      await register(name, email, password)
      navigation.navigate('Connexion')
    } catch (error) {
      showError(error)
    }
  }

  return (
    <ScreenWrapper>
      <HeaderTitle text="Inscription" />
      <InputCustom
        value={name}
        onChangeText={setName}
        placeholder="Nom"
      />
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
        text="Inscription"
        onPress={validateForm}
      />
      <Text style={{ marginTop: 10 }}>
        Déjà inscrit ?{' '}
        <ButtonLink
          text="Connectez-vous"
          onPress={() => navigation.navigate('Connexion')}
          inline
        />
      </Text>
    </ScreenWrapper>
  )
}
