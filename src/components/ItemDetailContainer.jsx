import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from "../FirebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";
import ItemDetail from './ItemDetail';
import { FadeLoader } from 'react-spinners';

function ItemDetailContainer() {
  const [item, setItems] = useState({});
  const { id } = useParams();
  const [spinner, setSpinner] = useState(true)

  useEffect(() =>{
    const unicColecction = collection(db, "productos"); 
    const reference = doc(unicColecction, id); 
    getDoc(reference)
    .then((resp) =>{
      setItems({
        id: resp.id, 
        ...resp.data()
        
      })
      setSpinner(false);
    });
    return () =>{
       setSpinner(false);
    }
  },[id])

  


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

