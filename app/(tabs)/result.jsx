import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , TouchableOpacity, SafeAreaView , ScrollView, Image } from 'react-native';
import {  useState } from 'react';
import * as React from 'react';
import Authback from '../../components/Authback';
import FilterToggle from '../../components/FilterToggle';

export default function result() {

  const [price, setPrice] = useState(false);
  const [time, setTime] = useState(false);
  const [latest, setLatest] = useState(false);
  const [rating, setRating] = useState(false);


  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.backBtncontainer}>
          <Authback/>
        </View>
        <Text style={styles.upcomingText}>Upcoming Buses</Text>

        <View style={styles.filters}>
        <FilterToggle text='Price' onpress={()=>setPrice(!price)} status={price}/>
        <FilterToggle text='Time' onpress={()=>setTime(!time)} status={time}/>
        <FilterToggle text='Latest' onpress={()=>setLatest(!latest)} status={latest}/>
        <FilterToggle text='Rating' onpress={()=>setRating(!rating)} status={rating}/>
        </View>
        <ScrollView style={styles.buses}>
          

          <TouchableOpacity style={styles.bus}>

            <View style={styles.left}>
              <Text style={styles.busInfo}>From: Tripoli</Text>
              <Text style={styles.busInfo}>To: Beirut</Text>
              <Text style={styles.busInfo}>Driver: Samir Jabre</Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.busInfo2}>Price: 10$</Text>
              <Text style={styles.busInfo2}>Seats: 50</Text>
              <View style={styles.images}>
                <Image source={require('../../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../../assets/icons/star.png')} style={styles.image}/>
                <Image source={require('../../assets/icons/star.png')} style={styles.image}/>
              </View>
            </View>

          </TouchableOpacity>
        
        </ScrollView>

      </View>
    
    <StatusBar style='dark'/>

    <View style={styles.navbar}>

    </View>
      
    </SafeAreaView>
  );
}

