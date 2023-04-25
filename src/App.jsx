import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Components/Cart/Cart";
import Checkout from './Components/Checkout/Checkout';

const App =() => {
  
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 