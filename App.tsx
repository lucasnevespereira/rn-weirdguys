import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles'
import * as Location from 'expo-location'
import HomeScreen from './screens/HomeScreen';

export default function App() {

  const _getLocation = async () => {
    
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync()
    console.log(location);
    return;
  }
  
  useEffect(() => {
    _getLocation()
  }, [])

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}


  
