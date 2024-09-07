import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const profile = () => {
  return (
    <View>
    <TouchableOpacity onPress={async()=>{
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        router.replace('/');
    }}>
        <Text>Log Out</Text>
    </TouchableOpacity>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})