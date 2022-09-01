import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../mock/products";
import ItemList from "../components/ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams(); //USEPARAMS ARROJA EL VALOR DEL PARAMETRO DINAMICO, EN ESTE CASO QUE VIENE DE ITEMLISTCONTAINER.

  useEffect(()=>{
    if(id){
      const obtProducts = new Promise((res, rej)=>{
        const prodFilter = products.filter((prod) => prod.category === id)
        setTimeout(() =>{
          res(prodFilter)
        },2000);
      });
      
      obtProducts
      .then((correct)=>{
        setItems(correct);
      })
      .catch((error)=>{
        //setItems(error)
      });
    } else {
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
    }
  }, [id]); //CON LA VARIABLE ID EN EL ARRAY DE DEPENDENCIA, CADA CATEGORIA MUESTRA SUS PRODUCTOS.

  // console.log(items)


  return (
    <div>
        <h1>{props.saludo}</h1>
        <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer;

