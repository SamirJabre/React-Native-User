import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import TripNavigation from '../../components/TripNavigation';
import { router, useLocalSearchParams } from 'expo-router';
import NavigationBar from '../../components/NavigationBar';
import axios from 'axios';
import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const review = () => {
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(1);
    const [userId, setUserId] = useState();
  const [driverId, setDriverId] = useState();
  const { busId } = useLocalSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) setUserId(parseInt(storedUserId));
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(()=>{
    try{
        axios.post(`${BASE_URL}/get-driver-id`,{
            bus_id: busId
        })
        .then(res=>setDriverId(res.data.driver_id))
    }
    catch(e){
      console.log(e)
    }
  },[])

  const handleSubmit = () => {
    try{
        axios.post(`${BASE_URL}/make-review`,{
            user_id: userId,
            driver_id: driverId,
            rating: stars,
            comment: comment
        })
        .then(res=>console.log(res.data))
    }
    catch(error){
      console.log('Error making review', error)
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.upper}>
        <View style={styles.tripNavigationContainer}>
        <TripNavigation title="Trip Info" onpress={()=>router.push('/recentTrip')}/>
        <TripNavigation title="Seats" onpress={()=>router.push('/seats')}/>
        <TripNavigation title="Leave a Review" onpress={()=>router.push('/review')}/>
        </View>
      <Text style={styles.title}>Leave a Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your comment..."
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <Picker
        selectedValue={stars}
        style={styles.picker}
        onValueChange={(itemValue) => setStars(itemValue)}
      >
        <Picker.Item label="1 Star" value={1} />
        <Picker.Item label="2 Stars" value={2} />
        <Picker.Item label="3 Stars" value={3} />
        <Picker.Item label="4 Stars" value={4} />
        <Picker.Item label="5 Stars" value={5} />
      </Picker>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.text}>Submit Review</Text>
      </TouchableOpacity>
        </View>
      <NavigationBar/>
    </View>
  );
};

export default review;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upper:{
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    margin: 30,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 100,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    fontFamily: 'Inter-Regular',
  },
  picker: {
    height: 50,
    width: '90%',
    marginBottom: 20,
  },
  tripNavigationContainer:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0C3B2E',
  },
  submitButton:{
    width: '90%',
    height: 50,
    backgroundColor: '#0C3B2E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text:{
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});