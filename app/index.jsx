import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , ImageBackground, TouchableOpacity } from 'react-native';
import { Link , SplashScreen  } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as React from 'react';
import { TouchableHighlight } from 'react-native-web';

SplashScreen.preventAutoHideAsync();
export default function App() {

  const [fontsLoaded , error] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.otf'),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);


  if(!fontsLoaded && !error) return null;

  return (
    <>
    {/* <View>
    <ImageBackground source={require('../assets/one.jpg')} style={{width: '100%', height: '70%'}}>
    <StatusBar style="dark"/>
    </ImageBackground>
    </View> */}
    <View style={styles.container}>
    <View style={styles.img_container}>
      <ImageBackground source={require('../assets/one.jpg')} style={styles.img}>
      </ImageBackground>
    </View>
  
      <Text style={styles.main_text}>Join us today</Text>
      <Text style={styles.sec_text}>Enter your details to proceed further</Text>
      
      
      <View style={styles.progress}>

      <View style={styles.first_hor_line}>
        <View style={styles.first_circle}></View>
      </View>

      <View style={styles.circle}></View>

      <View style={styles.second_hor_line}>
        <View style={styles.circle}></View>
      </View>

      </View>
      
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.button}><Text style={styles.buttons_text}>Get Started</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttons_text}>Log In</Text></TouchableOpacity>
      </View>



      <StatusBar style="dark"/>
    </View>
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
    backgroundColor:"blue",
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
  },

  

  buttons:{
    height:"18%",
    width:"85%",
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
  }, 
  button:{
    width:'100%',
    height:'45%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6D9773',
    borderRadius:100,
  },

  buttons_text:{
    color:'white',
    fontSize:20,
    fontFamily: 'Inter-Regular',
    
  },

  progress:{
    height:"5%",
    width:"50%",
    margin:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },


  first_hor_line:{
    justifyContent: 'center',
    alignItems:'flex-start',
    width:'50%',
    height:'20%',
    backgroundColor:'#A5A5A5',
    borderTopStartRadius:100,
    borderBottomStartRadius:100,
  },
  second_hor_line:{
    justifyContent: 'center',
    alignItems:'flex-end',
    width:'50%',
    height:'20%',
    backgroundColor:'#A5A5A5',
    borderTopEndRadius:100,
    borderBottomEndRadius:100,
  },

  first_circle:{
    width:15,
    height:15,
    borderRadius:100,
    backgroundColor:'#0C3B2E',
  },
  circle:{
    width:15,
    height:15,
    borderRadius:100,
    backgroundColor:'#A5A5A5',
  },
});