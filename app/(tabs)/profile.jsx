import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/NavigationBar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import axios from 'axios'
import { BASE_URL } from '@env'
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseConfig';
import { useURL } from 'expo-linking'

const profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [inputProfilePicture, setInputProfilePicture] = useState(null);


  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');


  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async (setState) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setState(result.assets[0].uri);
    }
  };


  const uploadImage = async (image) => {
    if (!image) return;
    const response = await fetch(image);
    const blob = await response.blob();
    const filename = image.substring(image.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `images/${filename}`);

    try {
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error('Error uploading image: ', error);
      alert('Failed to upload image');
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) setUserId(parseInt(storedUserId));
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) setToken(storedToken);
        getUserInfo(storedUserId, storedToken);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage', error);
      }
    };

    fetchData();
  }, []);

  const getUserInfo = async (storedUserId,storedToken) => {
  await axios.post(`${BASE_URL}/getuser`,{
    id: storedUserId
  }, {
    headers: {
      Authorization: `Bearer ${storedToken}`
    }
  })
  .then(res=>{
    console.log(res.data);
    
    setName(res.data.user.name);
    setEmail(res.data.user.email);
    setProfilePicture(res.data.user.profile_picture);
  });
  }

  const handleSubmit = async () => {
    if(inputPassword !== inputConfirmPassword){
      alert('Passwords do not match');
      return;
    }
    const profilePictureUrl = await uploadImage(inputProfilePicture);
    saveChanges(userId , profilePictureUrl);
  }


  const saveChanges = async (user_id , profilePictureUrl) => {
    try{
      await axios.put(`${BASE_URL}/profile/${user_id}`,{
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        profile_picture: profilePictureUrl
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    }
    catch(error){
      console.error('Error saving changes', error);
    }
  }
  


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
        source={profilePicture}
      />
      </View>

      <View style={styles.userInfo}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userEmail}>{email}</Text>
      </View>
      
      <View style={styles.inputsContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#8A8A8A"
        onChangeText={setInputName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#8A8A8A"
        keyboardType="email-address"
        onChangeText={setInputEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8A8A8A"
        onChangeText={setInputPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#8A8A8A"
        onChangeText={setInputConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => pickImage(setInputProfilePicture)}>
        <Text style={styles.buttonText}>Change Image</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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