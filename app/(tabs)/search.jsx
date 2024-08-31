import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { StatusBar } from 'expo-status-bar'
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const search = () => {
  const [depature, setDepature] = useState('');
  const [destination, setDestination] = useState('');
  const [temp, setTemp] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(1);

  const switchInputs = () => {
    setDepature(destination);
    setDestination(temp);
    setTemp(depature);
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
    <TextInput style={styles.input} value={depature} onChange={(e)=>{setDepature(e.target.value); setTemp(e.target.value)}}></TextInput>
    </View>

    <View style={styles.mid}></View>

    <View style={styles.low}>
    <Text style={{fontSize:12, color:'#B8B8B8', margin:5, fontFamily:'Inter-Regular'}}>To</Text>
    <TextInput style={styles.input} value={destination} onChange={(e)=>setDestination(e.target.value)}></TextInput>
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
    margin:15,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter-Regular',
  },
  slider:{
    width: '90%',
    height: 25,
  },
  ratingText:{
    fontSize: 20,
    color: 'black',
    fontFamily: 'Inter-Regular',
  },
  picker: {
    height: 50,
    width: 150,
    fontFamily: 'Inter-Regular',
  },
  searchBtn:{
    backgroundColor: '#0C3B2E',
    marginTop: 20,
    height: 40,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
})