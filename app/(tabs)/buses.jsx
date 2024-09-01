import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , TouchableOpacity, SafeAreaView , ScrollView, Image } from 'react-native';
import {  useState } from 'react';
import * as React from 'react';
import Authback from '../../components/Authback';
import FilterToggle from '../../components/FilterToggle';
import { router } from 'expo-router';
import NavigationBar from '../../components/NavigationBar';

export default function buses() {

  const [price, setPrice] = useState(false);
  const [time, setTime] = useState(false);
  const [latest, setLatest] = useState(false);
  const [rating, setRating] = useState(false);


  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.backBtncontainer}>
          <Authback onpress={()=> router.push('/search')}/>
        </View>
        <Text style={styles.upcomingText}>Upcoming Trips</Text>

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
    <NavigationBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea:{
    height: '100%',
    width: '100%',
    paddingTop: 0,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backBtncontainer:{
    height: '12%',
    width: '100%',
    alignItems: 'flex-start',
  },
  upcomingText:{
    width: '90%',
    color: '#0C3B2E',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    margin: 15,
  },
  filters:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
    width: '90%',
  },
  buses:{
    height: '70%',
    width: '100%',
    backgroundColor: '#E5E5E5',
    borderRadius: 30,
    marginTop: 20,
  },
  bus:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  left:{
    width: '60%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  busInfo:{
    color: '#0C3B2E',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginLeft: 10,
  },
  busInfo2:{
    color: '#0C3B2E',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
  },
  right:{
    width: '40%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  images:{
    flexDirection: 'row',
    height: '15%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image:{
    height: 20,
    width: 20,
  },
});