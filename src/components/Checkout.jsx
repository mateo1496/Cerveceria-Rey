import React from 'react'
import Form from './Form'
import { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';


function Checkout() {
    const [compra, setCompra] = useState("");
    const {cart, clear, totalPrice} = useContext(CartContext)
  
    const handleId = (id) =>{
        setCompra(id);
      }

      if(compra){
        return <h1 className='cartCompra cobertor'>Felicitaciones por su compra. Tu número de pedido es: <h4>{compra}</h4></h1>
      }
  
    return (
    <div>
       <Form cart={cart} totalPrice={totalPrice} clear={clear} handleId={handleId} />
    </div>
  )
}

export default Checkout