import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'

const home = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('Message')
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>home {message}</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})