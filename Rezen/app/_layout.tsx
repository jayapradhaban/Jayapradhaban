
import Colors from '@/constants/Colors';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ClerkProvider, useAuth, useOAuth } from '@clerk/clerk-expo';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

import * as SecureStore from 'expo-secure-store';
import { View } from 'react-native';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (error) {
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (error) {
      return
    }
  }
}

const InitialLayout = () => {

  const router = useRouter();
  const segments = useSegments();
  const { isLoaded, isSignedIn } = useAuth();

  const [loaded, error] = useFonts({
    Img: require('./../assets/images/rezen.png')
  });

  useEffect(() => {
    if (error) throw error;
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  },[loaded])

  useEffect(() =>{
    if(!isLoaded) return;

    const inTabsGroup = segments[0] === '(tabs)'

    console.log('isSignedIn changed', isSignedIn);

    if (isSignedIn && !inTabsGroup) {
      router.replace('/(tabs)/chats')
    } else if (!isSignedIn) {
      router.replace('/')
    }
  },[isSignedIn])

  if (!loaded || !isLoaded) {
    return <View/>;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{
        headerTitle: 'Enter Your Mobile Number',
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }} />
      <Stack.Screen name="verify/[phone]" options={{
        headerBackTitle: 'Edit Number',
        headerBackTitleVisible: true,
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
        headerBackVisible: false,
        headerTitleAlign: 'center',
      }} />
    </Stack>

  )
}


const RootLayout = () => {


  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}

export default RootLayout;
