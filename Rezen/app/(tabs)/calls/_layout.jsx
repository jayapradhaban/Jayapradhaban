import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Colors from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen 
        name='index'
        options={{
            title:'Calls',
            header: () => <CustomHeader />,
        }}
        />
    </Stack>
  )
}



const CustomHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Calls</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor={Colors.DarkBlue}
        />
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="call-outline" color={Colors.DarkBlue} size={30} />
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: Colors.BabyBlue,
      paddingTop: 40, // Adjust for safe area on devices with notches
      paddingHorizontal: 15,
      paddingBottom: 10,
      display:'flex',
      flexDirection:'row',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.DarkBlue,
      marginBottom: 8,
    },
    searchBar: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 15,
      height: 40,
      marginBottom: 0,
      width:'70%',
      marginLeft:20
    },
    iconButton: {
      position: 'absolute',
      right: 15,
      top: 45, // Adjust to align with your layout
    },
  });
  

export default Layout