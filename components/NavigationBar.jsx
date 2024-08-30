import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import home from '../assets/icons/home-white.png'

const NavigationBar = () => {
    const test = () => {
        console.log('test')
    }
  return (
    <View style={styles.navbarcontainer}>
      <TouchableOpacity style={styles.element} onFocus={test}>
      <Image source={home} style={styles.icon}/>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
      <Image source={home} style={styles.icon}/>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
      <Image source={home} style={styles.icon}/>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
      <Image source={home} style={styles.icon}/>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({
    navbarcontainer:{
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    element:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '20%',
    },
    icon:{
        height: 30,
        width: 30,
    },
    text:{
        fontFamily: 'Inter-Regular',
        fontSize: 12,
    }
})