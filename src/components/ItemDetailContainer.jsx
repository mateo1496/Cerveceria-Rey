import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from "../FirebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";
// import  { products } from "../mock/products";
import ItemDetail from './ItemDetail';
import { FadeLoader } from 'react-spinners';

function ItemDetailContainer() {
  const [item, setItems] = useState({});
  const { id } = useParams();
  // const idProd = Number(id);
  const [spinner, setSpinner] = useState(true)

  useEffect(() =>{
    const unicColecction = collection(db, "productos"); //CREO LA COLECCION, DEFINO LA BASE DE DATOS Y QUE ELEMENTOS UTILIZO- PRIMER Y SEGUNDO PARAMETRO.
    const reference = doc(unicColecction, id); //CON DOC PRIMERO LLAMAMOS LA REFERENCIA Y PASAR A QUE DOCUMENTO ACCEDEMOS.
    getDoc(reference)
    .then((resp) =>{
      setItems({
        id: resp.id, //ITERO EL PRODUCTO Y LE AGREGO EL ID
        ...resp.data()
        
      })
      setSpinner(false);
    });
    return () =>{
       setSpinner(false);
    }
  },[id])

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

// if(idProd){
//   const obtProduct = new Promise ((res, rej)=>{
//     const unicProduct = products.find((product) => product.id === idProd)
//     setTimeout(() => {
//       res(unicProduct)
//     }, 2000);
//   })
  
//   obtProduct
//   .then((dato) =>{
//     setItems(dato); 
//     setSpinner(false)     
//   })
// } else{
//   const obtProduct = new Promise ((res, rej)=>{
//     const unicProduct = products.find((product) => product.id === 1)
//     setTimeout(() => {
//       res(unicProduct)
//     }, 2000);
//   })
  
//   obtProduct
//   .then((dato) =>{
//     setItems(dato); 
//     setSpinner(false)     
//   })
// }

// return () =>{
//   setSpinner(false);
// }