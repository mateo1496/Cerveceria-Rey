import React, { useState } from 'react';
import { useEffect } from 'react';

const ItemCount = ({stock, onAdd, initial = 1}) => {
  const [count, setCount] = useState(initial);

  useEffect(()=>{
    setCount(initial)
  },[initial])
   
  const sumar = () =>{
    if(count < stock){
      setCount(count + 1)
    } else {
      alert("No puede seguir comprando este producto");
    }
  }

  const restar = () =>{
    if(count > initial){
      setCount(count - 1)
    } else {
      alert("No hay mas stock");
    }
  }

  // const comprar = () =>{
  //     alert(onAdd);
  // }


  return (
    <div className='botonAll'>
        <button className='botonInitial' onClick={sumar}>+</button>
        <button className='botonStock' onClick={restar}>-</button>
        <h4 className='count'>Count: {count}</h4>
        <button className='botonOnAdd' onClick={() => onAdd(count)}>Comprar Producto</button>
    </div>
  )
}

export default ItemCount