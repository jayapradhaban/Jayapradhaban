import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Colors from '../../../constants/Colors'

const CustomHeaderBackground = () => {
  return (
    <View style={{
      backgroundColor: Colors.BabyBlue,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      height: '100%',
    }} />
  );
};

const CallLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='call'
        options={{
          title: 'Calls',
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBackground: () => <CustomHeaderBackground />,
          headerSearchBarOptions: {
            placeholder: 'Search'
          },
        }}
      />
    </Stack>
  )
}

export default CallLayout