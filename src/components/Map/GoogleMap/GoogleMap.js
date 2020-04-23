import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap as GM,
  Marker
} from 'react-google-maps';
import { number, bool, func } from 'prop-types';

const GoogleMap = withScriptjs(
  withGoogleMap(({ marker, onMarkerClick, latitude, longitude }) => (
    <GM defaultZoom={8} defaultCenter={{ lat: latitude, lng: longitude }}>
      {marker && (
        <Marker
          position={{ lat: latitude, lng: longitude }}
          onClick={onMarkerClick}
        />
      )}
    </GM>
  ))
);

GoogleMap.propTypes = {
  marker: bool.isRequired,
  onMarkerClick: func.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired
};

export default GoogleMap;
