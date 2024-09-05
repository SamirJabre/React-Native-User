import { StyleSheet , Text , View , SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as React from 'react';
import { router } from 'expo-router';

export default function prebook() {

  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.upper}>
    <TouchableOpacity onPress={()=>router.push('/tripInfo')}><Image source={require('../../assets/icons/back_arrow.png')} style={{height:30,width:30}}/></TouchableOpacity>
    <Text style={styles.upperText}>Booking Confirmation</Text>
    <View style={{height:30,width:30}}></View>
    </View>
    <View style={styles.mid}>
    <Text style={styles.midText}>Booking Details</Text>
    </View>
    <View style={styles.lower}>

    <View style={styles.info}>
    <Image source={require('../../assets/icons/start.png')} style={styles.icons}/>
    <Text style={styles.infoText}>Tripoli</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/destination.png')} style={styles.icons}/>
    <Text style={styles.infoText}>Tripoli</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/tickets.png')} style={styles.icons}/>
    <Text style={styles.infoText}>Tripoli</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/calendar.png')} style={styles.icons}/>
    <Text style={styles.infoText}>Tripoli</Text>
    </View>
    <View style={styles.info}>
    <Image source={require('../../assets/icons/time.png')} style={styles.icons}/>
    <Text style={styles.infoText}>Tripoli</Text>
    </View>
    </View>
    <View style={styles.btnContainer}>
    <TouchableOpacity style={styles.btn}><Text style={{fontFamily:'Inter-SemiBold' , fontSize:18,color:'white'}}>Confirm Booking</Text></TouchableOpacity>
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
    justifyContent:'space-around',
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
    height:'25%',
    width:'90%',
    justifyContent:'center',
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
});