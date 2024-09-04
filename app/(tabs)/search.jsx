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
  