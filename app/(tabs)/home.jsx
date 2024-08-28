import { router } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'

const home = () => {

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})