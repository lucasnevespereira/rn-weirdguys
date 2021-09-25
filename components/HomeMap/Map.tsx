import React, { useContext } from 'react'
import { Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { AppContext } from '../../context';
import { DELTA } from '../../enum';
import { customMapStyles, globalMapStyles } from './MapStyles'

const Map = () => {
  const { positionContext } = useContext(AppContext);

  const initialRegion = {
    latitude: positionContext.position.latitude,
    longitude: positionContext.position.longitude,
    latitudeDelta: DELTA.MAX,
    longitudeDelta: DELTA.MAX,
  }

  console.log(initialRegion)

  return (
    <>
      {positionContext.position.latitude == 0 ?
        <Text>{'Fetching positio...'}</Text> : (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={globalMapStyles}
        customMapStyle={customMapStyles}
        region={initialRegion}
        />
      )}
    </>
  )
}

export default Map
