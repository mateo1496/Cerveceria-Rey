import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Item({item}) {
  return(
    <div className='allCard col-lg-4' key={item.id}>
      <div>
        <h4 className='title text-center'>{item.title}</h4>
        <h5 className='price text-center'>$ {item.price}</h5>
        <h6 className='stock text-center'>stock: {item.stock}</h6>
        <img src={item.img} className="img" alt="img"></img>
      </div> 
    </div>
  );
}

export default Item
