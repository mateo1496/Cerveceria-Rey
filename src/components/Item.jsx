import React from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function Item({item}) {
  return(
    <div key={item.id}>
      <div className='allCard'>
        <h4 className='title text-center'>{item.title}</h4>
        <h5 className='price text-center'>$ {item.price}</h5>
        <h6 className='stock text-center'>stock: {item.stock}</h6>
        <h6 className='description text-center'>{item.description}</h6>
        <img src={item.img} className="img" alt="img"></img>
        <Link to={`/item/${item.id}`}><button className='button'>Ver Producto</button></Link>
      </div> 
    </div>
  );
}

export default Item
