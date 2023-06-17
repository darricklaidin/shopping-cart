import ShoppingCartIcon from './ShoppingCartIcon'
import '../css/NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();
  
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")} className={props.currentPage === "home" ? "onPage" : ""}>Home</li>
        <li onClick={() => navigate("/store")} className={props.currentPage === "store" ? "onPage" : ""}>Store</li>
        <li onClick={() => navigate("/cart")} className={props.currentPage === "cart" ? "onPage" : ""}>{props.numItemsInCart} <ShoppingCartIcon height="32px" width="32px"/></li>
      </ul>
    </nav>
  )
}

export default NavBar;