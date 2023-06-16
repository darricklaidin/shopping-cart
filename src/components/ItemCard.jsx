import '../css/ItemCard.css'
import Gap from './Gap'

const ItemCard = (props) => {
  return (
    <div className="item-card">
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