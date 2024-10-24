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


const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='chats'
                options={{
                    title: 'GabFest',
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

export default _layout