import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown:false,
        headerBackVisible: false,
      }}/>
      <Stack.Screen name='(tabs)' options={{
        headerShown:false,
        headerBackVisible: false,
      }}/>
      
    </Stack>
  )
}

export default HomeLayout