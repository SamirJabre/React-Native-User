import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, BackHandler , SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

const home = () => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    AsyncStorage.getItem('Message')
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}></View>

    <View style={styles.upperbox}>

      <View style={styles.greeting}>
        <View style={styles.text}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Samir</Text>
        </View>
        <View style={styles.notificationIcon}>
        <TouchableOpacity><Image source={require('../../assets/icons/notification.png')} style={{height:'100%', width:'100%'}}/></TouchableOpacity>
        </View>
        </View>

        <View style={styles.dateContainer}>
        <Text style={styles.date}>WED</Text>
        <Text style={styles.date}>2024</Text>
        <Text style={styles.date}>08 10</Text>
        </View>


    </View>


    <View style={styles.stats}>

    <View style={styles.left}>
      <Text style={styles.uppertext}>Rides taken</Text>
      <Text style={styles.lowertext}>0</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.right}>
      <Text style={styles.uppertext}>Total miles traveled</Text>
      <Text style={styles.lowertext}>10.3 Miles</Text>
      </View>

      </View>


      <TouchableOpacity style={styles.redirect}>
        <Text style={styles.book}>Book your next bus now!</Text>
        <Image source={require('../../assets/icons/redirect.png')} style={{height:'50%' , width:'10%',marginRight:10}}/>
      </TouchableOpacity>

      <Text style={styles.latest}>Here's your latest rides</Text>


      <TouchableOpacity style={styles.recent}>

      <View style={styles.fromTo}>
      <Text style={styles.recentText}>From: </Text>
      <Text style={styles.recentText}>To: </Text> 
      </View>

      <View style={styles.otherInfo}>
      <Text style={styles.recentText}>Miles Traveled: </Text>
      <Text style={styles.recentText}>Date: </Text> 
      </View>

      </TouchableOpacity>


      <TouchableOpacity style={styles.recent}>

      <View style={styles.fromTo}>
      <Text style={styles.recentText}>From: </Text>
      <Text style={styles.recentText}>To: </Text> 
      </View>

      <View style={styles.otherInfo}>
      <Text style={styles.recentText}>Miles Traveled: </Text>
      <Text style={styles.recentText}>Date: </Text> 
      </View>

      </TouchableOpacity>

      </View>

    <View style={styles.navbar}>

    </View>

    </SafeAreaView>
  )
}
export default home

const styles = StyleSheet.create({
  safearea:{
    height: '100%',
    width: '100%',
    paddingTop: 0,
    marginTop: 0,
    justifyContent: 'space-between',
  },
  container:{
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperbox:{
    height: '30%',
    width: '90%',
    backgroundColor: '#0C3B2E',
    marginTop: 20,
    borderRadius: 30,
  },
  greeting:{
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text:{
    width: '30%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  hello:{
    color: 'white',
    fontSize: 25,
    fontFamily: 'Inter-Regular',
  },
  name:{
    color: 'white',
    fontSize: 25,
    fontFamily: 'Inter-SemiBold',
  },
  notificationIcon:{
    margin: 20,
    height: '27%',
    width: '7%',
  },
  dateContainer:{
    height: '55%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  date:{
    color: 'gray',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
  },
  stats:{
    backgroundColor: '#D1D1D1',
    height: '11%',
    width : '90%',
    marginTop: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line:{
    height: '80%',
    width: 1,
    backgroundColor: 'gray',
  },
  left:{
    height: '100%',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right:{
    height: '100%',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },