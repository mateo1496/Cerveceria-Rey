import React from 'react'

function Item({item}) {
  return(
    <div key={item.id}>
      <div className='allCard'>
        <h4 className='title'>{item.title}</h4>
        <h5 className='price'>$ {item.price}</h5>
        <h6 className='stock'>stock: {item.stock}</h6>
        <img src={item.img}  className="img" alt="img"></img> 
      </div>
    </div>
  );
}

export default Item