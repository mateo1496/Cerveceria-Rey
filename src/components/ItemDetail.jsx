import React from 'react'
import { Link } from "react-router-dom"
import ItemCount from "../components/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function ItemDetail({item}) {
  const [cantidad, setCantidad] = useState(0);
  const onAdd = (q) => {
    setCantidad(q);
  } 

  return (
    <div style={{display: "flex"}} key={item.id}>
      <div className='allCard'>
        <h4 className='title text-center'>{item.title}</h4>
        <h5 className='price text-center'>$ {item.price}</h5>
        <h6 className='stock text-center'>stock: {item.stock}</h6>
        <h6 className='description text-center'>{item.description}</h6>
        <img src={item.img} className="img" alt="img"></img>
        <button className='button'>Ver Producto</button>
        {
          cantidad === 0
          ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          : <Link to="/Cart"><button className='button'>Click para continuar con la compra</button></Link>
        }  
      </div> 
  </div>
  );
}

export default ItemDetail