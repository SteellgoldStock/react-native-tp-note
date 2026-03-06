import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
  inline: boolean;
  onPress: () => {};
}

export const ButtonLink = ({ text, onPress, inline }: ButtonProps) => {
  const content = <Text style={styles.link}>{text}</Text>

  if (inline) {
    return <Text onPress={onPress}>{content}</Text>
  }

  return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  link: {
    color: 'purple',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  }
})
