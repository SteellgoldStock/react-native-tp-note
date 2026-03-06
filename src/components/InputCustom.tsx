import { StyleSheet, TextInput } from 'react-native';

type InputProps = {
  value: string;
  placeholder: string;
  type: string;
  onChangeText: () => {};
}

export const InputCustom = ({ value, onChangeText, placeholder, type }: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="gray"
      keyboardType={type === 'email' ? 'email-address' : 'default'}
      autoCapitalize={type === 'email' ? 'none' : undefined}
      secureTextEntry={type === 'password'}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 16,
    width: '100%',
  },
})
