import { StyleSheet, Text } from 'react-native'

export const Paragraph = ({ text }) => {
  return <Text style={styles.paragraph}>{text}</Text>
}

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 10,
    lineHeight: 20,
    textAlign: 'center'
  }
})
