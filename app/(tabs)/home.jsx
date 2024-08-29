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

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}></View>

    <View style={styles.upperbox}>

      <View style={styles.greeting}>
        <View style={styles.text}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Samir</Text>
        </View>
        <View style={styles.notificationIcon}>
        <TouchableOpacity><Image source={require('../../assets/icons/notification.png')} style={{height:'100%', width:'100%'}}/></TouchableOpacity>
        </View>
        </View>

        <View style={styles.dateContainer}>
        <Text style={styles.date}>WED</Text>
        <Text style={styles.date}>2024</Text>
        <Text style={styles.date}>08 10</Text>
        </View>