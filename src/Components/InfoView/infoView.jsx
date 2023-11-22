import './Styles.css'
import {React} from "react"
import { Route, Routes } from "react-router-dom";
import Ayuda from './Ayuda';
import Acerca from './Acerca';
import Contacto from './Contacto';
import Noticias from './Noticias';

const infoView = () => {
    return <div className='ContainerInfoView'>
        <Routes>
            <Route path='/' element={<Noticias/>}/>
            <Route path='/Acerca' element={<Acerca/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Ayuda' element={<Ayuda/>}/>
        </Routes>
    </div>
}

export default infoView;