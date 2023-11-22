import { React , useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faPeopleGroup, faAddressBook, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "./SideBar.css"

const Navbar = () => {
    const [active, setActive] = useState("")
    const navToggle = () => {
        active === '' ? setActive("navActive") : setActive("")
    }
    const style = {
        margin: {
            marginRight: '10px'
        }  
    }
    return <header className="headerSideBar">
        <section className="logoBox">
            <h2>DRIVEJET</h2>
            <button className="openNav" onClick={navToggle}>☰</button>
        </section>
        <nav className="navSideBar">
            <ul className={active}>
                <button onClick={navToggle} className="iconsClose">⨉</button>
                <li><Link to='/'><FontAwesomeIcon style={style.margin} icon={faNewspaper} />Noticias o Anuncios</Link></li>
                <li><Link to='/Acerca'><FontAwesomeIcon style={style.margin} icon={faPeopleGroup} />Acerca de Nosotros</Link></li>
                <li><Link to='/Contacto'><FontAwesomeIcon style={style.margin} icon={faAddressBook} />Contacto</Link></li>
                <li><Link to='/Ayuda'><FontAwesomeIcon style={style.margin} icon={faCircleQuestion} />Ayuda</Link></li>
            </ul>
        </nav>
    </header>
}
export default Navbar;