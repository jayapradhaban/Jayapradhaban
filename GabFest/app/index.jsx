import { View, Text, StyleSheet, Linking } from 'react-native';
import React, { useState } from 'react';
import Colors from './../constants/Colors';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';

const HomePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const openlink = () => {
    Linking.openURL('https://jayapradhaban.ps8Network.com');
  };

  const chatSection = () => {
    setLoading(true);  // Start the loading process
    setTimeout(() => {
      setLoading(false);
      router.push('/(tabs)/chats');  // Redirect after 2 seconds
    }, 2000);  // 2 seconds delay
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <Image source={require('./../assets/images/Loading.png')}/>
          <ActivityIndicator size="large" color={Colors.BabyBlue} />
          <Text style={{ fontSize: 18, padding: 10 }}>Start Chatting</Text>
        </View>
      ) : (
        <>
          <Image source={require('./../assets/images/GabFest.png')} style={styles.logo} />
          <Text style={styles.headline}>Welcome to GabFest</Text>
          <Text style={styles.description}>Read our{' '}
            <Text style={styles.link} onPress={openlink}> Privacy Policy</Text>.{' Tap "Agree & Continue" to accept the '}
            <Text style={styles.link} onPress={openlink}>Terms of Service</Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={chatSection}>
            <Text style={styles.buttontext}>Agree & Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LightBlue,
  },
  logo: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: Colors.DarkBlue,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 80,
    color: Colors.DarkBlue,
    fontWeight: '700',
  },
  link: {
    color: Colors.BabyBlue,
    fontWeight: '900',
  },
  button: {
    width: '100%',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 22,
    color: Colors.DarkBlue,
    fontWeight: 'bold',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
