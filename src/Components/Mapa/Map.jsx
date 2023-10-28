import { React, useState } from "react";
import { GoogleMap, useLoadScript, InfoWindowF, MarkerF } from "@react-google-maps/api";
import './Map.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs  } from '@fortawesome/free-solid-svg-icons'
import { styleMap } from "./StyleMap";
import circle from "/src/Components/Icons/circle.svg"


const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: `${import.meta.env.VITE_APP_API_KEY}` });
  if (isLoaded) return <RenderMap />
}
export default Map;

const RenderMap = () => {
  const [center, setCenter] = useState({lat: -34.978062, lng: -71.25259})
  const [marketPosition, setMarketPosition] = useState(null)

  const getposition = () =>  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(pos)
          setMarketPosition(pos)
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  return <GoogleMap
    zoom={14}
    center={center}
    mapContainerClassName="map"
    options={{
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      styles: styleMap
    }}
  >
  <MarkerF position={marketPosition} icon={circle}></MarkerF>
  <button className="button-geolocation" onClick={getposition}><FontAwesomeIcon icon={faLocationCrosshairs}/></button>
  </GoogleMap>

}