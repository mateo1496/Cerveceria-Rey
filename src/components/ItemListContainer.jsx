import React, { useEffect, useState } from 'react';
import { products } from "../mock/products";
import ItemList from "../components/ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const obtProducts = new Promise((res, rej)=>{
      setTimeout(() =>{
        res(products)
      },2000);
    });

    obtProducts
    .then((correct)=>{
      setItems(correct);
    })
    .catch((error)=>{
      //setItems(error)
    });
  }, []);

  console.log(items)


  return (
    <div>
        <h1>{props.saludo}</h1>
        <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer;