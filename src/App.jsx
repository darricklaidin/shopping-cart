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
  
  const [cartItems, setCartItems] = useState(new Map());
  
  const addToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    setCartItems((oldCartItems) => {
      const newCartItems = new Map(oldCartItems);
      newCartItems.set(item.id, {item: item, quantity: !newCartItems.has(item.id) ? 1 : newCartItems.get(item.id).quantity + 1});
      return newCartItems;
    });
  };
  
  console.log(cartItems);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home cartItems={cartItems} /> } />
        <Route path="/store" element={ <Store cartItems={cartItems} items={items} addToCart={addToCart} /> } />
        <Route path="/cart" element={ <Cart cartItems={cartItems} /> } />
      </Routes>
    </Router>
  );
}

export default App;