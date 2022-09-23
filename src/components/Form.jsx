import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";


function Form({cart, totalPrice, clear, handleId}) {
    const [names, setNames] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSend = (e) =>{
        e.preventDefault();
        const order = {
            buyer: {Nombre: names, Telefono: phone, Email: email},
            items: cart,
            total: totalPrice(),
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, "ordenes");
        addDoc(orderCollection, order)
        .then((res) =>{
            handleId(res.id);
            clear();
            
        });
    };

    const handleName = (e) =>{
        setNames(e.target.value);
    }
    const handlePhone = (e) =>{
        setPhone(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
  return (
    <div>
        <form action='' className='form' onSubmit={handleSend}>
            <input type="text" placeholder='Nombre' name="nombre" value={names} className="nombre" onChange={handleName} />
            <input type="number" placeholder='Telefono' name="telefono" value={phone} className="phone" onChange={handlePhone} />
            <input type="email" placeholder='Email' name="email" value={email} className="email" onChange={handleEmail} />
            <button className='sendForm btn btn-outline-dark'>Enviar</button>
        </form>
    </div>
  )
}

export default Form

