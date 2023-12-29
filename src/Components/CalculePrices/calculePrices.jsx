import './calculePrices.css'
import { React, useState, useEffect, useRef } from "react"
import Header from "../ContentLogo/contentLogo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.js"
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import ClipLoader from "react-spinners/ClipLoader";

const calculePrices = () => {
    const [cantidad, setCantidad] = useState(1)
    const [dataCoste, setDataCoste] = useState([])
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false)

    const options = [
        { "value": "Curico", "label": "Curico" },
        { "value": "Molina", "label": "Molina" }
    ]

    useEffect(() => {
        let cantidadValue = +cantidad;
        if (cantidadValue < 1) {
            setCantidad(25);
        } else if (cantidadValue > 25) {
            setCantidad(1);
        }
    }, [cantidad]);

    const postData = (event) => {
        event.preventDefault();
        const formElement = formRef.current;
        if (formElement) {
            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData);
            fetch("https://4924-190-211-167-172.ngrok-free.app/calculateCoste", {
                method: 'POST',
                mode: 'cors',
                headers: { Accept: 'application.json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then((response) => response.json())
                .then((res) => {
                    setDataCoste(res)
                    setLoading(false)
                });
        }
    }
    const handleChange = ({ target: { value } }) => setCantidad(value);

    const funcions = (e) => {
        setLoading(true);
        postData(e);
    }

    return <section className='containerCalculePrices'>
        <Header />
        <h2 className='tittlePrice'>Cotiza tu pasaje</h2>
        <form ref={formRef} className="formPrices">
            <div className="input">
                <Select isSearchable styles={styles} className='inputViaje' placeholder="Origen" name='origen' options={options} />
            </div>
            <div className="input">
                <Select isSearchable styles={styles} className='inputViaje' placeholder="Destino" name='destino' options={options} />
            </div>
            <div className='inputCount'>
                <div className='containerCount'>
                    <button type='button' onClick={() => setCantidad(cantidad - 1)}><FontAwesomeIcon icon={faUserMinus} /></button>
                    <input onChange={handleChange} name='cantidad' type="number" value={parseInt(cantidad)} readOnly />
                    <button type='button' onClick={() => setCantidad(cantidad + 1)}><FontAwesomeIcon icon={faUserPlus} /></button>
                </div>
                <div className='totalPrice'>
                    <span>Total: ${dataCoste.precioViaje}</span>
                </div>
            </div>
            <ClipLoader
                color={"#36B563"}
                loading={loading}
                size={30}
            />
            <button onClick={(e) => { funcions(e) }} type='button' className='buttonCalculate'>Calcular</button>
        </form>
    </section>
}
export default calculePrices;