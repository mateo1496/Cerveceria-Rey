import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../FirebaseConfig";
// import { products } from "../mock/products";
import ItemList from "../components/ItemList";
import { FadeLoader } from 'react-spinners';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams(); //USEPARAMS ARROJA EL VALOR DEL PARAMETRO DINAMICO, EN ESTE CASO QUE VIENE DE ITEMLISTCONTAINER.
  const [spinners, setSpinners] = useState(true);

  useEffect(()=>{
      const itemCollection = collection(db, "productos") //COLLECTION UTILIZA DOS PARAMETROS EL PRIMERO ENVIA LA BASE DE DATOS Y EL SEGUNDO EL NOMBRE DE TU COLECCION DE PRODUCTOS.
      getDocs(!id ? itemCollection : query(itemCollection, where("category", "==", id))) //ES UNA PROMESA Y LE PASO COMO PARAMETRO LA REFERENCIA QUE TIENE LA BASE DE DATOS Y NUESTROS PRODUCTOS.
      .then((resp)=>{
        // console.log(resp.docs); PARA ACCEDER A LOS OBJETOS.
        // console.log(prod.data()); //ASI INGRESO A LA INFORMACION DE CADA PRODUCTO.
        const products = resp.docs.map((prod) =>{
          return{ //PARA ACCEDER A LA INFORMACION DE LOS OBJETOS ES CON .DATA
            id: prod.id, //AGREGAMOS AL ID COMO PROPIEDAD DEL ELEMENTO.
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
  }, [id]); //CON LA VARIABLE ID EN EL ARRAY DE DEPENDENCIA, CADA CATEGORIA MUESTRA SUS PRODUCTOS.

  // console.log(items)


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

// if(id){
//   const obtProducts = new Promise((res, rej)=>{
//     const prodFilter = products.filter((prod) => prod.category === id)
//     setTimeout(() =>{
//       res(prodFilter)
//     },2000);
//   });
  
//   obtProducts
//   .then((correct)=>{
//     setItems(correct)
//     setSpinners(false)
//   })
//   .catch((error)=>{
//     //setItems(error)
//   });
// } else {
//   const obtProducts = new Promise((res, rej)=>{
//     setTimeout(() =>{
//       res(products)
//     },2000);
//   });
  
//   obtProducts
//   .then((correct)=>{
//     setItems(correct);
//     setSpinners(false)
//   })
//   .catch((error)=>{
//     //setItems(error)
//   });

//   return () =>{
//     setSpinners(true);
//   }
// }