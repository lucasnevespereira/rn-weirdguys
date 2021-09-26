import React, { useContext } from 'react'
import { Text } from 'react-native';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { AppContext } from '../../context';
import { DELTA, MAPTYPE } from '../../enum';
import { Spot } from '../../types';
import { customMapStyles, globalMapStyles } from './MapStyles'

const Map = () => {
  const { positionContext } = useContext(AppContext);
  const { spotsContext } = useContext(AppContext);

  const  tMarks = [
    {
        coordinate: {
            latitude: 37.298984,
            longitude: -122.050362
        },
        title: "Best Place",
        description: "Description1",
        id: 1
    },
    {
        coordinate: {
            latitude: 37.297803,
            longitude: -122.050037
        },
        title: "Best Place2",
        description: "Description 2",
        id: 2
    }
]

  const initialRegion = {
    latitude: positionContext.position.latitude,
    longitude: positionContext.position.longitude,
    latitudeDelta: DELTA.MAX,
    longitudeDelta: DELTA.MAX,
  }

  const handleDoublePress = (e: MapEvent) => {
    let newSpot: Spot = {
      position: {
        latitude: e.nativeEvent.position.x,
        longitude: e.nativeEvent.position.y,
      },
      reportedAt: new Date()
    }

    spotsContext.setSpots([...spotsContext.spots, newSpot])
    console.log(spotsContext.spots);
  }


  return (
    <>
      {positionContext.position.latitude == 0 ?
        <Text>{'Fetching position...'}</Text> : (
          <MapView
            provider={PROVIDER_GOOGLE}
            mapType={MAPTYPE.STANDARD}
            style={globalMapStyles}
            customMapStyle={customMapStyles}
            region={initialRegion}
            showsScale
            showsCompass
            showsPointsOfInterest
            showsBuildings
            showsMyLocationButton
            showsUserLocation
            loadingEnabled
            zoomEnabled
            zoomControlEnabled
            showsTraffic={false}
            onPress={handleDoublePress}
          >
            {spotsContext.spots.map((s, idx) => {
              return <Marker
                key={idx}
                coordinate={s.position}
                title={'Unsafe Spot here'}
                description={'Reported at ' + s.reportedAt}
               />
            })}
        </MapView>
      )}
    </>
  )
}

export default Map
