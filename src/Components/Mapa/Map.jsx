import { React } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Map.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import styleMap from "./styleMap.js";
import circle from "/src/Components/Icons/circle.svg"
import getCurrentPosition from "./getCurrentPosition.js";
import getData from "./getDataBus.js";
import iconBus from "/src/Components/Icons/bus.svg"

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: `${import.meta.env.VITE_APP_API_KEY}`});
  if (isLoaded) return <RenderMap />
}
export default Map;

const RenderMap = () => {
  const {data} = getData()
  const {marketPosition, center, getposition} = getCurrentPosition()
  return <div className="containerMap">
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="map"
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        styles: styleMap
      }}
    >
      {data.map((position) => { return <MarkerF key={position.id} position={{ lat: position.Latitud, lng: position.Longitud }} icon={iconBus}></MarkerF> })}
      <MarkerF position={marketPosition} icon={circle}></MarkerF>
      <button className="button-geolocation" onClick={getposition}><FontAwesomeIcon icon={faLocationCrosshairs} /></button>
    </GoogleMap>
  </div>
}