import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReviewBox from './ReviewBox'
import axios from 'axios'
import { BASE_URL } from '@env';

const Reviews = ({driverId}) => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        axios.post(`${BASE_URL}/driver-reviews`,{
            id:driverId
        }).then(res=>{
            setReviews(res.data);
        }
        )
    },[])

  return (
    <View style={styles.reviewsContianer}>
    {reviews.length===0 ? <Text style={styles.noReviews}>No Reviews Yet</Text>
    :reviews.map((review)=>{
          return <ReviewBox 
          key={review.id} 
          userName={review.user_name} 
          user_pp={review.user_profile_picture} 
          comment={review.comment} 
          created_at={review.created_at}
          />
        })
    }
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({
    reviewsContianer:{
        height:'85%',
        width:'100%',
    },
    noReviews:{
        color:'#0C3B2E',
        fontSize:25,
        fontFamily:'Inter-SemiBold',
        textAlign:'center',
        marginTop:50,
    }
})