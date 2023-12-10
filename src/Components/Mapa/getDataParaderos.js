import { useEffect, useState } from "react";

const getDataParaderos = () => {
    const [datapara, setDatapara] = useState([])
    const options = {
        method: 'GET',
        mode: 'cors'
    }
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/getStops", options)
          .then((response) => response.json())
          .then((res) => {
             setDatapara(res)
          });
    }, []);

    return{datapara}
}
export default getDataParaderos;