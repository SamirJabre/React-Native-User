import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { StatusBar } from 'expo-status-bar'
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker'
import { router } from 'expo-router';

const search = () => {
  
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [show, setShow] = useState(false);
  const [data,setData]=useState([])

  const switchInputs = () => {
    setFrom(to);
    setTo(from);
    console.log(data);
    
  } 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    alert(date);
  };

  const searchTrips=()=>{
    router.push(`/result?from=${from}&to=${to}&ticket=${price}&date=${date}`)
  }
  

  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
    <View style={styles.upperbox}>
    <Text style={{marginTop:10,fontSize:20,color:'white',fontFamily:'Inter-SemiBold'}}>Bus Booking</Text>
    <View style={styles.greeting}>
    <Text style={styles.hello}>Hello,</Text>
    <Text style={styles.title}>Search +100 Bus For Your Journey</Text>
    </View>
    <Image source={require('../../assets/bus-background.png')} style={styles.image}/>
    </View>

    <View style={styles.inputContainer}>
    <View style={styles.left}>

    <View style={styles.top}>
    <Text style={{fontSize:12, color:'#B8B8B8', margin:5 , fontFamily:'Inter-Regular'}}>From</Text>
    <TextInput style={styles.input} value={from} onChangeText={setFrom}></TextInput>
    </View>

    <View style={styles.mid}></View>

    <View style={styles.low}>
    <Text style={{fontSize:12, color:'#B8B8B8', margin:5, fontFamily:'Inter-Regular'}}>To</Text>
    <TextInput style={styles.input} value={to} onChangeText={setTo}></TextInput>
    </View>

    </View>


    <View style={styles.right}>
      <TouchableOpacity style={{height:35,width:35}} onPress={switchInputs}>
      <Image source={require('../../assets/icons/switch.png')} style={{height:"100%",width:"100%"}}/>
      </TouchableOpacity>
    </View>

    </View>


    <Text style={styles.priceRange}>Price Range : {price}</Text>

    <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={3}
      step={1}
      value={price}
      onValueChange={setPrice}
      minimumTrackTintColor="#6D9773"
      maximumTrackTintColor="#d3d3d3"
      thumbTintColor="#0C3B2E"
    />

    <View style={styles.dateContainer}>
    <Text style={styles.dateText}>Departure Date</Text>
    <View style={styles.date}>
    <Text style={styles.dateItself}> {date}</Text>
    <TouchableOpacity style={styles.dateSelector} onPress={() => setShow(true)}>
        <Image source={require('../../assets/icons/calendar.png')} style={{height:'100%',width:'100%'}}/>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>

    </View>
    <TouchableOpacity style={styles.searchBtn} onPress={searchTrips}>
    <Text style={{fontSize:20,color:'white',fontFamily: 'Inter-SemiBold',}}>Search</Text>
    </TouchableOpacity>

    </View>
    <NavigationBar/>
    
    </SafeAreaView>
  )
}