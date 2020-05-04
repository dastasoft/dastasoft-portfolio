import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap as GM,
  Marker
} from 'react-google-maps';
import { number, bool, func } from 'prop-types';

const GoogleMap = withScriptjs(
  withGoogleMap(({ marker, onMarkerClick, latitude, longitude, zoom }) => (
    <GM defaultZoom={zoom} defaultCenter={{ lat: latitude, lng: longitude }}>
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
  longitude: number.isRequired,
  zoom: number
};

GoogleMap.defaultProps = {
  zoom: 8
};

export default GoogleMap;
