import { StyleSheet, Text, View , ImageBackground , SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import AuthButton from '../../components/AuthButton'
import AuthInput from '../../components/AuthInput'
import { StatusBar } from 'expo-status-bar'
import Checkbox from 'expo-checkbox';
import Authback from '../../components/Authback'
import { router } from 'expo-router'

const register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form,setForm] = useState({
    name:'',
    email:'',
    password:''
  });



  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleSubmit = () => {

    let valid = true;


    if (!form.name) {
      alert('Name is required');
      valid = false;
      return;
    }

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


    if (!acceptTerms) {
      alert('Please accept the terms and conditions');
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
    <Authback/>
    </View>
    <View style={styles.container}>
      <Text style={styles.maintxt}>Get Started</Text>
      <Text style={styles.sectxt}>Enter your details to proceed further</Text>
      <View style={styles.progress}>
      <ProgressBar circle_two={`#0C3B2E`} circle_three={`#A5A5A5`} line_one={`#0C3B2E`} line_two={`#A5A5A5`}/>
      </View>

      <AuthInput value={form.name} placeholder={"Full Name"} onchange={(e)=>setForm({...form, name: e})} imageSource={require('../../assets/icons/person.png')} keyboardType="name"/>
      <AuthInput value={form.email} placeholder={"Email"} onchange={(e)=>setForm({...form, email: e})} imageSource={require('../../assets/icons/email.png')} keyboardType="mail-address"/>
      <AuthInput value={form.password} placeholder={"Password"} onchange={(e)=>setForm({...form, password: e})} imageSource={require('../../assets/icons/password.png')} showPassword={showPassword}/>

      <View style={styles.checkboxContainer}>
      <Checkbox style={styles.checkbox} color={'gray'} value={showPassword} onValueChange={setShowPassword}/>
        <Text style={styles.checkboxText}>Show Password</Text>
      </View>


      <View style={styles.checkboxContaine}>
      <Checkbox style={styles.checkbox} color={'gray'} value={acceptTerms} onValueChange={setAcceptTerms}/>
        <Text style={styles.checkboxText}>I agree the terms and conditions</Text>
      </View>




      <AuthButton title="Sign Up" handlePress={handleSubmit} isLoading={isSubmitting}/>
      
    </View>

    </ImageBackground>
    <StatusBar  style='dark'/>
    </SafeAreaView>
  )
}

export default register

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
  },
  progress:{
    height:"5%",
    width:"50%",
    margin:20,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  checkboxContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'85%',
    margin:10,
  },
  checkboxContaine:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'85%',
    marginBottom:20,
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