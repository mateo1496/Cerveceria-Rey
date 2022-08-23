import React from "react";
import Logo from "../LogoProyecto.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
      <header>
        <nav className="nav">
          <a href="../index.js" className="logo">
            <img class="logo-img" src={Logo} alt="Logo"></img>
          </a>
        
          <ul className="navLinks">
            <li className="link"><a href="#"></a>Cervezas</li>
            <li className="link" ><a href="#"></a>Espumantes</li>
            <li className="link"><a href="#"></a>Licores</li>
            <li className="link"><a href="#"></a>Sin Alcohol</li>
            <li className="link"><a href="#"></a>Vino</li>
          </ul>
          <CartWidget />
        </nav>
        
      </header>
    );
}

export default NavBar;