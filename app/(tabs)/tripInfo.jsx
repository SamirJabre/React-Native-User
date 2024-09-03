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
            <View style={{height:'100%',width:'20%'}}></View>
        </View>

        <View style={styles.lowerPart}>
        <TouchableOpacity style={styles.checked}>
          <Text style={styles.checkedText}>Trip Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notChecked}>
          <Text style={styles.notCheckedText}>Seats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notChecked}>
          <Text style={styles.notCheckedText}>Reviews</Text>
        </TouchableOpacity>
        </View>
    </View>

    <View style={styles.mapContainer}></View>

    <View style={styles.info}>
      <View style={styles.details}>

        <View style={styles.left}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/icons/start.png')} style={{height:40,width:40 , margin:10}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>:  Tripoli</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/icons/destination.png')} style={{height:40,width:40 , margin:10}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>:  Beirut</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/icons/driver.png')} style={{height:40,width:40 , margin:10}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>:  Samir</Text>
          </View>
        </View>

        <View style={styles.right}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/icons/calendar.png')} style={{height:40,width:40 , margin:10}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>:  20-9-2024</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/icons/time.png')} style={{height:40,width:40 , margin:10}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>:  Monday</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/icons/tickets.png')} style={{height:40,width:40 , margin:10}}/>
          <Text style={{fontFamily:'Inter-SemiBold' , color:'#0C3B2E'}}>:  2</Text>
          </View>
        </View>
      </View>
    </View>

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
    justifyContent: 'center',
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
    width:'100%',
    height:'40%',
    backgroundColor:'red',
  },
  info:{
    width:'100%',
    height:'45%',
    backgroundColor:'#ECECEC',
    alignItems:'center',
  },
  details:{
    width:'90%',
    height:'70%',
    marginHorizontal:'5%',
    marginVertical:'5%',
    flexDirection:'row',
  },
  left:{
    width:'50%',
    height:'100%',
    alignItems:'flex-start',
    justifyContent:'space-evenly',

  },
  right:{
    width:'50%',
    height:'100%',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  }
})