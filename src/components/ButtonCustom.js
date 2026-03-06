import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ButtonCustom = ({ text, onPress, secondary }) => {
  return (
    <TouchableOpacity
      style={[styles.button, secondary ? styles.buttonSecondary : styles.buttonPrimary]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, secondary ? styles.buttonTextSecondary : styles.buttonTextPrimary]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    boxShadow: '0 1px 2px rgba(0,0,0, 0.05)',
    marginTop: 25,
    padding: 10,
    width: '100%'
  },
  buttonPrimary: {
    backgroundColor: 'purple',
    borderColor: 'purple'
  },
  buttonSecondary: {
    borderColor: 'lightgray'
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  buttonTextPrimary: {
    color: 'white'
  },
  buttonTextSecondary: {
    color: 'purple'
  }
})
