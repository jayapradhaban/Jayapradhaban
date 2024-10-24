import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
   <Stack>
     <StatusBar style='light' />
    <Stack.Screen name='index' options={{
        headerShown:false,
    }}/>
    <Stack.Screen name='(tabs)' options={{
      headerShown:false
    }}/>

   </Stack>
  )
}

export default RootLayout