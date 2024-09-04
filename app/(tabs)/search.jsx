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

export default search

const styles = StyleSheet.create({
  safearea:{
    height:'100%',
    width:'100%',
    flex: 1,
    backgroundColor:'#FFFFFF',
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container:{
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  upperbox:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '45%',
    width: '100%',
    backgroundColor: '#0C3B2E',
  },
  greeting:{
    width: '90%',
    height: '20%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  hello:{
    color: 'white',
    fontSize: 25,
    fontFamily: 'Inter-SemiBold',
  },
  title:{
    color: 'white',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  image:{
    width: '100%',
    height: 160,
    marginTop: 20,
    resizeMode: 'cover',
  },
  inputContainer:{
    flexDirection: 'row',
    height: "20%",
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },
  left:{
    height: '100%',
    width: '85%',
    alignItems: 'center',
    paddingLeft: 10,
  },
  top:{
    height: '49%',
    width: '100%',
  },
  mid:{
    height: '2%',
    width: '100%',
    backgroundColor: '#CCCCCC',
  },
  low:{
    height: '49%',
    width: '100%',
  },
  input:{
    width: '100%',
    padding: 5,
    fontSize: 20,
    color:"#0C3B2E",
    fontFamily: 'Inter-SemiBold',
  },
  right:{
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceRange:{
    width: '90%',
    marginTop: 10,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter-Regular',
  },
  slider:{
    width: '90%',
    height: 25,
  },
  dateText:{
    height: '30%',
    fontSize: 12,
    color: 'gray',
    fontFamily: 'Inter-Regular',
  },
  picker: {
    height: 50,
    width: 150,
    fontFamily: 'Inter-Regular',
  },
  searchBtn:{
    backgroundColor: '#0C3B2E',
    marginTop: 10,
    height: 40,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  dateContainer:{
    height: 60,
    width:"90%",
    margin:10,
    borderBottomWidth:1,
    borderBlockColor:'gray',
  },
  date:{
    flexDirection:'row',
    height: '70%',
    width: '100%',
    alignItems:'center',
  },
  dateItself:{
    width: '90%',
    fontSize: 20,
    color: '#0C3B2E',
    fontFamily: 'Inter-SemiBold',
  },
  dateSelector:{
    height: '80%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})