import React, { useState } from 'react';

const ItemCount = (props) => {
  const [count, setCount] = useState(1);
   
  const sumar = () =>{
    if(count < props.stock){
      setCount(count + 1)
    } else {
      alert("No puede seguir comprando este producto");
    }
  }

  const restar = () =>{
    if(count > props.initial){
      setCount(count - 1)
    } else {
      alert("No hay mas stock");
    }
  }

  const comprar = () =>{
      alert(props.onAdd);
  }


  return (
    <div className='botonAll'>
        <button className='botonInitial' onClick={sumar}>+</button>
        <button className='botonStock' onClick={restar}>-</button>
        <h4 className='count'>Count: {count}</h4>
        <button className='botonOnAdd' onClick={comprar}>Comprar Producto</button>
    </div>
  )
}

export default ItemCount