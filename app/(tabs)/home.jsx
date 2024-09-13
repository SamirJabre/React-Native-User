
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, BackHandler , SafeAreaView, Image, TouchableOpacity, Modal} from 'react-native'
import { useFonts } from 'expo-font';
import { router, SplashScreen, useLocalSearchParams } from 'expo-router';
import NavigationBar from '../../components/NavigationBar';
import axios from 'axios';
import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Recent from '../../components/Recent';

const home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const year = currentDate.getFullYear();
  const monthDay = currentDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }).replace('/', ' ');
  const { id } = useLocalSearchParams();
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [tripsCount, setTripsCount] = useState(0);
  const [tripsHistory, setTripsHistory] = useState([]);
  const latestTrips = tripsHistory.slice(-2);


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

  useEffect(() => {
    if (userId !== null) {
      try {
        axios.post(`${BASE_URL}/getuser`, {
          id: userId
        })
        .then(res => {
          console.log(res.data);
          setName(res.data.user.name);
          const tripsHistory = res.data.user.trips_history;
          if (tripsHistory) {
            setTripsHistory(JSON.parse(tripsHistory));
            console.log('Trips History:', tripsHistory);
            const tripsCount = JSON.parse(tripsHistory).length;
            console.log('Trips Count:', tripsCount);
            setTripsCount(tripsCount);
          }
        })
        .catch(err => {
          console.error('API call error:', err);
        });
      } catch (err) {
        console.error('Error in API call:', err);
      }
    }
  }, [userId]);

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  },[]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
    
      <View style={styles.upperbox}>

      <View style={styles.greeting}>
        <View style={styles.text}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.notificationIcon}>
        <TouchableOpacity><Image source={require('../../assets/icons/qr.png')} style={{height:'100%', width:'100%'}}/></TouchableOpacity>
        </View>
        </View>

        <View style={styles.dateContainer}>
        <Text style={styles.date}>{dayOfWeek}</Text>
        <Text style={styles.date}>{year}</Text>
        <Text style={styles.date}>{monthDay}</Text>
        </View>


      </View>



      <View style={styles.stats}>

      <View style={styles.left}>
      <Text style={styles.uppertext}>Trips Booked</Text>
      <Text style={styles.lowertext}>{tripsCount}</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.right}>
      <Text style={styles.uppertext}>Total miles traveled</Text>
      <Text style={styles.lowertext}>10.3 Miles</Text>
      </View>

      </View>


      <TouchableOpacity style={styles.redirect} onPress={()=>router.push('/buses')}>
        <Text style={styles.book}>Book your next bus now</Text>
        <Image source={require('../../assets/icons/redirect.png')} style={{height:'50%' , width:'10%',marginRight:10}}/>
      </TouchableOpacity>

      <Text style={styles.latest}>Here's your latest rides</Text>

      {tripsCount === 1 && <Recent tripId={latestTrips[0]} />}
      {tripsCount >= 2 && (
        <>
          <Recent tripId={latestTrips[0]} />
          <Recent tripId={latestTrips[1]} />
        </>
      )}
      <TouchableOpacity onPress={toggleChat} style={styles.chatButtonContainer}>
      <Image style={{height:'70%', width:'70%'}} source={require('../../assets/icons/bot.png')}/>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isChatOpen}
        onRequestClose={toggleChat}
      >
        <View style={styles.chatPopup}>
          <Text style={styles.chatHeader}>Chatbot</Text>
          <Text>Welcome to our chat service!</Text>
          {/* Add your chatbot component or iframe here */}
          <TouchableOpacity onPress={toggleChat}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
      
    </View>

    <NavigationBar/>

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
    borderRadius: 20,
  },
  greeting:{
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text:{
    width: '60%',
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  date:{
    color: 'gray',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    marginRight: 20,
  },
  stats:{
    backgroundColor: '#E0E0E0',
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
  uppertext:{
    color: 'black',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    marginTop:10,
  },
  lowertext:{
    color: 'black',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    marginTop:2,
  },
  redirect:{
    borderRadius: 15,
    backgroundColor: '#D1D1D1',
    height: '7%',
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  book:{
    color: 'black',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    margin: 10,
  },
  latest:{
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    alignSelf: 'flex-start',
    width: '90%',
    alignSelf: 'center',
  },
  recent:{
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '15%',
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    marginTop: 10,
  },
  fromTo:{
    justifyContent: 'space-around',
    height: '100%',
    width: '42%',
  },
  recentText:{
    color: 'black',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  otherInfo:{
    justifyContent: 'space-around',
    height: '100%',
    width: '42%',
  },
  navbar:{
    height: '10%',
    width: '100%',
    backgroundColor: 'blue',
  },
  chatButtonContainer:{
    height: 50,
    width: 50,
    backgroundColor: '#0C3B2E',
    borderRadius: 12,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
  },
  chatPopup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  chatHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    color: '#007bff',
  },
})