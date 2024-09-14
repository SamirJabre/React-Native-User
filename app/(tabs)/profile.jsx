import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const profile = () => {

  const logOut = async () => {
    try{
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      alert('Logged out successfully');
      router.replace('/');
    }
    catch(error){
      console.error('Error logging out', error);
    }
  }

  return (
    <View>
    <TouchableOpacity onPress={logOut}>
        <Text>Log Out</Text>
    </TouchableOpacity>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})