// src/Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerIcon from "/png/marker.png";

const Map = ({ latitude, longitude }) => {
  const position = [latitude, longitude];
  const customIcon = new L.icon({
    iconUrl: customMarkerIcon,
    iconSize: [32, 32], // Customize the icon size
    iconAnchor: [16, 32], // Set the anchor point of the icon
    popupAnchor: [0, -32], // Set the popup anchor point
  });
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: "100%", height: "320px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
