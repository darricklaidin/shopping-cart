import NavBar from './NavBar'
import ShoppingCartIcon from './ShoppingCartIcon';
import { Link } from 'react-router-dom';
import Gap from './Gap';
import './css/Home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <Gap height="100px"/>
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