import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/App.css';
import Home from './Home'
import Store from './Store'
import Cart from './Cart'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/store" element={ <Store /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </Router>
  );
}

export default App;