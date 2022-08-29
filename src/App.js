import './App.css';
import "./Estilos.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';
import EjercicioApi from './components/EjercicioApi';

function App() {
 
  return (
    <div>
     <NavBar /> 
     <ItemListContainer saludo="Bienvenidos a Cerveceria Rey"/>
     <ItemCount stock={10} initial={1} onAdd="Felicitaciones por su compra" />
     {/* <EjercicioApi /> */}
     <Layout>
      <Footer />
     </Layout>
    </div>
  );
}

export default App;
