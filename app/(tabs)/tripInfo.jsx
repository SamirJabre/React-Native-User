import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavigationBar from '../../components/NavigationBar'

const tripInfo = () => {
  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
    
    <View style={styles.upperBox}>
        <View style={styles.upperPart}>
            <TouchableOpacity style={styles.backBtn}>
              <Image source={require('../../assets/icons/back_arrow.png')} style={{height:30,width:30}}/>
            </TouchableOpacity>
            <Text style={styles.busText}>Bus Booking</Text>
        </View>
    </View>

    <View style={styles.mapContainer}></View>

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
  },
  container:{
    width : '100%',
    height: '92%',
    backgroundColor:'blue',
  },
  upperBox:{
    height:'15%',
    width:'100%',
    backgroundColor:'#0C3B2E',
  },
  upperPart:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      height:'50%',
      width:'100%',
      backgroundColor:'yellow',
  },
  backBtn:{
    height:'100%',
    width:'20%',
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  busText:{

  },
  mapContainer:{
    width:'100%',
    height:'40%',
    backgroundColor:'red',
  },
})