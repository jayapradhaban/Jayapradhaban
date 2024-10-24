import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'
import ChatHeader from '../../components/ChatHeader'
import GroupHeader from '../../components/GroupHeader'
import ProfileHeader from '../../components/ProfileHeader'

const MainLayout = () => {
  return (
    <Tabs
        tabBar={props=><TabBar{...props} />}
    >
        <Tabs.Screen  name='chat' options={{
            title:'Chat',
            header:()=> <ChatHeader />
        }}/>
        <Tabs.Screen  name='groups' options={{
            title:'Groups',
            header: () => <GroupHeader />
        }}/>
        <Tabs.Screen  name='profile' options={{
            title:'Profile',
            header: () => <ProfileHeader />
        }}/>
    </Tabs>
    
  )
}

export default MainLayout

const styles = StyleSheet.create({})