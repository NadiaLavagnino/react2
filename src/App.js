import './App.css';
import NavBar from './Components/Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidosgit status"}/>
    </div>
  );
}

export default App;
