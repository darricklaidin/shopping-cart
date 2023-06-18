import NavBar from './components/NavBar'
import CartItem from './components/CartItem'
import Gap from './components/Gap';
import './css/Cart.css';

const Cart = (props) => {
  const { cartItems, deleteCartItem, updateCartItemQuantity} = props;
  
  return (
    <>
      <NavBar numItemsInCart={cartItems.size} currentPage={"cart"} />
      <Gap height="100px"/>
      
      {
        cartItems.size === 0 ? 
        <h3 className="cart-no-items-header">No items in the cart.</h3> : 
        <main className='cart-main'>
          
          <div className="cart-items-container">
            {Array.from(cartItems.values()).map((cartItem) => {
              return <CartItem key={cartItem.item.id} cartItem={cartItem} deleteCartItem={deleteCartItem} updateCartItemQuantity={updateCartItemQuantity} />
            })}
          </div>
          
          <div className="store-summary">
            <button className='store-pay-button'>Pay</button>
          </div>
          
        </main>
      }
      
      <Gap height="100px"/>
    </>
  )
}

export default Cart;