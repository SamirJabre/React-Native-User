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

const result = () => {
  return (
    <View>
      <Text>result</Text>
    </View>
  )
}

export default result

const styles = StyleSheet.create({})