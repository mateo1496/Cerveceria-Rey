import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import "bootstrap/dist/css/bootstrap.min.css";


const Cart = () => {
  const { cart, clear, removeItem} = useContext(CartContext);

  console.log(cart);
  return (
    <>
      <div>
        {cart.map((prod)=>(
          <div key={prod.id} className='cartCard' >
           <h4 className='title text-center'>{prod.title}</h4>
           <h5 className='price text-center'>$ <span class="badge bg-dark">{prod.price}</span></h5>
           <h6 className='description text-center'>{prod.description}</h6>
           <img src={prod.img} className="img" alt="img"></img>
           <button className='button' onClick={() =>removeItem(prod.id)}>Eliminar Producto</button>
          </div> 
        ))}
      </div>
      <button onClick={clear} className="buttonDelete">Eliminar Productos</button>
    </>
  );
}

export default Cart;