import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'expo-router';


const NavigationBar = () => { 

  const router = useRouter();
  const pathname = usePathname();


  const getCurrentScreen = () => {
    const currentPath = pathname.replace('/', '');
    return currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
  };

  const currentScreen = getCurrentScreen();


  const handlePress = (screen) => {
    router.push(`/${screen.toLowerCase()}`);
  };


  const icons = {
    Home: currentScreen === 'Home' ? require('../assets/icons/home-green.png') : require('../assets/icons/home-white.png'),
    Search: currentScreen === 'Search' ? require('../assets/icons/search-green.png') : require('../assets/icons/search-white.png'),
    Buses: currentScreen === 'Buses' ? require('../assets/icons/bus-green.png') : require('../assets/icons/bus-white.png'),
    Profile: currentScreen === 'Profile' ? require('../assets/icons/person-gren.png') : require('../assets/icons/person-white.png')
  };
  return (
    <View style={styles.navbarcontainer}>
      {Object.keys(icons).map((screen) => (
        <TouchableOpacity key={screen} onPress={() =>handlePress(screen)} style={styles.element}>
          <Image source={icons[screen]} style={styles.icon} />
        </TouchableOpacity>
      ))}
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