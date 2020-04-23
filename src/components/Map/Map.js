import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const apiKey = '';

const RawMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(
  ({
    isMarkerShown,
    onMarkerClick,
    latitude = 37.9779404,
    longitude = -1.2358745
  }) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      {isMarkerShown && (
        <Marker
          position={{ lat: latitude, lng: longitude }}
          onClick={onMarkerClick}
        />
      )}
    </GoogleMap>
  )
);

const Map = () => {
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  };

  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker();
  };

  useEffect(() => {
    delayedShowMarker();
  }, []);

  return (
    <RawMap isMarkerShown={isMarkerShown} onMarkerClick={handleMarkerClick} />
  );
};

export default Map;
