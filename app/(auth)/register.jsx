import { StyleSheet, Text, View , ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const register = () => {
  return (
    <SafeAreaView style={styles.safearea}>
    <ImageBackground source={require('../../assets/two.jpg')} style={styles.img}></ImageBackground>
    <View style={styles.container}>
      <Text>Register</Text>
      <Text>Back to index</Text>
    </View>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
  safearea:{
    height:'100%',
    width:'100%',
  },
  img:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
})