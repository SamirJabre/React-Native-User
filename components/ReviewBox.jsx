import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReviewBox = ({userName,user_pp,comment,created_at}) => {
    const dateOnly = created_at.split(' ')[0];
    const pp= {uri:user_pp}
  return (
    <View style={styles.reviewBox}>
    <View style={styles.left}>
        <Image source={pp} style={{height:60,width:60,margin:5 , borderRadius:100}}/>
        <View style={styles.content}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.comment}>{comment}</Text>
        </View>
    </View>
    <View style={styles.right}>
        <Text style={styles.date}>{dateOnly}</Text>
    </View>
    </View>
  )
}

export default ReviewBox

const styles = StyleSheet.create({
    reviewBox:{
        height:'15%',
        width:'100%',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#5E5E5E',
    },
    left:{
        height:'100%',
        width:'75%',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
    },
    content:{
        height:'50%',
        width:'100%',
        justifyContent:'space-evenly',
    },
    userName:{
        color:'#0C3B2E',
        fontSize:16,
        fontFamily:'Inter-SemiBold',
    },
    comment:{
        fontSize:12,
        fontFamily:'Inter-Regular',
        color:'#5E5E5E',
    },
    right:{
        height:'100%',
        width:'25%',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:10,
    },
    date:{
        color:'#5E5E5E',
        fontFamily:'Inter-Regular',
        fontSize:10,
    },
})