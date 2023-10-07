"use client";

import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { FaLocationDot } from "react-icons/fa";

// import { Icon, divIcon, point } from "leaflet";
import { useEffect, useState } from "react";

// create custom icon

// custom cluster icon
// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true),
//   });
// };

// markers
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  // {
  //   geocode: [48.85, 2.3522],
  //   popUp: "Hello, I am pop up 2"
  // }
  // {
  //   geocode: [48.855, 2.34],
  //   popUp: "Hello, I am pop up 3"
  // }
];

function LocationMarker() {
  const [position, setPosition] = useState({ lat: 48.8566, lng: 2.3522 });
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Map() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div className="w-full h-full ">
        <MapContainer
          center={[36.7538, 3.0588]}
          zoom={8}
          // scrollWheelZoom={false}
          className="w-[100vw] h-[100vh]"
        >
          {/* OPEN STREEN MAPS TILES */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerClusterGroup
            chunkedLoading
            // iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the markers */}
            <LocationMarker />
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    );
  }

  return <>loading</>;
}
