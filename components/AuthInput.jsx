import { StyleSheet, Text, View ,TextInput , Image} from 'react-native'
import React,{useState} from 'react'

const AuthInput = ({placeholder , value , onchange , imageSource , showPassword}) => {


  return (

    <View style={styles.inputcontainer}>
    <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onchange} secureTextEntry={placeholder === 'Password' && !showPassword} underlineColorAndroid="transparent">
    </TextInput>
    <Image source={imageSource} style={styles.icon}/>
    </View>



    
  )
}

export default AuthInput

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: 'row',
    height: 60,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 10,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  input: {
    height: '100%',
    width:'86%',
    marginBottom: 15,
    padding: 10,
    fontFamily: 'Inter-SemiBold',
    color: 'grey',
    fontSize: 16,
  },
  icon:{
    width: 30,
    height: 30,
    margin:'auto',
  },
})