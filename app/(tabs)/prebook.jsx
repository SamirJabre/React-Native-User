import { StyleSheet , Text , View , SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {useEffect, useState} from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function prebook() {

  const [token, setToken] = useState('');
  const [tripId, setTripId] = useState('');
  useEffect(()=>{
    setToken(AsyncStorage.getItem('token'))
    setTripId(AsyncStorage.getItem('tripId'))
  },[])

    const { from , to , tickets , departure , date } = useLocalSearchParams();
    console.log(from , to , tickets , departure , date);
    
  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.upper}>
    <Text style={styles.upperText}>{tripId}</Text>
    </View>
    <View style={styles.mid}>
    <Text style={styles.midText}>Booking Details</Text>
    </View>
    <View style={styles.lower}>

    <View style={styles.info}>
    <Image source={require('../../assets/icons/start.png')} style={styles.icons}/>
    <Text style={styles.infoText}>{from}</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/destination.png')} style={styles.icons}/>
    <Text style={styles.infoText}>{to}</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/tickets.png')} style={styles.icons}/>
    <Text style={styles.infoText}>{tickets}</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/calendar.png')} style={styles.icons}/>
    <Text style={styles.infoText}>{date}</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/time.png')} style={styles.icons}/>
    <Text style={styles.infoText}>{departure}</Text>
    </View>
    </View>
    <View style={styles.btnContainer}>
    <TouchableOpacity style={styles.btn}><Text style={{fontFamily:'Inter-SemiBold' , fontSize:18,color:'white'}}>Confirm Booking</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>router.push('/buses')} style={styles.btn2}><Text style={{fontFamily:'Inter-SemiBold' , fontSize:18,color:'#0C3B2E'}}>Cancel Booking</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea:{
    height: '100%',
    width: '100%',
    backgroundColor:"#ECECEC",
    alignItems:'center',
  },
  upper:{
    height:'10%',
    width:'100%',
    backgroundColor:'#0C3B2E',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  upperText:{
    color:'white',
    fontSize:18,
    fontFamily:'Inter-ExtraBold'
  },
  mid:{
    height:'25%',
    width:'90%',
    justifyContent:'center'
  },
  midText:{
    fontSize:18,
    fontFamily:'Inter-SemiBold',
    color:'#0C3B2E',
  },
  lower:{
    height:'40%',
    width:'90%',
    justifyContent:'center',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#0C3B2E',
  },
  info:{
    flexDirection:'row',
    height:'20%',
    width:'100%',
    paddingLeft:10,
    alignItems:'center',
  },
  icons:{
    height:30,
    width:30,
    marginRight:20,
  },
  infoText:{
    fontSize:18,
    fontFamily:'Inter-SemiBold',
    color:'#0C3B2E',
  },
  btnContainer:{
    marginTop:20,
    height:'20%',
    width:'90%',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  btn:{
    height:'25%',
    width:'100%',
    backgroundColor:'#0C3B2E',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  btn2:{
    height:'25%',
    width:'100%',
    backgroundColor:'#ECECEC',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#0C3B2E',
  },
});