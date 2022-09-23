import React from 'react'
import Logo from "../LogoProyecto.png"

function Footer() {
  return (
    <footer>
        <nav className='navFooter'>
            <a href="../index.js" className='logoFooter'>
                <img className='imgFooter' src={Logo} alt="Logo" />
            </a>

            <div className='opcionesFooter'>
               <a href="https://www.facebook.com" className='redes' target="_blank">Facebook</a>
               <a href="https://www.instagram.com" className='redes' target="_blank">Instagram</a>
               <a href="https://www.twitter.com" className='redes' target="_blank">Twitter</a>
            </div>
        </nav>
    </footer>
  )
}

export default Footer