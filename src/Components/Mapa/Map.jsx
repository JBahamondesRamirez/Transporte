import { React, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Map.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styleMap from "./styleMap.js";
import circle from "/src/Components/Icons/circle.svg"
import getCurrentPosition from "./getCurrentPosition.js";
import getData from "./getDataBus.js";
import iconBus from "/src/Components/Icons/bus.svg"
import getDataParaderos from "./getDataParaderos.js";
import busStop from '../Icons/busStop.svg'

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: `${import.meta.env.VITE_APP_API_KEY}` });
  if (isLoaded) return <RenderMap />
}
export default Map;

const RenderMap = () => {
  const { datapara } = getDataParaderos()
  const { data } = getData()
  const { marketPosition, center, getposition } = getCurrentPosition()
  const [zoom, setZoom] = useState(15)
  return <div className="containerMap">
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="map"
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        styles: styleMap,
        zoomControl: false,
        mapTypeControl: false
      }}
    >
      {data.map((position) => { return <MarkerF key={position.id} position={{ lat: position.Latitud, lng: position.Longitud }} icon={iconBus}></MarkerF> })}
      {datapara.map((pos) => { return <MarkerF key={pos.idparadero} position={{ lat: pos.latitud, lng: pos.longitud }} icon={busStop} ></MarkerF> })}
      <MarkerF position={marketPosition} icon={circle}></MarkerF>
      <button className="button-geolocation" onClick={getposition}><FontAwesomeIcon icon={faLocationCrosshairs} /></button>
      <button className="zoomIn" onClick={() => setZoom(zoom + 1)}><FontAwesomeIcon  icon={faPlus} /></button>
      <button className="zoomOut" onClick={() => setZoom(zoom - 1)}><FontAwesomeIcon  icon={faMinus} /></button>
    </GoogleMap>
  </div>
}