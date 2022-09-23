import './App.css';
import "./Estilos.css";
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext"
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
       <BrowserRouter>
          <NavBar /> 
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Cerveceria Rey"/>}/>
            <Route path="/category/:id" element={<ItemListContainer saludo="Bienvenidos a Cerveceria Rey"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        <Layout>
          <Footer />
        </Layout>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;

