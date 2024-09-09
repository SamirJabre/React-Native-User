import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Recent = () => {
  return (
    <TouchableOpacity style={styles.recent}>

      <View style={styles.fromTo}>
      <Text style={styles.recentText}>From: </Text>
      <Text style={styles.recentText}>To: </Text> 
      </View>

      <View style={styles.otherInfo}>
      <Text style={styles.recentText}>Miles Traveled: </Text>
      <Text style={styles.recentText}>Date: </Text> 
      </View>

      </TouchableOpacity>
  )
}

export default Recent

const styles = StyleSheet.create({
    recent:{
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '15%',
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    marginTop: 10,
  },
})