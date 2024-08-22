import { StatusBar } from 'expo-status-bar';
import { Text , View } from 'react-native';
import { Link , SplashScreen  } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
export default function App() {

  const [fontsLoaded , error] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);


  if(!fontsLoaded && !error) return null;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-InterRegular">Welcome to iBus</Text>
      <Link href="/register" style={{color:"purple"}}>Go To register Page</Link>
      <Link href="/login" style={{color:"green"}}>Go To login Page</Link>
      <StatusBar style="auto" />
    </View>
  );
}