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
    margin: 15,
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
    borderRadius: 30,
    marginTop: 20,
  },
  bus:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
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
});