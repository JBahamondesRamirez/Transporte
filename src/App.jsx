import React from "react"
import './App.css'
import Mapa from './Components/Mapa/Map'
import SideBar from './Components/SideBar/SideBar'
import InfoView from './Components/InfoView/infoView'

function App() {
  return (
    <>
      <div className='container-header'>
        <SideBar />
        <Mapa />
        <InfoView />
      </div>
    </>
  )
}

export default App;
