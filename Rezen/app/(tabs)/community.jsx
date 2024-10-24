import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const Page = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/rezen.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LightBlue
  },
  logo: {
    width: '100%',
    height: 400,
  }
})


export default Page