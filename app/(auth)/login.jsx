import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Link href='/' style={{color:"green"}}>Back to back to index</Link>
    </View>
  )
}

export default Login