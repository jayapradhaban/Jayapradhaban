
import { Ionicons } from '@expo/vector-icons';
import BoxedIcon from '../../../components/BoxedIcon';
import Colors from '../../../constants/Colors';
import { useAuth } from '@clerk/clerk-expo';
import { defaultStyles } from '../../../constants/Styles';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Page = () => {
  const devices = [
    {
      name: 'Broadcast Lists',
      icon: 'megaphone',
      backgroundColor: Colors.BabyBlue,
    },
    {
      name: 'StarBabyBlue Messages',
      icon: 'chatbubble',
      backgroundColor: Colors.BabyBlue,
    },
    {
      name: 'Linked Devices',
      icon: 'laptop-outline',
      backgroundColor: Colors.BabyBlue,
    },
  ];

  const items = [
    {
      name: 'Account',
      icon: 'key',
      backgroundColor: Colors.BabyBlue,
    },
    {
      name: 'Privacy',
      icon: 'lock-closed',
      backgroundColor: '#33A5D1',
    },
    {
      name: 'Chats',
      icon: 'logo-whatsapp',
      backgroundColor: Colors.BabyBlue,
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      backgroundColor: Colors.BabyBlue,
    },
    {
      name: 'Storage and Data',
      icon: 'repeat',
      backgroundColor: Colors.BabyBlue,
    },
  ];

  const support = [
    {
      name: 'Help',
      icon: 'information',
      backgroundColor: Colors.BabyBlue,
    },
    {
      name: 'Tell a Friend',
      icon: 'heart',
      backgroundColor: Colors.BabyBlue,
    },
  ];

  const { signOut } = useAuth();

  const onSignOut = () => {
    signOut();
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 40 }}>


        <View style={defaultStyles.block}>
          <FlatList
            data={devices}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
            renderItem={({ item }) => (
              <View style={defaultStyles.item}>
                <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor} />

                <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
              </View>
            )}
          />
        </View>
        <View style={defaultStyles.block}>
          <FlatList
            data={items}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
            renderItem={({ item }) => (
              <View style={defaultStyles.item}>
                <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor} />

                <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
              </View>
            )}
          />
        </View>

        <View style={defaultStyles.block}>
          <FlatList
            data={support}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
            renderItem={({ item }) => (
              <View style={defaultStyles.item}>
                <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor} />

                <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
              </View>
            )}
          />
        </View>

        <TouchableOpacity onPress={onSignOut}>
          <Text
            style={{
              color: Colors.BabyBlue,
              fontSize: 18,
              textAlign: 'center',
              paddingVertical: 14,
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView >
    </View >
  );
};

export default Page;