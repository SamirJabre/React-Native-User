import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const busSeats = ({seatNumber,seatStatus}) => {
    
  return (
        <View style={styles.seat}>
            <Text>#{seatNumber}</Text>
            <View style={seatStatus === 'available' ? styles.available : styles.occupied}></View>
        </View>
  )
}

export default busSeats

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
    available:{
        height: 6,
        width: '70%',
        borderRadius: 2,
        backgroundColor: 'green',
    },
    occupied:{
        height: 6,
        width: '70%',
        borderRadius: 2,
        backgroundColor: 'red',
    },
})