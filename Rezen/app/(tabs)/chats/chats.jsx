import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import chats from '../../../assets/data/chats.json'
import { defaultStyles } from '../../../constants/Styles'
import Colors from '../../../constants/Colors'
import { Image } from 'react-native'

const Chats = () => {
  const [items, setItems] = useState(chats)

  return (
    <View style={{ flex: 1,}}>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={[defaultStyles.block]}>
          <FlatList
            data={items}
            scrollEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
            renderItem={({ item }) => (
              <View style={[defaultStyles.item]}>
                <Image source={{ uri: item.img }} style={styles.avatar} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default Chats