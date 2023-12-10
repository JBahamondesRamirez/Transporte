import React from "react"
import './App.css'
import Mapa from './Components/Mapa/Map'
import CalculePrices from './Components/calculePrices/calculePrices'

function App() {
  return (
    <>
      <div className="firstPage">
        <Mapa />
        <CalculePrices />
      </div>
    </>
  )
}

export default App;
