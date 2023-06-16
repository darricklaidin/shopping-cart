import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import ItemCard from './components/ItemCard'
import Gap from './components/Gap'
import './css/Store.css'
import { useState , useEffect } from 'react'

const Store = (props) => {
  const { cartItems, items, addToCart } = props;
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredItems, setFilteredItems ] = useState(items);
  const [ notificationEnabled, setNotificationEnabled ] = useState(false);
  const [ timeoutID, setTimeoutID ] = useState(null);
  const [ notificationItemName, setNotificationItemName ] = useState('');
  
  const updateSearch = (event) => {
    setSearchValue(event.target.value);
  }
  
  const sendNotification = (item) => {
    clearTimeout(timeoutID);
    
    setNotificationItemName(item.name);
    setNotificationEnabled(true);
    
    const newTimeoutID = setTimeout(() => {
      setNotificationEnabled(false);
    }, 3000);
    
    setTimeoutID(newTimeoutID);
  };
  
  useEffect(() => {
    if (searchValue === '') {
      setFilteredItems(items);
    }
    else {
      setFilteredItems(items.filter((item) => {
        return item.name.toLowerCase().startsWith(searchValue.toLowerCase());
      }));
    }
  }, [items, searchValue]);  
  
  return (
    <>
      <NavBar numItemsInCart={cartItems.size} />
      <Gap height="100px" />
      <SearchBar updateSearch={updateSearch} />
      <Gap height="100px"/>
      <div className='store-items-container'>
        {filteredItems.map((item) => {
          return <ItemCard item={item} key={item.id} addToCart={addToCart} sendNotification={sendNotification} />
        })}
      </div>
      <Gap height="100px"/>
      
      {/* Notification Modal */}
      <div className={`store-notification-modal ${notificationEnabled ? "enabled" : ""}`}>
        {notificationItemName} added to cart.
      </div>
      
    </>
  )
}

export default Store;