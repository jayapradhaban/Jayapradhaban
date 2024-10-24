import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import calls from '../../../assets/data/calls.json'
import { defaultStyles } from '../../../constants/Styles'
import Colors from '../../../constants/Colors'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { format } from 'date-fns';

const Call = () => {

  const [items, setItems] = useState(calls)

  return (
    <View style={{ flex: 1, }}>
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

                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ fontSize: 18, color: item.missed ? Colors.red : '#000' }}>
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: 'row', gap: 4 }}>
                    <Ionicons
                      name={item.video ? 'videocam' : 'call'}
                      size={16}
                      color={Colors.gray}
                    />
                    <Text style={{ color: Colors.gray, flex: 1 }}>
                      {item.incoming ? 'Incoming' : 'Outgoing'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 6,
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: Colors.DarkBlue }}>{format(item.date, 'MM.dd.yy')}</Text>
                  <Ionicons
                    name="call-outline"
                    size={24}
                    color={Colors.DarkBlue}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Call