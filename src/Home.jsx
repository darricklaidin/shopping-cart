import NavBar from './components/NavBar'
import ShoppingCartIcon from './components/ShoppingCartIcon';
import { Link } from 'react-router-dom';
import Gap from './components/Gap';
import './css/Home.css';

const Home = (props) => {
  return (
    <>
      <NavBar numItemsInCart={props.cartItems.size} currentPage={"home"} />
      <Gap height="200px"/>
      <h1 className='home-heading'>Shopping Cart</h1>
      <Gap height="200px"/>
      <div className="home-button-div">
        <Link className="button-link" to="/store">Start browsing</Link>
        <Link className="button-link" to="/cart"><ShoppingCartIcon height="32px" width="32px"/></Link>
      </div>
    </>
  )
}

export default Home;