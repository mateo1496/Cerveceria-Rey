import './App.css';
import "./Estilos.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
     <NavBar /> 
     <ItemListContainer saludo="Bienvenidos a Cerveceria Rey" />
     <ItemCount />
     <Layout>
      <Footer />
     </Layout>
    </div>
  );
}

export default App;
