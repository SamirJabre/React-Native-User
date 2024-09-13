import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Seat = () => {
  return (
    <TouchableOpacity style={styles.seat}>
        <Text>1</Text>
        <View style={styles.status}></View>
    </TouchableOpacity>
  )
}

export default Seat

const styles = StyleSheet.create({
    seat:{
        height: 47,
        width: 40,
        borderRadius: 3,
        backgroundColor: 'white',
        margin: 7,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    status:{
        height: 6,
        width: '70%',
        borderRadius: 2,
        backgroundColor: 'green',
    },
})