import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import '../styles/pages/map.scss';

const MapContainer = (props) => {
  return (
    <div className="map-container">
      <h3 className="heading">Currently, these places have already had rations distributed. Fix this english.</h3>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{ lat: 29.992110, lng: 71.390472 }}
      />
    </div>
  );
};

const containerStyle = {
  position: 'relative',  
  width: '500px',
  height: '500px',
  margin: 'auto',
}

const mapStyles = {
  width: '500px',
  height: '500px',
  position: 'relative'
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOLE_MAP_TOKEN
})(MapContainer);