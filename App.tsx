import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles'
import HomeScreen from './screens/HomeScreen';
import { AppContext } from './context';
import { defaultPosition, defaultSpots } from './types';
import { useGetLocation } from './hooks/useGetLocation';

export default function App() {
  const [position, setPosition] = React.useState(defaultPosition)
  const [spots, setSpots] = React.useState(defaultSpots)

  const appValues = {
    positionContext: { position, setPosition },
    spotsContext: {spots, setSpots}
  }

  useEffect(() => {
    useGetLocation().then(res => {
      if (res) {
        let currPosition = {
          latitude: res.coords.latitude,
          longitude: res.coords.longitude
        }
        setPosition(currPosition)
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <AppContext.Provider value={appValues}>
            <HomeScreen />
      </AppContext.Provider>
    </View>
  );
}



