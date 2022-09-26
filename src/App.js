import './App.css';
import React from 'react';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { ItemCollection } from './components/ItemCollection/ItemCollection';
import { CartContainer } from './components/CartContainer/CartContainer';
import {CartProvider} from "./context/CartContext";
import { Nosotros } from './components/Nosotros/Nosotros';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
              <Navbar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/contacto" element={<ItemCollection/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
                <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartContainer/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
