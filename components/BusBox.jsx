import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BusBox = ({from, to, price, seats, driver, date, departure, rating, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.bus}>
            <View style={styles.left}>
              <View style={styles.rowOne}>
              <Text style={styles.busInfo}>{from}</Text>
              <Image source={require('../assets/icons/right_arrow.png')} style={styles.arrow} />
              </View>
              <Text style={styles.busInfo}>Price: {price} ticket/s</Text>
              <Text style={styles.busInfo}>Driver: {driver}</Text>
              <Text style={styles.busInfo}>Date: {date}</Text>
            </View>

            <View style={styles.right}>
            <Text style={styles.busInfo2}>{to}</Text>
              <Text style={styles.busInfo2}>Seats left: {seats}</Text>
              <View style={styles.images}>
              {Array.from({ length: rating }, (_, i) => (
                <Image key={i} source={require('../assets/icons/star.png')} style={styles.image} />
                ))}
              </View>
              <Text style={styles.busInfo2}>Departure: {departure}</Text>
            </View>

          </TouchableOpacity>
  )
}

export default BusBox

const styles = StyleSheet.create({
    bus:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 180,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  left:{
    width: '60%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  busInfo:{
    color: '#0C3B2E',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginLeft: 10,
  },
  busInfo2:{
    color: '#0C3B2E',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
  },
  right:{
    width: '40%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  images:{
    flexDirection: 'row',
    height: '15%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image:{
    height: 20,
    width: 20,
  },
  rowOne:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  arrow:{
    height: 20,
    width: 40,
    marginRight: 20,
  },
})