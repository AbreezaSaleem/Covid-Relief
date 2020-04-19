import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Downshift from "downshift";
import { charities } from "../content/charities";

const items = ["Nationwide", "Lahore", "Multan"];

const MapContainer = (props) => {
  const [city, setCity] = useState("Nationwide");
  const [activeCharities, setActiveCharities] = useState([]);

  useEffect(() => {
    setActiveCharities(
      charities.filter((charity) => [city, "Nationwide"].includes(charity.city))
    );
  }, [city]);

  const openCharity = (event) => {
    event.preventDefault();
    event.target.classList.toggle("active");
    let currentContent = event.target.nextElementSibling;
    const allContents = document.getElementsByClassName("content");
    for (let content of allContents) {
      if (content === currentContent) {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      } else {
        content.style.maxHeight = null;
      }
    }
  };

  return (
    <div className="map-container">
      <Downshift initialSelectedItem="Nationwide">
        {({ getItemProps, isOpen, toggleMenu, selectedItem }) => {
          setCity(selectedItem);
          return (
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
          );
        }}
      </Downshift>
      <div className="map-list-container">
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          containerStyle={containerStyle}
          initialCenter={{ lat: 29.99211, lng: 71.390472 }}
        />
        <div className="lists-container">
          <h3>
            Charities operating{" "}
            {city === "Nationwide" ? "nationwide" : `in ${city}`}
          </h3>
          {activeCharities.map((charity, index) => {
            const {
              bankName,
              accountTitle,
              accountNumber,
              iban,
              swiftCode,
            } = charity.bankDetails[0];
            return (
              <div key={`${charity.name}-${index}`}>
                <button
                  key={`${index}-${charity.city}`}
                  className="collapsible"
                  onClick={openCharity}
                >
                  {charity.name}
                </button>
                <div className="content">
                  {charity.webpage && (
                    <p>
                      Visit: <a href={charity.webpage}>{charity.webpage}</a>
                    </p>
                  )}
                  {charity.contact && <p> Contact: {charity.contact}</p>}
                  <h4>Bank Account Details</h4>
                  {accountTitle && <p>Account name: {accountTitle}</p>}
                  {bankName && <p>Bank: {bankName}</p>}
                  {accountNumber && <p>Account Number: {accountNumber}</p>}
                  {iban && <p>IBAN: {iban}</p>}
                  {swiftCode && <p>Swift Code: {swiftCode}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  position: "relative",
  width: "500px",
  height: "700px",
  margin: "auto",
  marginTop: "0.5em",
};

const mapStyles = {
  width: "500px",
  height: "700px",
  position: "relative",
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOLE_MAP_TOKEN,
})(MapContainer);
