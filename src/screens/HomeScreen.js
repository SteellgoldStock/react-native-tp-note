import { ButtonCustom, HeaderTitle, ScreenWrapper } from '../components'

export const HomeScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <HeaderTitle text="Connexion / Inscription" />
      <ButtonCustom
        text="Connexion"
        onPress={() => navigation.navigate('Connexion')}
      />
      <ButtonCustom
        text="Inscription"
        onPress={() => navigation.navigate('Inscription')}
        secondary
      />
    </ScreenWrapper>
  )
}
