import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View ,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import Navbar from '../../components/NavigationBar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const profile = () => {


  const logOut = async () => {
    try{
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      alert('Logged out successfully');
      router.replace('/');
    }
    catch(error){
      console.error('Error logging out', error);
    }
  }




  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
      <Text style={styles.profileText}>Profile</Text>
      <View style={styles.imageContainer}>
      <Image
        style={styles.profilePicture}
        source={{uri: 'https://www.w3schools.com/w3images/avatar2.png'}}
      />
      </View>

      <View style={styles.userInfo}>
      <Text style={styles.userName}>Samir Jabre</Text>
      <Text style={styles.userEmail}>samirj49@gmail.com</Text>
      </View>
      
      <View style={styles.inputsContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#8A8A8A"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#8A8A8A"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8A8A8A"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#8A8A8A"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Image</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logOut}>
        <Text style={styles.logOutBtn}>Log Out</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    <Navbar/>
    </>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  body:{
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileText:{
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    margin: 20,
  },
  imageContainer:{
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom:20,
  },
  profilePicture: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  userInfo:{
    height: 50,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName:{
    color: '#484848',
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
  },
  userEmail:{
    color: '#484848',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  inputsContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8A8A8A',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#0C3B2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
  },
  logOutBtn:{
    color: 'red',
    fontFamily: 'Inter-SemiBold',
  }
})