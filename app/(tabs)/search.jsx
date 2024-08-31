import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { StatusBar } from 'expo-status-bar'
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const search = () => {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(1);
  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
    <View style={styles.upperbox}>
    <Text style={{marginTop:10,fontSize:20,color:'white'}}>Bus Booking</Text>
    <View style={styles.greeting}>
    <Text style={styles.hello}>Hello,</Text>
    <Text style={styles.title}>Search +100 Bus For Your Journey</Text>
    </View>
    <Image source={require('../../assets/bus-background.png')} style={styles.image}/>
    </View>

    <View style={styles.inputContainer}>
    <View style={styles.left}>

    <View style={styles.top}>
    <Text style={{fontSize:12, color:'#B8B8B8', margin:5}}>From</Text>
    <TextInput style={styles.input} placeholder='From'></TextInput>
    </View>

    <View style={styles.mid}></View>

    <View style={styles.low}>
    <Text style={{fontSize:12, color:'#B8B8B8', margin:5}}>To</Text>
    <TextInput style={styles.input} placeholder='To'></TextInput>
    </View>

    </View>

    <View style={styles.right}>
      <TouchableOpacity style={{height:35,width:35}}>
      <Image source={require('../../assets/icons/switch.png')} style={{height:"100%",width:"100%"}}/>
      </TouchableOpacity>
    </View>

    </View>

    <Text style={styles.priceRange}>Price Range : {price}</Text>

    <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={100}
      step={1}
      value={price}
      onValueChange={setPrice}
      minimumTrackTintColor="#6D9773"
      maximumTrackTintColor="#d3d3d3"
      thumbTintColor="#0C3B2E"
    />

<View style={{flexDirection:'row' , width:"90%",justifyContent:'space-between' , alignItems:'center'}}>
    <Text style={styles.ratingText}>Rating</Text>
    <Picker
        selectedValue={rating}
        style={styles.picker}
        onValueChange={(itemValue) => setRating(itemValue)}
      >
        <Picker.Item label="1 Star" value={1} />
        <Picker.Item label="2 Stars" value={2} />
        <Picker.Item label="3 Stars" value={3} />
        <Picker.Item label="4 Stars" value={4} />
        <Picker.Item label="5 Stars" value={5} />
      </Picker>
    </View>
    <TouchableOpacity style={styles.searchBtn}>
    <Text style={{fontSize:20,color:'white'}}>Search</Text>
    </TouchableOpacity>

    </View>
    <NavigationBar/>
    
    </SafeAreaView>