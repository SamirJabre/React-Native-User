import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const booked = () => {
  return (
    <SafeAreaView style={styles.safearea}>
       <View style={{width:'100%' , height:'30%', alignItems:'center' , justifyContent:'flex-end'}}>
       <Image source={require('../../assets/success.png')}/>
       </View>
      <View style={styles.textContainer}>
        <Text style={styles.congrats}>Congratulations</Text>
        <Text style={styles.text}>Your tickets are successfully booked</Text>
      </View>
      <View style={styles.info}>

        <View style={styles.bookInfo}>
          <Text style={styles.bookInfoText}>Booking ID : #</Text>
          <Text style={styles.bookInfoText}>Booked On : 20-9-2024</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.home}>
            Return To Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default booked

const styles = StyleSheet.create({
  safearea:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  textContainer:{
    width: '100%',
    height: '12%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  congrats:{
    fontSize: 30,
    fontFamily: 'Inter-ExtraBold',
    color: '#0C3B2E',
  },
  text:{
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#626262',
    marginTop: 10,
  },
  info:{
    marginTop: 40,
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookInfo:{
    width: '80%',
    height: '45%',
    justifyContent: 'space-around',
  },
  bookInfoText:{
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#0C3B2E',
  },
  home:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
  },
  button:{
    width: '80%',
    height: 50,
    backgroundColor: '#0C3B2E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})