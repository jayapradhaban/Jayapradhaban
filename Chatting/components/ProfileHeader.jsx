import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from './../constants/Colors'

const ProfileHeader = () => {
  return (
    <View style={sty.upperbox}>
      <View >
        <Text style={sty.wel}>Welcome ! ! !</Text>
        <Text style={sty.nme}>Jayapradhaban</Text>


      </View>
      <Image source={require('./../assets/images/3.jpeg')} style={sty.img}/>
    </View>
  )
}

export default ProfileHeader


const sty = StyleSheet.create({
    upperbox: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20,
      alignItems:'center',
      marginTop:50,
      backgroundColor:'#171A29',
      padding:20,
      borderRadius:20,
      height:100,
      
      
      
    },
    img:{
      width:40,
      height:40,
      borderRadius:100
    },
    wel:{
      fontSize:20,
      fontWeight:'600',
      color:'#07B3FE'
  
    },
    nme:{
      fontSize:25,
      color:'#07B3FE'
    }
  
  })