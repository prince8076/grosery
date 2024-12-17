import React, { useEffect, useState } from "react";
import { MapContainer, useMap, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon-2x.png";
import markershadowIcon from "leaflet/dist/images/marker-shadow.png";
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markershadowIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
function TrackingMap() {
  const [position, setPostion] = useState([28.613939, 77.209023]);

  const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo(position, map.getZoom());
    }, [position, map]);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPostion([latitude, longitude]);
          console.log(pos);
        },
        (err) => {
          console.log(`Error :${err.message}`);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleMarkerDragEnd = (event) => {
    const newLatLng = event.target.getLatLng();

    console.log(event.target);
    setPostion([newLatLng.lat, newLatLng.lng]);
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <RecenterMap position={position} />
      <Marker
        position={position}
        icon={defaultIcon}
        draggable={true}
        eventHandlers={{
          dragend: handleMarkerDragEnd,
        }}
      >
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
}

export default TrackingMap;
