import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationBar from '../../components/NavigationBar'

const tripInfo = () => {
  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>

    </View>
    <NavigationBar/>    
    </SafeAreaView>
  )
}

export default tripInfo

const styles = StyleSheet.create({
    safearea:{
    height: '100%',
    width: '100%',
    paddingTop: 0,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  container:{
    width : '100%',
    height: '80%',
    backgroundColor:'blue',
  },
})