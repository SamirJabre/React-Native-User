import { StatusBar } from 'expo-status-bar';
import { StyleSheet , Text , View , TouchableOpacity, SafeAreaView , ScrollView, Image } from 'react-native';
import {  useState ,useEffect } from 'react';
import * as React from 'react';
import Authback from '../../components/Authback';
import FilterToggle from '../../components/FilterToggle';
import { router, useLocalSearchParams } from 'expo-router';
import NavigationBar from '../../components/NavigationBar';
import BusBox from '../../components/BusBox';
import axios from 'axios';
import { BASE_URL } from '@env';

export default function result() {
  const {  from , to , ticket , date  } = useLocalSearchParams();
  const [price, setPrice] = useState(false);
  const [time, setTime] = useState(false);
  const [latest, setLatest] = useState(false);
  const [rating, setRating] = useState(false);
  const [trips, setTrips] = useState([]);

export default result

const styles = StyleSheet.create({})