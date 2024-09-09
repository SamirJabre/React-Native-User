import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '@env';
import { useLocalSearchParams } from 'expo-router';

const recentTrip = () => {
    const {tripId} = useLocalSearchParams();
    useEffect(()=>{
        try{
            axios.post(`${BASE_URL}/tripinfo`,{
                id: tripId
            })
            .then(res=>{
                console.log(res.data);
            })  
        }
        catch(err){
            console.error('Error in API call:', err);
        }
    },[tripId])
  return (
    <View>
      <Text> id is :{tripId}</Text>
    </View>
  )
}

export default recentTrip

const styles = StyleSheet.create({})