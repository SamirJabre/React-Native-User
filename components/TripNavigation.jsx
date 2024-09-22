import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TripNavigation = ({onpress,title}) => {
  return (
    <>
          <Text onPress={onpress} style={styles.NavText}>{title}</Text>
          </>      
  
  )
}

export default TripNavigation

const styles = StyleSheet.create({
    
      NavText:{
        fontSize: 15,
        fontFamily: 'Inter-SemiBold',
        color: 'white',
      },
})