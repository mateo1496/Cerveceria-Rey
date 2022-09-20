import { Link } from "react-router-dom"
import ItemCount from "../components/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

function ItemDetail({item}) {
  const [cantidad, setCantidad] = useState(0);
  const { addItem, prodCant } = useContext(CartContext);

  const onAdd = (q) => {
    setCantidad(q);
    addItem(item, q); //ACA PASO EL PRODUCTO Y Q ES LA CANTIDAD, DECIDO QUE QUIERO MOSTRAR.
  } 

  const unicProd = prodCant(item.id); //DEFINIMOS LA CANTIDAD DE CANTIDADES QUE VA A TENER UN PRODUCTO.

  // console.log(cart); //ME IMPRIME EL ESTADO

  return (
    <div style={{display: "flex"}} key={item.id}>
      <div className='allCard'>
        <h4 className='title text-center'>{item.title}</h4>
        <h5 className='price text-center'>$ <span class="badge bg-dark">{item.price}</span></h5>
        <h6 className='stock text-center'>Stock: <span class="badge bg-dark">{item.stock}</span></h6>
        <h6 className='description text-center'>{item.description}</h6>
        <img src={item.img} className="img" alt="img"></img>
        <button className='button'>Ver Producto</button>
        {
          cantidad === 0
          ? <ItemCount stock={item.stock} initial={unicProd} onAdd={onAdd} />
          : <Link to="/Cart"><button className='button'>Click para continuar con la compra</button></Link>
        }  
      </div> 
  </div>
  );
}

export default ItemDetail