import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../FirebaseConfig";
import ItemList from "../components/ItemList";
import { FadeLoader } from 'react-spinners';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams(); 
  const [spinners, setSpinners] = useState(true);

  useEffect(()=>{
      const itemCollection = collection(db, "productos") 
      getDocs(!id ? itemCollection : query(itemCollection, where("category", "==", id))) 
      .then((resp)=>{
        
        const products = resp.docs.map((prod) =>{
          return{ 
            id: prod.id, 
            ...prod.data()
          }
        });
        setItems(products);
        setSpinners(false);
      })
      .catch((error) =>{
        console.log(error);
      });
      return () =>{
            setSpinners(true);
      }
  }, [id]); 



  return (
    <div>
      {
        spinners
        ? <FadeLoader  color="rgba(240, 113, 9, 0.9)" margin="10px"   size={150} /> 
        : <>
           <h1 className='titleTop'>{props.saludo}</h1>
           <ItemList items={items} />
          </>
      }
    </div>
  )
}

export default ItemListContainer;

