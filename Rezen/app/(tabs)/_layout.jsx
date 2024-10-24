import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
        <Tabs 
        screenOptions={{
          tabBarStyle:{
            backgroundColor:Colors.BabyBlue,
            
          },
          tabBarActiveTintColor:Colors.BabyBlue,
          tabBarInactiveTintColor: Colors.DarkBlue,
          tabBarInactiveBackgroundColor:Colors.LightBlue,
          tabBarActiveBackgroundColor:Colors.DarkBlue,
          headerStyle:{
            backgroundColor:Colors.BabyBlue,
          },
          headerShadowVisible:false,
          headerTintColor:Colors.DarkBlue
        }}
        >
            <Tabs.Screen name='chats'options={{
              title:'Chats',
              headerTitleAlign:'center',
              headerShown:false,
              tabBarIcon:({size, color}) =>(
                  <Ionicons name="chatbubbles" size={size} color={color}/>
              ),
            }}/>
            <Tabs.Screen name='calls'options={{
              title:'Calls',
              headerTitleAlign:'center',
              headerShown:false,
              tabBarIcon:({size, color}) =>(
                  <MaterialCommunityIcons name="phone-outline" size={size} color={color}/>
              ),
            }}/>
            <Tabs.Screen name='updates'options={{
              title:'Updates',
              headerTitleAlign:'center',
              tabBarIcon:({size, color}) =>(
                  <MaterialIcons name="update" size={size} color={color}/>
              ),
            }}/>
            <Tabs.Screen name='community'options={{
              title:'Communities',
              headerTitleAlign:'center',
              tabBarIcon:({size, color}) =>(
                  <MaterialIcons name="people" size={size} color={color}/>
              ),
            }}/>
            <Tabs.Screen name='settings'options={{
              title:'Settings',
              headerTitleAlign:'center',
              tabBarIcon:({size, color}) =>(
                  <Ionicons name="settings" size={size} color={color}/>
              ),
            }}/>
        </Tabs>
    </GestureHandlerRootView>
  )
}

export default Layout