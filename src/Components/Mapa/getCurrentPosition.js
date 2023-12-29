import { useState } from "react";

const getCurrentPosition = () => {
    const [center, setCenter] = useState({ lat: -35.114197, lng: -71.279798 })
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