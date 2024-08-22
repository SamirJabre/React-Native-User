import { Text, View } from 'react-native'
import React from 'react'

const ProgressBar = ({ circle_two,circle_three,line_one,line_two }) => {
  return (
    <>
    <View style={{
      backgroundColor:line_one , 
      justifyContent: 'center',
      alignItems:'flex-start',
      width:'50%',
      height:'20%',
      borderTopStartRadius:100,
      borderBottomStartRadius:100,}}>
        <View className="h-4 w-4 rounded-full" style={{backgroundColor:"#0C3B2E"}}></View>
      </View>

      <View className="h-4 w-4 rounded-full" style={{backgroundColor:circle_two}}></View>

      <View style={{
        backgroundColor:line_two,
        justifyContent: 'center',
        alignItems:'flex-end',
        width:'50%',
        height:'20%',
        borderTopEndRadius:100,
        borderBottomEndRadius:100,
      }}>
        <View className="h-4 w-4 rounded-full" style={{backgroundColor:circle_three}}></View>
      </View>
      </>
  )
}

export default ProgressBar