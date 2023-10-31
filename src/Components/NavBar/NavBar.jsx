import {React, useState} from "react"
import "./NavBar.css"

const Navbar = () => {
    const [active, setActive] = useState("navLinks")
    const navToggle = () => {
        active === 'navLinks' ? setActive("navActive navLinks") : setActive("navLinks")
    }
    return <header>
        <img className="logo" src="https://pngimg.com/uploads/bus/bus_PNG8610.png" alt="logo" />
        <nav>
            <ul className={active}>
                <li><a onClick={navToggle} className="iconsClose" href="#">⨉</a></li>
                <li><a href="#">Servicio</a></li>
                <li><a href="#">Quiénes somos</a></li>
            </ul> 
        </nav>
        <img className="buttonNavToggle" onClick={navToggle} src="https://icons.veryicon.com/png/o/miscellaneous/unicons/bars-1.png"/>
    </header>
}

export default Navbar;