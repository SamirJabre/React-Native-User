import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
// import MapView, { Polyline, Marker } from 'react-native-maps';

const TripInfo = ({from,to,driver,date,departure,tickets, fromLatitude , fromLongitude , toLatitude , toLongitude}) => {

  console.log(fromLatitude);
  console.log(fromLongitude);
  console.log(toLatitude);
  console.log(toLongitude);
  

    const latitude = fromLatitude+toLatitude/2;
    const longitude = fromLongitude+toLongitude/2;
  
  return (
    <View style={{height:'100%' , width:'100%'}}>
      
      <View style={styles.mapContainer}>
      
        {/* {
          latitude && longitude && (
            <MapView 
              style={StyleSheet.absoluteFillObject}
              initialRegion={
                {
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
              }
            />
          )
        } */}



        {/* /* {
          longitude && (
          <MapView
          style={{height:'100%', width:'100%'}}
          initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >

        </MapView>
      )
        } */}
      </View>

    <View style={styles.info}>
      <View style={styles.details}>

        <View style={styles.left}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/icons/start.png')} style={{height:30,width:30 , margin:5}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>: {from}</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/icons/destination.png')} style={{height:30,width:30 , margin:5}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>: {to}</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/icons/driver.png')} style={{height:30,width:30 , margin:5}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>: {driver}</Text>
          </View>
        </View>

        <View style={styles.right}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/icons/calendar.png')} style={{height:30,width:30 , margin:5}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>: {date}</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/icons/time.png')} style={{height:30,width:30 , margin:5}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>: {departure}</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/icons/tickets.png')} style={{height:30,width:30 , margin:5}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>: {tickets}</Text>
          </View>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.bookBtn} onPress={()=>router.push(`/prebook?from=${from}&to=${to}&tickets=${tickets}&departure=${departure}&date=${date}`)}><Text style={styles.bookText}>Book Now</Text></TouchableOpacity> */}
    </View>

    </View>
  )
}

export default TripInfo

const styles = StyleSheet.create({
    mapContainer:{
    width:'90%',
    height:'40%',
    marginTop:10,
    borderRadius:20,
    backgroundColor:'red',
    alignSelf:'center',
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