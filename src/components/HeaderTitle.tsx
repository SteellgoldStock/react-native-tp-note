import { StyleSheet, Text } from 'react-native';

type HeaderProps = {
  text: string;
}

export const HeaderTitle = ({ text }: HeaderProps) => {
  return <Text style={styles.headerTitle}>{text}</Text>
}

const styles = StyleSheet.create({
  headerTitle: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
