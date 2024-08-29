import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, BackHandler , SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

const home = () => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    AsyncStorage.getItem('Message')
    const backAction = () => {
      return true;
    };