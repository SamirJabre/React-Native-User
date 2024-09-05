import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , ImageBackground } from 'react-native';
import {  SplashScreen , router } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as React from 'react';
import AuthButton from '../components/AuthButton';
import ProgressBar from '../components/ProgressBar';
import NavigationBar from '../components/NavigationBar';

SplashScreen.preventAutoHideAsync();
export default function App() {

  const [fontsLoaded , error] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.otf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.otf'),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);


  if(!fontsLoaded && !error) return null;

  return (
    <>
    <View style={styles.container}>
    <View style={styles.img_container}>
      <ImageBackground source={require('../assets/one.jpg')} style={styles.img}>
      </ImageBackground>
    </View>
  
      <Text style={styles.main_text}>Join us today</Text>
      <Text style={styles.sec_text}>Enter your details to proceed further</Text>
      
      
      <View style={styles.progress}>

      <ProgressBar circle_two={`#A5A5A5`} circle_three={`#A5A5A5`} line_one={`#A5A5A5`} line_two={`#A5A5A5`}/>

      </View>
      
      
      <AuthButton title="Get Started" handlePress={()=>router.push('/register')}/>
      <AuthButton title="LogIn" handlePress={()=>router.push('/login')}/>
      </View>
      <StatusBar style='dark'/>
      <NavigationBar/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:"center",
    justifyContent: 'flex-start',
    backgroundColor : "#EAEAEA",
  },

  img_container:{
    width: '100%',
    height: '45%',
    marginBottom: 30,
  },

  img:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  main_text:{
    color:'#484848',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 35,
  },

  sec_text:{
    color:'#727272',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginTop:10,
  },

  

  buttons:{
    height:"18%",
    width:"85%",
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
  }, 
  

  progress:{
    height:"5%",
    width:"50%",
    margin:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },


  
});