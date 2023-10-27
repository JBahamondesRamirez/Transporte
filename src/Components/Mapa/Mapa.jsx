import { React, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './Mapa.css'

export default function Mapa() {
  const [latitude, setLatitude] = useState(-34.97806252027577);
  const [longitude, setLongitude] = useState(-71.25259385438525);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  const Props = {
    zoom: 15,
    center: {
      lat: latitude,
      lng: longitude
    }
  };

  const { isLoaded } = useLoadScript({ googleMapsApiKey: `${import.meta.env.VITE_APP_API_KEY}` });
  if (isLoaded) return <Map latitude={Props.center.lat} longitude={Props.center.lng} />
}

function Map({ latitude, longitude }) {
  return <GoogleMap 
  zoom={15} 
  center={{ lat: latitude, lng: longitude }} 
  mapContainerClassName="container-map"
  options={{
    fullscreenControl:false
    
  }}>
  </GoogleMap>
}