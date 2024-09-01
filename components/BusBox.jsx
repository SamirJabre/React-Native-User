import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BusBox = () => {
  return (
    <TouchableOpacity style={styles.bus}>
            <View style={styles.left}>
              <Text style={styles.busInfo}>From: Tripoli</Text>
              <Text style={styles.busInfo}>To: Beirut</Text>
              <Text style={styles.busInfo}>Driver: Samir Jabre</Text>
              <Text style={styles.busInfo}>Day: Monday</Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.busInfo2}>Price: 10$</Text>
              <Text style={styles.busInfo2}>Seats: 50</Text>
              <View style={styles.images}>
                <Image source={require('../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../assets/icons/star.png')} style={styles.image}/>
              </View>
              <Text style={styles.busInfo2}>Departure: 12:00 AM</Text>
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
})