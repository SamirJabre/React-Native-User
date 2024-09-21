import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

const booked = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
  const [tripId, setTripId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTripId = await AsyncStorage.getItem('tripId');
        if (storedTripId) setTripId(parseInt(storedTripId));
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
      }
    };

    fetchData();
  }, []);




  return (
    <SafeAreaView style={styles.safearea}>

    <View style={{width:'100%' , height:'30%', alignItems:'center' , justifyContent:'flex-end'}}>
      <Image source={require('../../assets/success.png')}/>
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.congrats}>Congratulations</Text>
      <Text style={styles.text}>Your tickets are successfully booked</Text>
    </View>

    <View style={styles.info}>

      <View style={styles.bookInfo}>
        <Text style={styles.bookInfoText}>Booking ID : #{tripId}</Text>
        <Text style={styles.bookInfoText}>Booked On : {formattedDate}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>router.replace('/home')}>
        <Text style={styles.home}>
          Return To Home
        </Text>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
  )
}

export default booked

const styles = StyleSheet.create({
  safearea:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  textContainer:{
    width: '100%',
    height: '12%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  congrats:{
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold',
    color: '#0C3B2E',
  },
  text:{
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#626262',
    marginTop: 10,
  },
  info:{
    marginTop: 40,
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookInfo:{
    width: '80%',
    height: '45%',
    justifyContent: 'space-around',
  },
  bookInfoText:{
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#0C3B2E',
  },
  button:{
    width: '80%',
    height: 50,
    backgroundColor: '#0C3B2E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  home:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
  },
})