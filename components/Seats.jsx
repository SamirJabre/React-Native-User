import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Seat from './Seat'


const Seats = ({busId}) => {
  return (
    <View style={styles.container}>
    <View style={styles.icons}>

        <View style={styles.statusContainer}>
            <View style={styles.greenBox}></View>
            <Text style={styles.text}>Available</Text>
        </View>

        <View style={styles.statusContainer}>
        <View style={styles.redBox}></View>
        <Text style={styles.text}>Occupied</Text>
        </View>

        <View style={styles.statusContainer}>
        <View style={styles.yellowBox}></View>
        <Text style={styles.text}>Selected</Text>
        </View>
    </View>

    <View style={styles.seatsContainer}>
    <Seat/>

    </View>

    <TouchableOpacity style={styles.bookBtn}><Text style={styles.bookText}>Book Now</Text></TouchableOpacity>

    </View>
  )
}

export default Seats

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:"#ECECEC"
    },
    icons:{
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    statusContainer:{
        height: '100%',
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    greenBox:{
        height: 20,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'green',
    },
    redBox:{
        height: 20,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'red',
    },
    yellowBox:{
        height: 20,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'yellow',
    },
    text:{
        color: '#515151',
        fontSize: 15,
        fontFamily: 'Inter-SemiBold',
    },
    seatsContainer:{
        width: '90%',
        height: '75%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'gray',
    },
    bookBtn:{
    width:'90%',
    height:'8%',
    backgroundColor:'#0C3B2E',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop: 30,
  },
  bookText:{
    color:'white',
    fontSize:20,
    fontFamily:'Inter-SemiBold',
  },
    
})