import { useEffect, useState } from "react";

const getDataParaderos = () => {
    const [datapara, setDatapara] = useState([])
    const options = {
        method: 'POST',
        mode: 'cors'
    }
    
    useEffect(() => {
        fetch("https://4924-190-211-167-172.ngrok-free.app/getStops", options)
          .then((response) => response.json())
          .then((res) => {
             setDatapara(res)
          });
    }, []);

    return{datapara}
}
export default getDataParaderos;