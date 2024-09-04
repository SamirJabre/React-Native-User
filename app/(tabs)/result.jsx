import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , TouchableOpacity, SafeAreaView , ScrollView, Image } from 'react-native';
import {  useState ,useEffect } from 'react';
import * as React from 'react';
import Authback from '../../components/Authback';
import FilterToggle from '../../components/FilterToggle';
import { router, useLocalSearchParams } from 'expo-router';
import NavigationBar from '../../components/NavigationBar';
import BusBox from '../../components/BusBox';
import axios from 'axios';
import { BASE_URL } from '@env';

export default function result() {
  const {  from , to , ticket , date  } = useLocalSearchParams();
  const [price, setPrice] = useState(false);
  const [time, setTime] = useState(false);
  const [latest, setLatest] = useState(false);
  const [rating, setRating] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(()=>{
    axios.post(`${BASE_URL}/search` ,{
      from: from,
      to: to,
      price: ticket,
      date: date
    })
    .then(res=>setTrips(res.data))
  },[])
  
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.backBtncontainer}>
          <Authback onpress={()=> router.push('/search')}/>
        </View>
        <Text style={styles.upcomingText}>Search Result</Text>

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
export default result

const styles = StyleSheet.create({})