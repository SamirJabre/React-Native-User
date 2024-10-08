import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@env';
import { router } from 'expo-router';

const Recent = ({tripId ,token}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [miles, setMiles] = useState('');
    const tripid=tripId.trip_id;
    useEffect(()=>{
        axios.post(`${BASE_URL}/tripinfo`,{
            id: tripId.trip_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then(res=>{
            console.log(res.data);
            setFrom(res.data.from);
            setTo(res.data.to);
            setDate(res.data.date);
        })  
    },[])


  return (
    <TouchableOpacity onPress={()=>{router.push(`/recentTrip?tripId=${tripid}&token=${token}`)}} style={styles.recent}>

      <View style={styles.fromTo}>
      <Text style={styles.recentText}>From: {from}</Text>
      <Text style={styles.recentText}>To: {to}</Text> 
      </View>

      <View style={styles.otherInfo}>
      <Text style={styles.recentText}>Miles Traveled: </Text>
      <Text style={styles.recentText}>Date: {date}</Text> 
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
  fromTo:{
    justifyContent: 'space-around',
    height: '100%',
    width: '42%',
  },
  recentText:{
    color: 'black',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  otherInfo:{
    justifyContent: 'space-around',
    height: '100%',
    width: '42%',
  },
})