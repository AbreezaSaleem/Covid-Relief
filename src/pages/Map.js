import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Downshift from "downshift";

import "../styles/pages/map.scss";

const items = ["Nationwide", "Lahore", "Multan"];

const MapContainer = (props) => {
  return (
    <div className="map-container">
      <Downshift>
        {({
          getLabelProps,
          getInputProps,
          getButtonProps,
          getItemProps,
          isOpen,
          toggleMenu,
          clearSelection,
          selectedItem,
          inputValue,
          highlightedIndex,
        }) => (
          <div style={{ width: 250, margin: "auto" }}>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                style={{ display: "block" }}
              >
                {selectedItem ? selectedItem : "Select a city"}
              </button>
              <button
                id="my-select"
                type="button"
                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                onClick={toggleMenu}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              {isOpen ? (
                <div style={{ display: "block" }} className="dropdown-menu">
                  {items.map((item) => (
                    <button
                      {...getItemProps({ item })}
                      key={item}
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{ lat: 29.99211, lng: 71.390472 }}
      />
    </div>
  );
};

const containerStyle = {
  position: "relative",
  width: "500px",
  height: "500px",
  margin: "auto",
  marginTop: "0.5em",
};

const mapStyles = {
  width: "500px",
  height: "500px",
  position: "relative",
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOLE_MAP_TOKEN,
})(MapContainer);
