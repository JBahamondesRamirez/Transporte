import { React } from "react"
import './Styles.css'
import facebook from "/src/Components/Icons/Facebook.svg"
import instagram from "/src/Components/Icons/instagram.svg"
import whatsapp from "/src/Components/Icons/whatsapp.svg"

const Contacto = () => {
  return <section className="sectionContacto">
    <form>
      <h2>Contacto</h2>
      <input type="text" placeholder="Nombre" name="nombre" required />
      <input type="email" name="Email" placeholder="Correo Electronico" required />
      <textarea name="Mensaje" required placeholder="Mensaje"></textarea>
      <button type="submit">Enviar</button>
    </form>
    <div className="rrss">
      <a href="https://www.facebook.com"><img src={facebook} /></a>
      <a href="#"><img src={instagram} /></a>
      <a href="#"><img src={whatsapp} /></a>
    </div>
  </section>
}

export default Contacto;