import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BoxedIcon = ({ name, backgroundColor }) => {
  return (
    <View style={{backgroundColor, padding:4, borderRadius:6}}>
      <Ionicons name={name} size={22} color='white'/>
    </View>
  )
}

export default BoxedIcon