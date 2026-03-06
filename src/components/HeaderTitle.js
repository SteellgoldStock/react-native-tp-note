import { StyleSheet, Text } from 'react-native'

export const HeaderTitle = ({ text }) => {
  return <Text style={styles.headerTitle}>{text}</Text>
}

const styles = StyleSheet.create({
  headerTitle: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
