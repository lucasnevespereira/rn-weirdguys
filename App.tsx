import React from 'react';
import { View } from 'react-native';
import mapStyles from './styles/mapStyle'
import styles from './styles/style'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyles}
      />
    </View>
  );
}


  
