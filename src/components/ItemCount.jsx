import React, { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(1);

  let max = 10;

  const initial = () =>{
    count < max
    ? setCount(count + 1)
    : alert("Usted no pued seguir comprando este producto");
  }

  const stock = () =>{
    count >= 2
    ? setCount(count - 1)
    : alert("No hay mas stock");
  }

  const onAdd = () =>{
      alert("Felicitaciones por su compra");
  }


  return (
    <div className='botonAll'>
        <button className='botonInitial' onClick={initial}>+</button>
        <button className='botonStock' onClick={stock}>-</button>
        <h4 className='count'>Count: {count}</h4>
        <button className='botonOnAdd' onClick={onAdd}>Comprar Producto</button>
    </div>
  )
}

export default ItemCount