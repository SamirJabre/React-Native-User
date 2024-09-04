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
}

export default Reviews

const styles = StyleSheet.create({})