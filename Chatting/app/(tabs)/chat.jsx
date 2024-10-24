import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import {  StatusBar } from 'expo-status-bar' 
import Colors from './../../constants/Colors'



const { width, height } = Dimensions.get('window');

const Chat = () => {
  return (

    <View>
      <StatusBar style='light' />

      <Text>Welcome</Text>
    </View>





  )
}

export default Chat

