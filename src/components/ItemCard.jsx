import '../css/ItemCard.css'
import Gap from './Gap'
import { useState } from 'react'

const ItemCard = (props) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isPressed, setIsPressed ] = useState(false);
  
  const handleClick = () => {
    props.addToCart(props.item);
    props.sendNotification(props.item);
  };
  
  return (
    <div className={`item-card`} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
      
      <div className={`add-to-cart-overlay ${isHovered ? "hovered" : ""}`}>
        <button onClick={handleClick} onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} onMouseOut={() => setIsPressed(false)} className={isPressed ? "pressed" : ""}>+</button>
      </div>
      
      <div className="item-card-content">
        <img src={props.item.image} alt="item" />
        <Gap height="50px" />
        <div>{props.item.name}</div>
        <div>${props.item.price}</div>
      </div>
      
    </div>
  )
}

export default ItemCard