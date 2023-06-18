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
  const [ notifications, setNotifications]  = useState([]);
  
  const updateSearch = (event) => {
    setSearchValue(event.target.value);
  }
  
  const removeNotification = (notificationToRemove) => {
    setNotifications((oldNotifications) => {
      notificationToRemove.enabled = false;
      return [...oldNotifications];
    });
    
    setTimeout(() => {
      setNotifications((oldNotifications) => {
        return oldNotifications.filter((notification) => notification.id !== notificationToRemove.id)
      });
    }, 300);
  }
  
  const sendNotification = (item) => {
    const newNotification = {id: Date.now(), itemName: item.name, enabled: false};
    
    setNotifications((oldNotifications) => {
      return [...oldNotifications, newNotification];
    })
    
    setTimeout(() => {
      setNotifications((oldNotifications) => {
        const newNotifications = [...oldNotifications];
        const lastNotificationIndex = newNotifications.length - 1;
        if (lastNotificationIndex >= 0) {
          newNotifications[lastNotificationIndex].enabled = true;
        }
        return newNotifications;
      })
    }, 100);
    
    setTimeout(() => {
      removeNotification(newNotification);
    }, 3000);
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
      <NavBar numItemsInCart={cartItems.size} currentPage="store" />
      <Gap height="100px" />
      <SearchBar updateSearch={updateSearch} />
      <Gap height="100px"/>
      <div className='store-items-container'>
        {filteredItems.map((item) => {
          return <ItemCard item={item} key={item.id} addToCart={addToCart} sendNotification={sendNotification} />
        })}
      </div>
      <Gap height="100px"/>
      
      {notifications.map((notification) => {
        return <div key={notification.id} className={`store-notification-modal ${notification.enabled ? "enabled" : ""}`}>
          {notification.itemName} added to cart.
        </div>
      })}
      
    </>
  )
}

export default Store;