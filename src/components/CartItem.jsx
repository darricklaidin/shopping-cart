import '../css/CartItem.css'
import TrashIcon from './icons/TrashIcon.jsx';


const CartItem = (props) => {
  const { item, quantity } = props.cartItem;
  
  return (
    <div className="cart-item">
      <img src={`${item.image}`} alt={`An image of ${item.name}`} />
      <div className="cart-item-content">
        <h3>{item.name}</h3>
        
        <div className="item-manipulator">
          <div className="quantity-selector">
            <button className="minus-button" onClick={() => {
              props.updateCartItemQuantity(item, Number(quantity) - Number(1));
              }
            }>-</button>
            <input type="number" name={`${item.name}-quantity-field`} value={quantity} min={0} onChange={
              (event) => {
                props.updateCartItemQuantity(item, event.target.value);
              }
            }/>
            <button className="plus-button" onClick={() => {
              props.updateCartItemQuantity(item, Number(quantity) + Number(1))
              }}>+</button>
          </div>
          
          <button className="remove-button" onClick={() => {props.deleteCartItem(item)}}>
            <TrashIcon width="16px" height="16px" />
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem