import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/App.css';
import Home from './Home'
import Store from './Store'
import Cart from './Cart'
import { useState } from 'react';

const App = () => {
  const items = [
    { id: 1, name: 'Shirt', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pants', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Shoes', price: 40, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Hat', price: 10, image: 'https://via.placeholder.com/150' },
  ]
  const [cartItems, setCartItems] = useState([]) // [ { item: itemObject, quantity: 1 }
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home cartItems={cartItems} /> } />
        <Route path="/store" element={ <Store cartItems={cartItems} /> } />
        <Route path="/cart" element={ <Cart cartItems={cartItems} /> } />
      </Routes>
    </Router>
  );
}

export default App;