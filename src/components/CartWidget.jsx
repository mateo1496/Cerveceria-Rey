import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


const CartWidget = () => {
    const { totalCant } = useContext(CartContext)
    return(
        <div>
           <FaShoppingCart className="carrito"/>
           <Link to="/Cart"><span className="badge bg-secondary m-lg-3 mb-9 carro">{totalCant()}</span></Link>
        </div>
    );
}

export default CartWidget;