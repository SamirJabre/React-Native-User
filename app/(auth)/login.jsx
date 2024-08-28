import { StyleSheet, Text, View , ImageBackground , SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AuthButton from '../../components/AuthButton'
import AuthInput from '../../components/AuthInput'
import { StatusBar } from 'expo-status-bar'
import Checkbox from 'expo-checkbox';
import Authback from '../../components/Authback'
import { router } from 'expo-router'
import axios from 'axios'


const login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);



  const [form,setForm] = useState({
    email:'',
    password:''
  });




  const handleSubmit = () => {

    let valid = true;


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      alert('Email is required');
      valid = false;
      return;
    } else if (!emailRegex.test(form.email)) {
      alert('Invalid email format');
      valid = false;
      return;
    }


    const passwordRegex = /^(?=.*[!@#$%^&*])/;
    if (!form.password) {
      alert('Password is required');
      valid = false;
      return;
    } else if (!passwordRegex.test(form.password)) {
      alert('Password must contain at least one special symbol');
      valid = false;
      return;
    }


    if (valid) {
      router.push('/verification');
    }
  };

  return (
    <SafeAreaView>
    <ImageBackground source={require('../../assets/two.jpg')} style={styles.img}>
    <View style={styles.upper}>
    <Authback onpress={()=>router.push('/')}/>
    </View>


    <View style={styles.container}>
      <Text style={styles.maintxt}>Log In</Text>
      <Text style={styles.sectxt}>Enter your details to proceed further</Text>
      

      <AuthInput value={form.email} placeholder={"Email"} onchange={(e)=>setForm({...form, email: e})} imageSource={require('../../assets/icons/email.png')} keyboardType="mail-address"/>
      <AuthInput value={form.password} placeholder={"Password"} onchange={(e)=>setForm({...form, password: e})} imageSource={require('../../assets/icons/password.png')} showPassword={showPassword}/>

      <View style={styles.checkboxContainer}>
      <Checkbox style={styles.checkbox} color={'gray'} value={showPassword} onValueChange={setShowPassword}/>
        <Text style={styles.checkboxText}>Show Password</Text>
      </View>




      <AuthButton title="Log In" handlePress={handleSubmit} isLoading={isSubmitting}/>
      
    </View>

    </ImageBackground>
    <StatusBar  style='dark'/>
    </SafeAreaView>
  )
}

export default login

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
    height:'30%',
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
  maintxt:{
    color:'#484848',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 35,
    marginTop:30,
  },
  sectxt:{
    color:'#727272',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginBottom:50,
  },
  checkboxContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'85%',
    margin:10,
    marginBottom:30,
  },
  checkbox:{
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxText:{
    fontFamily: 'Inter-Regular',
    color: 'grey',
    fontSize: 14,
  },
})