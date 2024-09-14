import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , SafeAreaView , ScrollView , FlatList } from 'react-native';
import {  useState , useEffect } from 'react';
import { router } from 'expo-router';
import * as React from 'react';
import FilterToggle from '../../components/FilterToggle';
import NavigationBar from '../../components/NavigationBar';
import BusBox from '../../components/BusBox';
import axios from 'axios';
import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function buses() {

  const [price, setPrice] = useState(false);
  const [time, setTime] = useState(false);
  const [latest, setLatest] = useState(false);
  const [rating, setRating] = useState(false);
  const [token, setToken] = useState('');

  const [trips, setTrips] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) setToken(storedToken);
        displayBuses(storedToken);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
      }
    };

    fetchData();
  }, []);

  const displayBuses = async (token) => {
    axios.get(`${BASE_URL}/trips`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res=>setTrips(res.data))
  } 


  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text style={styles.upcomingText}>Upcoming Trips</Text>

        <View style={styles.filters}>
        <FilterToggle text='Price' onpress={()=>setPrice(!price)} status={price}/>
        <FilterToggle text='Time' onpress={()=>setTime(!time)} status={time}/>
        <FilterToggle text='Latest' onpress={()=>setLatest(!latest)} status={latest}/>
        <FilterToggle text='Rating' onpress={()=>setRating(!rating)} status={rating}/>
        </View>
        <ScrollView style={styles.buses} >
        {trips.map((trip)=>{
          return <BusBox 
          key={trip.id} 
          from={trip.from} 
          to={trip.to} 
          price={trip.price} 
          seats={trip.passenger_load}
          driver={trip.name}
          date={trip.date}
          departure={trip.departure_time}
          rating={trip.rating}
          onpress={()=>router.push(`/tripInfo?tripId=${trip.id}`)}
          />
        })}
        </ScrollView>

      </View>
    
    <StatusBar style='dark'/>
    <NavigationBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea:{
    height: '100%',
    width: '100%',
    paddingTop: 0,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backBtncontainer:{
    height: '12%',
    width: '100%',
    alignItems: 'flex-start',
  },
  upcomingText:{
    width: '90%',
    color: '#0C3B2E',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    margin: 30,
  },
  filters:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
    width: '90%',
  },
  buses:{
    height: '70%',
    width: '100%',
    backgroundColor: '#E5E5E5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
});