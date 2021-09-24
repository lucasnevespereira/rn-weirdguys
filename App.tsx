import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles'
import * as Location from 'expo-location'
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const getLocation = async () => {
    return await Location.getCurrentPositionAsync()

  }
  
  useEffect(() => {
   getLocation()  
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}


  
