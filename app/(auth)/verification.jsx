import { StyleSheet, Text, View , ImageBackground , SafeAreaView , Image , TextInput, TouchableOpacity} from 'react-native'
import React, { useState , useRef } from 'react'
import AuthButton from '../../components/AuthButton'
import { StatusBar } from 'expo-status-bar'
import Authback from '../../components/Authback'
import ProgressBar from '../../components/ProgressBar'
import { Link, router, useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '@env';


const verification = () => {
  const {  email  } = useLocalSearchParams();

  const [code, setCode] = useState(['', '', '', '']);
  const [otp, setOtp] = useState('');
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
    setOtp(parseInt(newCode.join(''), 10))
    console.log(otp);
  };


  const handleVerfication = () => {
    try{
      axios.post(`${BASE_URL}/validate-otp` , {
        email: email,
        otp: otp
    })
    .then( res => {
      
      if(res.data.status === 'success'){
        router.push('/login');
      }
      else{
        alert('Invalid OTP')
    }
  });
  }
    catch(error){
      console.log(error);
    }
  }

  const handleBack = () => {
    axios.post(`${BASE_URL}/delete-unverified`,{
      email: email
    });
    console.log(email);
    
    router.push('/register');
  }


  const resendOtp = () => {
    alert('OTP has been resent');
    axios.post(`%{${BASE_URL}}/sendotp` ,{
      email: email
    })
  }


  return (
    <SafeAreaView>
    <ImageBackground source={require('../../assets/two.jpg')} style={styles.img}>
    <View style={styles.upper}>
    <Authback onpress={handleBack}/>
    </View>
    <View style={styles.container}>

      <View style={styles.iconContainer}>
      <Image source={require('../../assets/icons/verificationLogo.png')} style={{height:'100%', width:'100%'}}/>
      </View>

      <Text style={styles.maintxt}>We have sent a verification code to</Text>
      <Text style={styles.sectxt}>{email}</Text>
      
      <View style={styles.progress}>
      <ProgressBar circle_two={`#0C3B2E`} circle_three={`#0C3B2E`} line_one={`#0C3B2E`} line_two={`#0C3B2E`}/>
      </View>

      <View style={styles.verificationContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.input}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(ref) => inputs.current[index] = ref}
              />
            ))}
          </View>


      <AuthButton title={'Verify'} handlePress={handleVerfication}/>

      <TouchableOpacity onPress={resendOtp}><Text style={styles.otpRequest}>Haven't recieved a code yet?</Text></TouchableOpacity>
    </View>

    </ImageBackground>
    <StatusBar  style='dark'/>
    </SafeAreaView>
  )
}

export default verification

const styles = StyleSheet.create({
  safearea:{
    height:'100%',
    width:'100%',
    flex: 1,
    backgroundColor:'#FFFFFF',
    paddingTop: StatusBar.currentHeight,
  },
  img:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  upper:{
    width:'100%',
    height:'20%',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  container:{
    backgroundColor:'#EAEAEA',
    height:'70%',
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    borderTopStartRadius:50,
    borderTopEndRadius:50,
  },
  progress:{
    height:"5%",
    width:"50%",
    margin:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  verificationContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:40,
  },
  input: {
    backgroundColor: '#BFBFBF',
    height: 50,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  iconContainer:{
    width:120,
    height:120,
    backgroundColor:'#FFFFFF',
    borderRadius:100,
    marginTop:20,
  },
  maintxt:{
    color:'#727272',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginTop:30,
    marginBottom:10,
  },
  sectxt:{
    color:'#484848',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
  },
  otpRequest:{
    color:'#0C3B2E',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginTop:20,
  },
})