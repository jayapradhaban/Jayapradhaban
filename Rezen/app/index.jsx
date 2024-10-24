import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import React from 'react'
import Colors from './../constants/Colors'
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const Page = () => {
const openlink = () => {
  Linking.openURL('https://jayapradhaban.ps8Network.com');
};

  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/rezen.png')} style={styles.logo} />
      <Text style={styles.headline}>Welcome to REZEN</Text>
      <Text style={styles.description}>Read our{' '}
        <Text style={styles.link} onPress={openlink}> Privacy Policy</Text>.{' Tap "Agree & Continue" to accept the '}
        <Text style={styles.link} onPress={openlink}>Tearms of Service</Text>
      </Text>
      <Link href={"/otp"} replace asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Agree & Continue</Text>
      </TouchableOpacity>
      
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BabyBlue
  },
  logo: {
    width: '100%',
    height: 400,
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description:{
    fontSize:14,
    textAlign:'center',
    marginBottom:80,
    color:'black',
    fontWeight:'700'
  },
  link:{
    color:Colors.DarkBlue,
    fontWeight:'900'
  },
  button:{
    width:'100%',
    alignItems:'center',
    
  },
  buttontext:{
    fontSize:22,
    color:Colors.DarkBlue,
    fontWeight: 'bold',
  }
})


export default Page