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

const styles = StyleSheet.create({})