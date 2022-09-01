import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetail({item}) {
  return (
    <div style={{display: "flex"}} key={item.id}>
      <div className='allCard'>
        <h4 className='title text-center'>{item.title}</h4>
        <h5 className='price text-center'>$ {item.price}</h5>
        <h6 className='stock text-center'>stock: {item.stock}</h6>
        <h6 className='description text-center'>{item.description}</h6>
        <img src={item.img} className="img" alt="img"></img>
        <button className='button'>Ver Producto</button>
      </div> 
  </div>
  );
}

export default ItemDetail