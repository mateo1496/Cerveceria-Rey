import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import  { products } from "../mock/products";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [item, setItems] = useState({});
  const { id } = useParams();
  const idProd = Number(id);

  useEffect(() =>{
    if(idProd){
      const obtProduct = new Promise ((res, rej)=>{
        const unicProduct = products.find((product) => product.id === idProd)
        setTimeout(() => {
          res(unicProduct)
        }, 2000);
      })
      
      obtProduct
      .then((dato) =>{
        setItems(dato);      
      })
    } else{
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
    }
  },[idProd])

  console.log(item);


  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer

