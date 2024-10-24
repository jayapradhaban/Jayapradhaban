import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="chats"
        options={{
          header: () => <CustomHeader />, // Use the custom header
        }}
      />
    </Stack>
  );
};

// Custom Header Component
const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Ionicons
          name="ellipsis-horizontal-circle-outline"
          size={30}
          color={Colors.DarkBlue}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Chats</Text>
      <TouchableOpacity>
        <Ionicons
          name="search-outline"
          size={25}
          color={Colors.DarkBlue}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.BabyBlue,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    height:100,
    paddingTop:50
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.DarkBlue,
  },
});

export default _layout;
