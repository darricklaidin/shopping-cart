import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './css/App.css';
import Home from './Home'
import Store from './Store'
import Cart from './Cart'
import { useState } from 'react';
import { data } from './data';

const App = () => {
  const items = data;
  
  const [cartItems, setCartItems] = useState(new Map());
  
  const addToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    setCartItems((oldCartItems) => {
      const newCartItems = new Map(oldCartItems);
      newCartItems.set(item.id, {item: item, quantity: !newCartItems.has(item.id) ? 1 : newCartItems.get(item.id).quantity + 1});
      return newCartItems;
    });
  };
  
  const deleteCartItem = (item) => {
    setCartItems((oldCartItems) => {
      const newCartItems = new Map(oldCartItems);
      newCartItems.delete(item.id);
      return newCartItems;
    })
  };
  
  const updateCartItemQuantity = (item, newQuantity) => {
    if (newQuantity < 0) {
      newQuantity = 0;
    }
    
    setCartItems((oldCartItems) => {
      oldCartItems.set(item.id, {item: item, quantity: newQuantity});
      return new Map(oldCartItems);
    });
    console.log(`Updated ${item.name} quantity to ${newQuantity}`);
  };
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home cartItems={cartItems} /> } />
        <Route path="/store" element={ <Store cartItems={cartItems} items={items} addToCart={addToCart} /> } />
        <Route path="/cart" element={ <Cart cartItems={cartItems} deleteCartItem={deleteCartItem} updateCartItemQuantity={updateCartItemQuantity} /> } />
      </Routes>
    </Router>
  );
}

export default App;