import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { BASE_URL } from '@env';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import TripInfo from '../../components/TripInfo';
import Reviews from '../../components/Reviews';
// import MapView, { Polyline, Marker } from 'react-native-maps';


const tripInfo = () => {

  const [selectedTab, setSelectedTab] = useState('TripInfo');


  // // const fromPoint = { latitude: 33.8938, longitude:35.5018 };
  // // const toPoint = { latitude: 34.4346, longitude: 35.8362 };
  // const [fromPointLatitude,setFromPointLatitude]=useState();
  // const [fromPointLongitude,setFromPointLongitude]=useState();
  // const [toPointLatitude,setToPointLatitude]=useState();
  // const [toPointLongitude,setToPointLongitude]=useState();
  // const [fromPoint, setFromPoint] = useState({});
  // const [toPoint, setToPoint] = useState({});

  var fromPoint = { latitude: 37.78825, longitude: -122.4324 };
  var toPoint = { latitude: 37.75825, longitude: -122.4624 };

  const [from,setFrom] = useState('');
  const [to,setTo] = useState('');
  const [driver,setDriver] = useState('');
  const [date,setDate] = useState('');
  const [departure,setDeparture] = useState('');
  const [tickets,setTickets] = useState('');
  const [driverId,setDriverId] = useState('');
  const {  tripId  } = useLocalSearchParams();

  useEffect( () => {
    axios.post(`${BASE_URL}/tripinfo` ,
      {
      id:tripId
      }
    )
    .then(res=>{
      setFrom(res.data.from)
      setTo(res.data.to)
      setDriver(res.data.name)
      setDate(res.data.date)
      setDeparture(res.data.departure_time)
      setTickets(res.data.price)
      setDriverId(res.data.driver_id)
      console.log(res.data.driver_id);
      
      console.log(res.data.to);
      
      axios.post(`${BASE_URL}/coordinates`,{
        from:from,
        to:to,
      }).then(res=>{
        console.log(res.data);
        
        // fromPoint.latitude=res.data[0].latitude
        // fromPoint.longitude=res.data[0].longitude
  
        // toPoint.latitude=res.data[1].latitude
        // toPoint.longitude=res.data[1].longitude
      });
    })
  },[])

  // const getCoordinates = () => {
  //     axios.post(`${BASE_URL}/coordinates` ,{
  //       from:from,
  //       to:to
  //     }).then(res=>{
  //     alert(res.data[0].latitude);
  //     });
  // }

  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
    
    <View style={styles.upperBox}>
        <View style={styles.upperPart}>
            <TouchableOpacity style={styles.backBtn} onPress={()=>router.back()}>
              <Image source={require('../../assets/icons/back_arrow.png')} style={{height:30,width:30}}/>
            </TouchableOpacity>
            <Text style={styles.busText}>Bus Booking</Text>
            <View style={{height:'100%',width:'20%'}}></View>
        </View>

        <View style={styles.lowerPart}>
        <TouchableOpacity style={selectedTab == 'TripInfo' ? styles.checked : styles.notChecked} onPress={()=>setSelectedTab('TripInfo')}>
          <Text style={selectedTab == 'TripInfo' ? styles.checkedText : styles.notCheckedText}>Trip Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectedTab == 'Seats' ? styles.checked : styles.notChecked} onPress={()=>setSelectedTab('Seats')}>
          <Text style={selectedTab == 'Seats' ? styles.checkedText : styles.notCheckedText}>Seats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectedTab == 'Reviews' ? styles.checked : styles.notChecked} onPress={()=>setSelectedTab('Reviews')}>
          <Text style={selectedTab == 'Reviews' ? styles.checkedText : styles.notCheckedText}>Reviews</Text>
        </TouchableOpacity>
        </View>
    </View>

    {
      selectedTab == 'TripInfo' ? <TripInfo from={from} to={to} driver={driver} date={date} departure={departure} tickets={tickets}/> 
      : selectedTab == 'Seats' ? <Text>Seats</Text>
      : <Reviews driverId={driverId}/>
    }

    </View>
    <NavigationBar/>    
    </SafeAreaView>
  )
}

export default tripInfo

const styles = StyleSheet.create({
    safearea:{
    height: '100%',
    width: '100%',
    paddingTop: 0,
    marginTop: 0,
    justifyContent: 'space-between',
    backgroundColor:"#ECECEC"
  },
  container:{
    width : '100%',
    height: '92%',
    alignItems: 'center',
  },
  upperBox:{
    height:'15%',
    width:'100%',
    backgroundColor:'#0C3B2E',
  },
  upperPart:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:'50%',
      width:'100%',
  },
  backBtn:{
    height:'100%',
    width:'20%',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  busText:{
    color:'white',
    fontSize:20,
    fontFamily:'Inter-SemiBold',
    width:'60%',
    textAlign:'center',
  },
  lowerPart:{
    height:'50%',
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  checked:{
    height:'90%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'white',
  },
  checkedText:{
    color:'white',
    fontSize:16,
    fontFamily:'Inter-Regular',
  },
  notChecked:{
    height:'90%',
    width:'20%',
    justifyContent:'center',
    alignItems:'center',
  },
  notCheckedText:{
    color:'#1C1C1C',
    fontSize:16,
    fontFamily:'Inter-Regular',
  },
  mapContainer:{
    width:'90%',
    height:'40%',
    marginTop:10,
    borderRadius:20,
  },
  info:{
    width:'100%',
    height:'45%',
    backgroundColor:'#ECECEC',
    alignItems:'center',
    justifyContent:'center',
  },
  details:{
    width:'90%',
    height:'60%',
    marginHorizontal:'5%',
    marginVertical:'5%',
    flexDirection:'row',
  },
  left:{
    width:'57%',
    height:'100%',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  },
  right:{
    width:'43%',
    height:'100%',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  },
  bookBtn:{
    width:'90%',
    height:'15%',
    backgroundColor:'#0C3B2E',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  bookText:{
    color:'white',
    fontSize:20,
    fontFamily:'Inter-SemiBold',
  },
})