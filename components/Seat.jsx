import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Seat = ({seatNumber,seatStatus,setSelectedSeat,selectedSeat}) => {

    const [selectSeat,setSelectSeat] = useState(false);

    const handleSeats = () => {
        if (seatStatus === 'occupied') {
            return;
        }
        setSelectedSeat(seatNumber);
        setSelectSeat(!selectSeat);
        console.log(selectedSeat);
    };

    useEffect(() => {
        if (selectedSeat !== seatNumber) {
            setSelectSeat(false);
        }
    }, [selectedSeat]);

  return (
        <TouchableOpacity style={styles.seat} onPress={handleSeats}>
            <Text>#{seatNumber}</Text>
            <View style={selectSeat ? styles.selected : seatStatus === 'available' ? styles.available : styles.occupied}></View>
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
    selected:{
        height: 6,
        width: '70%',
        borderRadius: 2,
        backgroundColor: 'yellow',
    },
})