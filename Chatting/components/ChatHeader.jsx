import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from './../constants/Colors'

const ChatHeader = () => {
  return (
    <View style={stylesa.txtbox}>
      <Text style={stylesa.txt}>Chats</Text>
    </View>
  )
}

export default ChatHeader

const stylesa = StyleSheet.create({
    txt: {
      fontSize: 25,
      paddingLeft:20,
      marginTop: 30,
      fontWeight:'600'
    },
    txtbox: {
      padding: 10,
      backgroundColor: Colors.LighterCyan,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  
  
    }
  
  })