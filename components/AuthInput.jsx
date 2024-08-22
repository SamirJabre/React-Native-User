import { StyleSheet, Text, View ,TextInput } from 'react-native'
import React from 'react'

const AuthInput = ({placeholder}) => {
  return (
    <TextInput
    style={styles.input}
    placeholder={placeholder}
    >

    </TextInput>
  )
}

export default AuthInput

const styles = StyleSheet.create({
  input: {
    height: 60,
    width:'85%',
    borderColor: 'gray',
    borderWidth: 0.8,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    fontFamily: 'Inter-SemiBold',
    color: 'grey',
    fontSize: 16,
  }
})