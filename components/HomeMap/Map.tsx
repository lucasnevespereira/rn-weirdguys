import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { customMapStyles, globalMapStyles } from './MapStyles'

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={globalMapStyles}
      customMapStyle={customMapStyles}
      />
  )
}

export default Map
