import './calculePrices.css'
import { React, useState, useEffect } from "react"
import Header from "../ContentLogo/contentLogo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'

const calculePrices = () => {
    const [cantidad, setCantidad] = useState(1)

    useEffect(() => {
        let cantidadValue = +cantidad;
        if (cantidadValue < 1) {
            setCantidad(25);
        } else if (cantidadValue > 25) {
            setCantidad(1);
        }
    }, [cantidad]);

    const handleChange = ({ target: { value } }) => setCantidad(value);

    return <section className='containerCalculePrices'>
        <Header />
        <h2 className='tittlePrice'>Cotiza tu pasaje</h2>
        <form className="formPrices">
            <div className="input">
                <input type="text" required  name='origen' placeholder='Origen' autoComplete='off' /><FontAwesomeIcon className='icon' icon={faHouse} />
            </div>
            <div className="input">
                <input type="text" required name='destino' placeholder='Destino' autoComplete='off' /><FontAwesomeIcon className='icon' icon={faLocationDot} />
            </div>
            <div className='inputCount'>
                <div className='containerCount'>
                    <button type='button' onClick={() => setCantidad(cantidad - 1)}><FontAwesomeIcon icon={faUserMinus} /></button>
                    <input  onChange={handleChange} type="text" value={cantidad} readOnly />
                    <button type='button' onClick={() => setCantidad(cantidad + 1)}><FontAwesomeIcon icon={faUserPlus} /></button>
                </div>
                <div className='totalPrice'>
                    <span>Total: { }</span>
                </div>
            </div>
            <input className='buttonCalculate' type="button" value={'Calcular'} />
        </form>
    </section>
}
export default calculePrices;