import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';

const CELL_COUNT = 6

const Page = () => {
  const { phone, signin } = useLocalSearchParams();
  const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode
  });

  const { signUp, setActive } = useSignIn();
  const { signIn } = useSignIn();

  useEffect(() => {
    if (code.length === 6) {
      if (signin === 'true') {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const verifyCode = async () => {
    try {
      await signUp.attemptPhoneNumberVerification({
        code,
      });

      await setActive({ session: signUp.createdSessionId });
    } catch (error) {
      console.log('error', JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        Alert.alert('Error', error.errors[0].message)
      }
    }
  }

  const verifySignIn = async () => {
    try {
      await signIn.attemptFirstFactor({
        strategy: 'phone_code',
        code,
      })

      await setActive({ session: signin.createdSessionId })
    } catch (error) {
      console.log('error', JSON.stringify(error, null, 2))
      if (isClerkAPIResponseError(error)) {
        Alert.alert('Error', error.errors[0].message)
      }
    }
  };

  const resendCode = async () => {
    try {
      if (signin === 'true') {
        const { supportedFirstFactors } = await signIn.create({
          identifier: phone,
        });

        const firstPhoneFactor: any = supportedFirstFactors.find((factor: any) => {
          return factor.strategy === 'phone_code';
        });

        const { phoneNumberId } = firstPhoneFactor;

        await signIn.prepareFirstFactor({
          strategy: 'phone_code',
          phoneNumberId,
        });
      } else {
        await signUp.create({
          phoneNumber: phone,
        });
        signUp.preparePhoneNumberVerification();
      }
    } catch (err) {
      console.log('error', JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert('Error', err.errors[0].message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: phone }} />
      <Text style={styles.legal}>We have sent you an SMS with a code to the number above</Text>
      <Text style={styles.legal}>To complete your phone number verification, please enter the 6-digit code</Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cellRoot, isFocused && styles.focuscell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />

      <Link href={"/(tabs)/chats"} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.button} onPress={resendCode}>
          <Text style={styles.buttonText}>Haven't recieved the OTP</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.LIGHT,
    gap: 20
  },
  legal: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.black,
  },
  button: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.DARK,
    fontSize: 18,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 260,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 8
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1.5
  },
  cellText: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center'
  },
  focuscell: {
    paddingBottom: 4,
    borderBottomColor: '#000',
    borderBottomWidth: 2
  }

})


export default Page