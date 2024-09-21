import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import Seat from '../../components/busSeats'
import TripNavigation from '../../components/TripNavigation'
import { router, useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { BASE_URL } from '@env'

const seats = () => {

    const [seats,setSeats] = useState([]);
    const [token, setToken] = useState('');
    const { busId } = useLocalSearchParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) setToken(storedToken);
            getSeats(storedToken);
          } catch (error) {
            console.error('Error retrieving data from AsyncStorage', error);
          }
        };
    
        fetchData();
        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId)
      }, []);


    const getSeats = async (token) => { 

        axios.post(`${BASE_URL}/get-seats`,{
            bus_id: busId
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then((res)=>{
            console.log(res.data);
            
            setSeats(res.data);
        });
    }



  return (
    <View style={styles.container}>
        <View style={styles.upper}>
        <View style={styles.tripNavigationContainer}>
        <TripNavigation title="Trip Info" onpress={()=>router.push('/recentTrip')}/>
        <TripNavigation title="Seats" onpress={()=>router.push('/seats')}/>
        <TripNavigation title="Leave a Review" onpress={()=>router.push('/review')}/>
        </View>
        <View style={styles.seatsContainer}>
            
        {
        seats.map((seat,index)=>{
            return <Seat key={index} seatNumber={seat.seat_number} seatStatus={seat.status}/>
        })
        }

        </View>
        </View>
        <NavigationBar/>
    </View>
  )
}

export default seats

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tripNavigationContainer:{
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0C3B2E',
      },
      upper:{
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      seatsContainer:{
        marginTop: 30,
        width: '90%',
        height: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})