import { React, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './Mapa.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons'

export default function Mapa() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: `${import.meta.env.VITE_APP_API_KEY}`});
  if (isLoaded) return <Map/>
}


function Map() {
  const [latitude, setLatitude] = useState(-34.97806252027577);
  const [longitude, setLongitude] = useState(-71.25259385438525);
  
  const getposition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  return <GoogleMap 
  zoom={16} 
  center={{ lat: latitude, lng: longitude }} 
  mapContainerClassName="container-map"
  options={{
    fullscreenControl:false,
    streetViewControl:false,
    mapTypeControl:false
  }}><button className="button-geolocation" onClick={getposition}><FontAwesomeIcon icon={faLocationCrosshairs}/></button>
  </GoogleMap>
}