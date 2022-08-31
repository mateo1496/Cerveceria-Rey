import React, { useEffect, useState } from 'react'
import  { products } from "../mock/products";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [item, setItems] = useState({});

  useEffect(() =>{
    const obtProduct = new Promise ((res, rej)=>{
      const unicProduct = products.find((product) => product.id === 1)
      setTimeout(() => {
        res(unicProduct)
      }, 2000);
    })

    obtProduct
    .then((dato) =>{
      setItems(dato);      
    })
  },[])

  console.log(item);


  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer