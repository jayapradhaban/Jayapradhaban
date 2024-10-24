import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Colors from './../../constants/Colors'

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.BabyBlue,
        },
        tabBarActiveTintColor: Colors.White,
        tabBarInactiveTintColor: Colors.DarkBlue,
        tabBarInactiveBackgroundColor: Colors.BabyBlue,
        tabBarActiveBackgroundColor: Colors.DarkBlue,
        headerStyle: {
          backgroundColor: Colors.BabyBlue,
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.DarkBlue,
        headerTitleAlign:'center'
      }}

    >
      <Tabs.Screen name='chats'
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }} />
      <Tabs.Screen name='groups' 
      options={{
        title: 'Groups',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="people" size={size} color={color} />
        ),
      }}/>
      <Tabs.Screen name='calls' 
      options={{
        headerShown:false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="phone-outline" size={size} color={color} />
        ),
      }}/>
    </Tabs>
  )
}

export default TabLayout