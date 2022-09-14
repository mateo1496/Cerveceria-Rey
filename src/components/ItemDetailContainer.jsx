import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import  { products } from "../mock/products";
import ItemDetail from './ItemDetail';
import { FadeLoader } from 'react-spinners';

function ItemDetailContainer() {
  const [item, setItems] = useState({});
  const { id } = useParams();
  const idProd = Number(id);
  const [spinner, setSpinner] = useState(true)

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
        setSpinner(false)     
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
        setSpinner(false)     
      })
    }

    return () =>{
      setSpinner(false);
    }
  },[idProd])

  // console.log(item);


  return (
    <div>
      {
        spinner 
        ? <FadeLoader color="rgba(240, 113, 9, 0.9)" margin="10px"  size={150} /> 
        : <ItemDetail item={item}/>
      }
    </div>
  )
}

export default ItemDetailContainer

