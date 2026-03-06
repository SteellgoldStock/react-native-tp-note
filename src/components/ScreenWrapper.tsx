import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

export const ScreenWrapper = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: '12.5%'
  }
})
