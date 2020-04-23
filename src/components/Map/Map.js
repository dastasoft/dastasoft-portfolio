import React, { useState, useEffect } from 'react';
import { string, bool, node, number } from 'prop-types';

import GoogleMap from './GoogleMap';

const Map = ({
  apiKey,
  withoutMarker,
  loadingElement,
  containerElement,
  mapElement,
  latitude,
  longitude
}) => {
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      if (!withoutMarker) setIsMarkerShown(true);
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
    <GoogleMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={loadingElement}
      containerElement={containerElement}
      mapElement={mapElement}
      marker={isMarkerShown}
      onMarkerClick={handleMarkerClick}
      latitude={latitude}
      longitude={longitude}
    />
  );
};

Map.propTypes = {
  apiKey: string,
  withoutMarker: bool,
  loadingElement: node,
  containerElement: node,
  mapElement: node,
  latitude: number,
  longitude: number
};

Map.defaultProps = {
  apiKey: '',
  withoutMarker: false,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />,
  latitude: 37.9779404,
  longitude: -1.2358745
};

export default Map;
