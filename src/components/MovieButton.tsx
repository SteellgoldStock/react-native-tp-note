import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type MovieButtonProps = {
  text: string;
  onPress: () => {};
}

export const MovieButton = ({ text, onPress }: MovieButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: 'darkslateblue',
    borderColor: 'darkslateblue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
})
