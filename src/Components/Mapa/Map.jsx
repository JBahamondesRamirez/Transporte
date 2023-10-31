import { React, useState, useEffect, createContext } from "react";
import { GoogleMap, useLoadScript, InfoWindowF, MarkerF } from "@react-google-maps/api";
import './Map.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import styleMap from "./styleMap.js";
import circle from "/src/Components/Icons/circle.svg"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "./conection.js";
import iconBus from "/src/Components/Icons/bus.svg"

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: `${import.meta.env.VITE_APP_API_KEY}` });
  if (isLoaded) return <RenderMap />
}
export default Map;

const RenderMap = () => {
  const [center, setCenter] = useState({ lat: -34.978062, lng: -71.25259 })
  const [marketPosition, setMarketPosition] = useState(null)
  const [data, setData] = useState([])

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)
  useEffect(() => {
    const fetchData = () => {
        const getTask = ref(database, 'coordenadas/micro1');
        onValue(getTask, (snapshot) => {
          const task = snapshot.val()
          setData([task])
        })
      }
      fetchData()
      setInterval(fetchData, 1000);
  }, []);

  const getposition = () => {
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
      {data.map((position) => { return <MarkerF key={indexedDB} position={position} icon={iconBus}></MarkerF>})}
      <MarkerF position={marketPosition} icon={circle}></MarkerF>
      <button className="button-geolocation" onClick={getposition}><FontAwesomeIcon icon={faLocationCrosshairs} /></button>
    </GoogleMap>
  </div>

}