import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { useRouter,Link } from 'expo-router';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaskInput from 'react-native-mask-input';
import { ActivityIndicator } from 'react-native';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const KeyboardVerticalOffset = Platform.OS === 'android' ? 0 : 90;
  const { bottom } = useSafeAreaInsets();
  const { signUp, setActive } = useSignIn();
  const { signIn } = useSignIn();





  const openlink = () => {
    Linking.openURL('https://jayapradhaban.ps8Network.com');
  };

  const chat = () => {
    setLoading(true)

    setTimeout(() =>{
      setLoading(false);
      router.push(`/(tabs)/chats`)
    },2000)
  }

  const sendOTP = async () => {
    setLoading(true);
    try {
      await signUp.create({
        phoneNumber
      });

      signUp.preparePhoneNumberVerification();

      router.push(`/verify/${phoneNumber}`);

    } catch (error) {
      console.log(error)
      if (isClerkAPIResponseError(error)) {
        if (error.errors[0].code === 'form_identifier_exists') {
          console.log('user exists')
          await trySignIn()
        } else {
          setLoading(false);
          Alert.alert('Error', error.errors[0].message)
        }
      }

    }
  };
  const trySignIn = async () => {
    const { supportedFirstFactors } = await signIn.create({
      identifier: phoneNumber,
    })

    const firstPhoneFactor: any = supportedFirstFactors.find((factor: any) => {
      return factor.strategy === 'phone_code'
    })

    const { phoneNumberId } = firstPhoneFactor

    await signIn.prepareFirstFactor({
      strategy: 'phone_code',
      phoneNumberId
    });

    router.push(`/verify/${phoneNumber}?signin=true`);
    setLoading(false);

  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        {loading && (
          <View style={[StyleSheet.absoluteFill, styles.loading]}>
            <ActivityIndicator size="large" color={Colors.DarkBlue} />
            <Text style={{ fontSize: 18, padding: 10 }}>Moving to REZEN...</Text>
          </View>
        )}
        <Text style={styles.description}>
          REZEN will need to verify your account. Carrier charges may apply
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>India</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.DARK} />
          </View>
          <View style={styles.seperator} />

          <MaskInput
            value={phoneNumber}
            keyboardType="numeric"
            autoFocus
            placeholder="+91 - Enter your mobile number"
            style={styles.input}
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(masked);
            }}
            mask={[
              '+',
              '9',
              '1',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />


        </View>

        <Text style={styles.legal}>
          You must be{' '}
          <Text style={styles.link} onPress={openlink}>
            at least 18 years old
          </Text>{' '}
          to register. learn how REZEN works with the{' '}
          <Text style={styles.link} onPress={openlink}>
            Top  Companies
          </Text>
        </Text>

        <View style={{ flex: 1 }} />

       
        <TouchableOpacity
          style={[styles.button, phoneNumber !== '' ? styles.enabled : null, { marginBottom: bottom }]}
          disabled={phoneNumber === ''}
          onPress={chat}>
          <Text style={[styles.buttonText, phoneNumber !== '' ? styles.enabled : null]}>Next</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.BabyBlue,
    gap: 20
  },
  description: {
    fontSize: 14,
    color: 'black'
  },
  list: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 10
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 18,
    color: 'black'
  },
  seperator: {
    width: '100%',
    height: 0.6,
    backgroundColor: 'black',
    opacity: 1,
  },
  legal: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
  link: {
    color: 'blue',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.BabyBlue,
    padding: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: Colors.DarkBlue,
    color: Colors.BabyBlue
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 16,
    padding: 6,
    marginTop: 10
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: Colors.BabyBlue,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default Page