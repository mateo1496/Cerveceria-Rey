import React from 'react'
import Logo from "../LogoProyecto.png"

function Footer() {
  return (
    <footer>
        <nav className='navFooter'>
            <a href="../index.js" className='logoFooter'>
                <img className='imgFooter' src={Logo} alt="Logo" />
            </a>

            <ul className='opcionesFooter'>
               <a href="https://www.facebook.com" target="_blank"><li className='redes'>Facebook</li></a>
               <a href="https://www.instagram.com" target="_blank"><li className='redes'>Instagram</li></a>
               <a href="https://www.twitter.com" target="_blank"><li className='redes'>Twitter</li></a>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer