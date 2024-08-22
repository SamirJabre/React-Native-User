import { StyleSheet, Text, View , ImageBackground , SafeAreaView } from 'react-native'
import React from 'react'
import { Redirect , router } from 'expo-router'
import { useSafeAreaInsets  } from 'react-native-safe-area-context'
import ProgressBar from '../../components/ProgressBar'
import AuthButton from '../../components/AuthButton'
import AuthInput from '../../components/AuthInput'
import { StatusBar } from 'expo-status-bar'

const register = () => {
  return (
    <SafeAreaView>
    <ImageBackground source={require('../../assets/two.jpg')} style={styles.img}>
    <View style={styles.upper}><Text>back button</Text></View>
    <View style={styles.container}>
      <Text style={styles.maintxt}>Get Started</Text>
      <Text style={styles.sectxt}>Enter your details to proceed further</Text>
      <View style={styles.progress}>
      <ProgressBar circle_two={`#0C3B2E`} circle_three={`#A5A5A5`} line_one={`#0C3B2E`} line_two={`#A5A5A5`}/>
      </View>

      <AuthInput placeholder={"Full Name"}/>
      <AuthInput placeholder={"Email"}/>
      <AuthInput placeholder={"Password"}/>


      <AuthButton title="Sign Up" handlePress={()=>router.push('/verification')}/>
      
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
    justifyContent:'center',
    alignItems:'center'
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
    marginTop:10,
  },
  progress:{
    height:"5%",
    width:"50%",
    margin:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
})