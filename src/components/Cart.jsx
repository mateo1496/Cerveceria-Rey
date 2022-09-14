import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


const Cart = () => {
  const { cart, clear, removeItem, totalPrice,} = useContext(CartContext);

  if(cart.length === 0){
       return <h2 className='titleCart cobertor'>Usted no compro ningun producto, <Link className='linkCart' to="/"><b>Click Aquí</b></Link> para ir a la pagina principal y seleccionar uno</h2>;
  }

  // console.log(cart);
  return (
    <>
      <div>
        {cart.map((prod)=>(
          <div key={prod.id} className='cartCard' >
           <h4 className='title text-center'>{prod.title}</h4>
           <h5 className='price text-center'>$ <span class="badge bg-dark">{prod.price}</span></h5>
           <h6 className='description text-center'>{prod.description}</h6>
           <h5 className='text-center'> <span class="badge bg-dark">Cantidad por producto: {prod.q}</span></h5>
           <h5 className='text-center'> <span class="badge bg-dark">SubTotal: ${prod.price * prod.q}</span></h5>
           <img src={prod.img} className="img" alt="img"></img>
           <button className='button' onClick={() =>removeItem(prod.id)}>Eliminar Producto</button>
          </div> 
        ))}
      </div>
      <button onClick={clear} className="buttonDelete">Eliminar Productos</button>
      <h4 className='buttonTotal'>Total: ${totalPrice()}</h4>
    </>
  );
}

export default Cart;