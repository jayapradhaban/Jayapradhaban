import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const TabBar = ({ state, descriptors, navigation }) => {

    const icons ={
        chat: (props)=> <Ionicons name="chatbubble-outline" size={24} color="black" {...props} />,
        groups: (props)=> <Ionicons name="chatbubbles-outline" size={24} color="black" {...props} />,
        profile: (props)=> <Ionicons name="finger-print" size={24} color="black"  {...props} />
    }
 
const primcolor='#07B3FE';
const seccolor='#181B2A';


  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.name}
          style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
                icons[route.name]({
                    color: isFocused? primcolor :seccolor
                })
            }


            <Text style={{ 
                color: isFocused ? primcolor : seccolor,
                fontSize:14
                }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles=StyleSheet.create({
    tabbar:{
        position:'absolute',
        bottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        marginHorizontal:20,
        paddingVertical:10,
        borderRadius:50,
        borderCurve:'continuous',
        shadowColor:'black',
        shadowOffset:{width:0 , height:20},
        shadowRadius:10,
        shadowOpacity:0.1
    },
    tabbarItem:{
       flex:1,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        gap:4
    }
})

export default TabBar