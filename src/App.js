import './App.css';
import "./Estilos.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
     <NavBar /> 
     <ItemListContainer saludo="Bienvenidos a Cerveceria Rey" />
    </div>
  );
}

export default App;
