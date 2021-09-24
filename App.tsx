import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles'
import * as Location from 'expo-location'
import HomeScreen from './screens/HomeScreen';

const initialState = {
      latitude:  48.9289,
      longitude: 2.04472,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
}


export default function App() {
  const [position, setPosition] = useState(initialState)
  const getLocation = async () => {
    return await Location.getCurrentPositionAsync()

  }
  
  useEffect(() => {
    let res = getLocation()
    console.log("res", res);
    
      // setPosition({
      //   ...position,
      //   latitude: res.coords.latitude,
      //   longitude: res.coords.longitude,
      // })
    
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}


  
