import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { mapStyles } from './MapStyles'

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={mapStyles}
      />
  )
}

export default Map
