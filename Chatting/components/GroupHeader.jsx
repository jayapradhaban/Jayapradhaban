import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from './../constants/Colors'

const GroupHeader = () => {
  return (
    <View style={stylesab.txtbox}>
      <Text style={stylesab.txt}>Groups</Text>
    </View>
  )
}

export default GroupHeader

const stylesab = StyleSheet.create({
    txt:{
      fontSize:25,
      paddingLeft:20,
      marginTop:30,
      fontWeight:'600'
    },
    txtbox:{
      padding:10,
      borderBottomEndRadius:25,
      borderBottomStartRadius:25,
      backgroundColor:'#07B3FE',
      
    }
  
  })