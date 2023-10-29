import {React, useState} from "react"
import "./NavBar.css"

const Navbar = () => {
    const [active, setActive] = useState("navLinks")
    const navToggle = () => {
        active === 'navLinks' ? setActive("navActive navLinks") : setActive("navLinks")
    }
    return <header>
        <img className="logo" src="https://appassets.mvtdev.com/index/public-transit-resources/img/moovit_logo_full.svg" alt="logo" />
        <nav>
            <ul className={active}>
                <li><a href="#">Favoritos</a></li>
                <li><a href="#">Servicio</a></li>
                <li><a href="#">Quiénes somos</a></li>
            </ul> 
        </nav>
        <img className="buttonNavToggle" onClick={navToggle} src="./src/Components/Icons/bars.svg"/>
    </header>
}

export default Navbar;