import { React } from "react"
import "./contentLogo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHurricane } from '@fortawesome/free-solid-svg-icons'

const ContentLogo = () => {
    return <header className="header">
        <div className="contentLogo">
            <FontAwesomeIcon className="logoPage" icon={faHurricane}/>
            <h1 className="logoTittle">Drivejet</h1>
        </div>
    </header>
}
export default ContentLogo;