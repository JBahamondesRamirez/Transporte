import { useState } from "react";

const getCurrentPosition = () => {
    const [center, setCenter] = useState({ lat: -34.978062, lng: -71.25259 })
    const [marketPosition, setMarketPosition] = useState(null)
    const getposition = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
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
    return{marketPosition, center, getposition}
}
export default getCurrentPosition;