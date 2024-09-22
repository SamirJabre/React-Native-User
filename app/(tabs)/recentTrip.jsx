import React, { useEffect, useState } from 'react';
import { View, Text , Image, SafeAreaView , StyleSheet} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { BASE_URL } from '@env';
import QRCode from 'react-native-qrcode-svg';
import * as Svg from 'react-native-svg';
// import MapView, { Marker } from 'react-native-maps';

import axios from 'axios';
import NavigationBar from '../../components/NavigationBar';
import TripNavigation from '../../components/TripNavigation';

const BusTracker = () => {
  const [busId, setBusId] = useState();
  const [departureHour, setDepartureHour] = useState();
  const [departureMinute, setDepartureMinute] = useState();
  const [from_Tripoli, setFrom_Tripoli] = useState(0);
  const [from_Anfeh, setFrom_Anfeh] = useState(0);
  const [from_Chekka, setFrom_Chekka] = useState(0);
  const [from_Batroun, setFrom_Batroun] = useState(0);
  const [from_Jbeil, setFrom_Jbeil] = useState(0);
  const [from_Tabarja, setFrom_Tabarja] = useState(0);
  const [from_Jounieh, setFrom_Jounieh] = useState(0);
  const [from_Antelias, setFrom_Antelias] = useState(0);
  const [from_Beirut, setFrom_Beirut] = useState(0);
  const [to_Tripoli, setTo_Tripoli] = useState(0);
  const [to_Anfeh, setTo_Anfeh] = useState(0);
  const [to_Chekka, setTo_Chekka] = useState(0);
  const [to_Batroun, setTo_Batroun] = useState(0);
  const [to_Jbeil, setTo_Jbeil] = useState(0);
  const [to_Tabarja, setTo_Tabarja] = useState(0);
  const [to_Jounieh, setTo_Jounieh] = useState(0);
  const [to_Antelias, setTo_Antelias] = useState(0);
  const [to_Beirut, setTo_Beirut] = useState(0);
  const [arrivalTime, setArrivalTime] = useState();
  const [qrCodeData, setQrCodeData] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
 

  const { tripId ,token } = useLocalSearchParams();



  useEffect(() => {
    axios.post(`${BASE_URL}/tripinfo`, {
      id: tripId
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(res => {
      console.log(res.data);
      setBusId(res.data.bus_id);
      const from = res.data.from;
      const to = res.data.to;
      if (from === 'Tripoli') setFrom_Tripoli(1);
      if (from === 'Anfeh') setFrom_Anfeh(1);
      if (from === 'Chekka') setFrom_Chekka(1);
      if (from === 'Batroun') setFrom_Batroun(1);
      if (from === 'Jbeil') setFrom_Jbeil(1);
      if (from === 'Tabarja') setFrom_Tabarja(1);
      if (from === 'Jounieh') setFrom_Jounieh(1);
      if (from === 'Antelias') setFrom_Antelias(1);
      if (from === 'Beirut') setFrom_Beirut(1);
      if (to === 'Tripoli') setTo_Tripoli(1);
      if (to === 'Anfeh') setTo_Anfeh(1);
      if (to === 'Chekka') setTo_Chekka(1);
      if (to === 'Batroun') setTo_Batroun(1);
      if (to === 'Jbeil') setTo_Jbeil(1);
      if (to === 'Tabarja') setTo_Tabarja(1);
      if (to === 'Jounieh') setTo_Jounieh(1);
      if (to === 'Antelias') setTo_Antelias(1);
      if (to === 'Beirut') setTo_Beirut(1);
      setQrCodeData(JSON.stringify({ tripId, busId }));
      const departureTime = res.data.departure_time;
      const departurehour = parseInt(departureTime.split(':')[0], 10);
      const departureminute = parseInt(departureTime.split(':')[1], 10);
      console.log(departureminute);
      console.log(departurehour);
      setDepartureMinute(departureminute);
      setDepartureHour(departurehour);

      if(departureHour){
        handlePrediction();
      }

    //   axios.post(`${BASE_URL}/get-location`,{
    //     busId:busId
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // )
    // .then(res=>{
    //   console.log(res.data);
      
    //   setCurrentLatitude(res.data.current_latitude);
    //   setCurrentLongitude(res.data.current_longitude);
    // })
    });
   
    


  }, [busId , departureMinute , departureHour]);
  

  const handlePrediction = () => {
    axios.post(`${BASE_URL}/get-prediction`,{
      'departure_hour' : departureHour,
      'departure_minute' : departureMinute,
      'from_Tripoli' : from_Tripoli,
      'from_Anfeh' : from_Anfeh,
      'from_Chekka' : from_Chekka,
      'from_Batroun' : from_Batroun,
      'from_Jbeil' : from_Jbeil,
      'from_Tabarja' : from_Tabarja,
      'from_Jounieh' : from_Jounieh,
      'from_Antelias' : from_Antelias,
      'from_Beirut' : from_Beirut,
      'to_Tripoli' : to_Tripoli,
      'to_Anfeh' : to_Anfeh,
      'to_Chekka' : to_Chekka,
      'to_Batroun' : to_Batroun,
      'to_Jbeil' : to_Jbeil,
      'to_Tabarja' : to_Tabarja,
      'to_Jounieh' : to_Jounieh,
      'to_Antelias' : to_Antelias,
      'to_Beirut' : to_Beirut
    })
    .then(res=>{
      console.log(res.data)
      setArrivalTime(res.data.predicted_arrival_time);
    })
  }


  return (
      <SafeAreaView style={styles.safearea}>

      <View style={styles.container}>
      <View style={styles.tripNavigationContainer}>
        <TripNavigation title="Trip Info" onpress={()=>router.push('/recentTrip')}/>
        <TripNavigation title="Seats" onpress={()=>router.push(`/seats?busId=${busId}`)}/>
        <TripNavigation title="Leave a Review" onpress={()=>router.push(`/review?busId=${busId}`)}/>
        </View>
      
      <View style={styles.mapContainer}>

{/* {
  currentLatitude && currentLongitude && (
    <MapView
style={StyleSheet.absoluteFillObject}
initialRegion={{
  latitude: currentLatitude,
  longitude: currentLongitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}
>
<Marker
  coordinate={{
  latitude: currentLatitude,
  longitude: currentLongitude,
}}
title="Bus"
description="Bus location"
/>
</MapView>
  )
} */}

</View>


<View style={styles.qrcodeContainer}>
<QRCode
value={qrCodeData}
size={100}
color="black"
backgroundColor="white"
/>
</View>

<View style={styles.tripInfoContainer}>
<Text style={styles.infoText}>Bus ID: {busId}</Text>
<Text style={styles.infoText}>Approximate Arrival Time: {arrivalTime}</Text>

</View>
      </View>
              

      <NavigationBar/>

      
      </SafeAreaView>
      
      
      
      
      
      
  );
};

export default BusTracker;

const styles = StyleSheet.create({
  safearea:{
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container:{
    height: '92%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapContainer:{
    marginTop: 20,
    borderRadius: 20,
    width: '70%',
    height: '35%',
    backgroundColor: 'red',
  },
  qrcodeContainer:{
    marginTop: 20,
    borderRadius: 20,
    width: '50%',
    height: '20%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripInfoContainer:{
    marginTop: 20,
    borderRadius: 20,
    width: '90%',
    height: '15%',
    justifyContent: 'space-between',
  },
  infoText:{
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
  tripNavigationContainer:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0C3B2E',
  },
});