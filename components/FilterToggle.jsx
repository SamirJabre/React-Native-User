import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterToggle = ({text , onpress , status}) => {
  return (
    <TouchableOpacity onPress={onpress} style={status === false ? styles.off : styles.on}>
      <Text style={styles.toggleText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default FilterToggle

const styles = StyleSheet.create({
    off:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '23%',
    backgroundColor: '#6D9773',
    borderRadius: 10,
  },
  on:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '23%',
    backgroundColor: '#0C3B2E',
    borderRadius: 10,
  },
  toggleText:{
    color: 'white',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
    
})