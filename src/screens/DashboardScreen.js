import { ButtonCustom, HeaderTitle, Paragraph, ScreenWrapper } from '../components'

export const DashboardScreen = ({ navigation, route }) => {
  const username = route.params?.username ?? ''

  return (
    <ScreenWrapper>
      <HeaderTitle text="Vous êtes connecté" />
      <Paragraph text={`Bienvenue ${username} sur notre application de connexion inscription`} />
      <ButtonCustom
        text="Déconnexion"
        onPress={() => navigation.navigate('Accueil')}
        secondary
      />
    </ScreenWrapper>
  )
}
