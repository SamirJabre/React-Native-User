import { StyleSheet , TouchableOpacity , Text } from 'react-native'
import React from 'react'

const AuthButton = ({title,handlePress,isLoading}) => {
  return (
    <TouchableOpacity 
    style={styles.button}
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    >
      <Text style={styles.buttons_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({
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
    fontFamily: 'Inter-SemiBold',
  },
})