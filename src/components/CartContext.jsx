import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState ([]);
   
    const addItem = (item, q) =>{
        if (isInCart(item.id)) { 
            sumarCantidad(item, q);                                  
        } else {
            setCart([...cart,{...item, q}]); 
        }
    }

    const sumarCantidad = (item, q) =>{
        const newList = cart.map((prod) =>{
            if (prod.id === item.id) { 
                const prodNew = { 
                    ...prod, 
                    q:  q 
                }
                return prodNew 
            } else {
                return prod
            }
        })
        setCart(newList); 
    } 

    const isInCart = (id) => { 
        return cart.some((prod) => prod.id === id); 
    }

    const removeItem = (id) =>{ 
        console.log(`Eliminando prodcuto ${id}`);
        const deleteProd = cart.filter((prod) => prod.id !== id); 
        setCart(deleteProd);
    }

    const clear = () =>{
        setCart([]);
    }

    const prodCant = (id) =>{
        const cantidad = cart.find((prod)=> prod.id === id);
        return cantidad?.q 
    }

    const totalPrice = () =>{
        let totalProd = 0
        cart.forEach((prod) =>{
            totalProd = totalProd + (prod.price * prod.q);
        });
        return totalProd;
    }

    const totalCant = () =>{
        let totalCantProd = 0
        cart.forEach((prod)=>{
            totalCantProd += prod.q
        });
        return totalCantProd;
    }

    

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, prodCant, totalPrice, totalCant }}>
           {children}
        </CartContext.Provider>
    );
}

export default CartProvider;