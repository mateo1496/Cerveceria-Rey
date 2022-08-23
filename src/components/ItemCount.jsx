import React, { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(1);

  let max = 10;

  const initial = () =>{
    if(count < max){
        setCount(count + 1);
    } else {
        alert("Usted no puedo seguir comprando este producto");
    }
  }

  const stock = () =>{
     if(count >= 2){
        setCount(count - 1);
     } else{
        alert("Ya llego al minimo de productos");
     }
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