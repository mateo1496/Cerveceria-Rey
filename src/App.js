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

function App() {
 
  return (
    <BrowserRouter>
     <NavBar /> 
     <Routes>
      <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Cerveceria Rey"/>}/>
      <Route path="/category/:id" element={<ItemListContainer saludo="Bienvenidos a Cerveceria Rey"/>} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path="/Cart" element={<Cart />} />
     </Routes>
     <Layout>
      <Footer />
     </Layout>
    </BrowserRouter>
  );
}

export default App;

// import EjercicioApi from './components/EjercicioApi';
//  <EjercicioApi /> 