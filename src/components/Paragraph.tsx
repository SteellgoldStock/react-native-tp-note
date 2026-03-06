import { StyleSheet, Text } from 'react-native';

type ParagraphProps = {
  text: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <Text style={styles.paragraph}>{text}</Text>
}

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 10,
    lineHeight: 20,
    textAlign: 'center'
  }
})
