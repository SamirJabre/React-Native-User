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