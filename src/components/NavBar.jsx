import React from "react";
import { Link } from "react-router-dom";
import Logo from "../LogoProyecto.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
      <header>
        <nav className="nav">
           <Link to="/"><img class="logo logo-img" src={Logo} alt="Logo"></img></Link>
       
        
          <ul className="navLinks">
            <Link to="category/cerveza" className="link">Cervezas</Link>
            <Link to="category/espumante" className="link" >Espumantes</Link>
            <Link to="category/licor" className="link">Licores</Link>
            <Link to="category/sin alcohol" className="link">Sin Alcohol</Link>
            <Link to="category/vino" className="link">Vino</Link>
          </ul>
          <CartWidget />
        </nav>
        
      </header>
    );
}

export default NavBar;