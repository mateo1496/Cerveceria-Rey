import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState ([]);
    //FUNCIONES
    //FUNCION PARA AGREGAR UNA CANTIDAD DEL ITEM AL CARRITO
    const addItem = (item, q) =>{
        // console.log({...item, q}); //AGREGO AL ITEM LA PROPIEDAD CANTIDAD.
        if (isInCart(item.id)) { //CON LA FUNCION ACA, ACCEDO AL ITEM. (ACCEDO A LA PROPIEDAD ID DEL ITEM, SE LA ENVIO A LA FUNCION ISINCART)
            sumarCantidad(item, q);                                  //SI EL PRODUCTO ESTA LO AGREGO AL CARRITO.
        } else {
            setCart([...cart,{...item, q}]); //DE ESTA FORMA AL PRODUCTO QUE AGREGUE AL CARRITO, AGREGA UN NUEVO PRODUCTO QUE COMPRO. SINO SETEO EL CARRITO.
        }
    }

    const sumarCantidad = (item, q) =>{
        const newList = cart.map((prod) =>{
            if (prod.id === item.id) { //PREGUNTO QUE PRODUCTO TENGO QUE ACTUALIZAR. PREGUNTO SI EL PROD.ID ES IGUAL AL ID QUE ESTOY AGREGANDO.
                const prodNew = { //PARA AGREGAR EL PRODUCTO SI TODAVIA NO LO AGREGUE AL CARRITO (CART)
                    ...prod, //CON SPREAD HAGO LA ITERACION DEL PRODUCTO, AGREGO EL PRODUCTO Y SUS PROPIEDADES + CANTIDAD. SOLO ACTUALIZO LA CANTIDAD
                    q: prod.q + q
                }
                return prodNew //SI EL PRODUCTO YA ESTA, LO DEJO
            } else {
                return prod
            }
        })
        setCart(newList); //ACTUALIZAR EL ESTADO
    } 

    // FUNCION ISINCART PARA CORROBAR QUE EL PRODUCTO YA ESTA EN EL CARRITO
    const isInCart = (id) => { //ESTA FUNCION RECIBE AL ID POR ARGUMENTO Y LO UTILIZA PARA COMPARAR, RECCORE EL ARRAY Y PREGUNTA SI HAY UN ID, Y DEVUELVE TRUE O FALSE.
        return cart.some((prod) => prod.id === id); //SOME METODO QUE DEVUELVE TRUE O FALSE, SI EL PRODUCTO YA SE LO AGREGO AL CARRITO O NO.
    }

    // FUNCION PARA REMOVER UN ITEM DEL CART USANDO SU ID
    const removeItem = (id) =>{ //LA FUNCION DEL CONTEXTO ME LLEGA COMO ARGUMENTO QUE SERIA EL ID.
        console.log(`Eliminando prodcuto ${id}`);
        const deleteProd = cart.filter((prod) => prod.id !== id); //ELIMINAR UN PRODUCTO
        setCart(deleteProd);
    }

    // FUNCION PARA REMOVER TODOS LOS ITEMS
    const clear = () =>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
           {children}
        </CartContext.Provider>
    );
}

export default CartProvider;