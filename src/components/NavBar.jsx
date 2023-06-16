import ShoppingCartIcon from './ShoppingCartIcon'
import '../css/NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();
  
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/store")}>Store</li>
        <li onClick={() => navigate("/cart")}>{props.numItemsInCart} <ShoppingCartIcon height="32px" width="32px"/></li>
      </ul>
    </nav>
  )
}

export default NavBar;