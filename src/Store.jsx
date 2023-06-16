import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import ItemCard from './components/ItemCard'
import Gap from './components/Gap'
import './css/Store.css'
import { useState , useEffect } from 'react'

const Store = (props) => {
  const { cartItems, items } = props;
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredItems, setFilteredItems ] = useState(items);
  
  const updateSearch = (event) => {
    setSearchValue(event.target.value);
  }
  
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
      <NavBar numItemsInCart={cartItems.length} />
      <Gap height="100px" />
      <SearchBar updateSearch={updateSearch} />
      <Gap height="100px"/>
      <div className='store-items-container'>
        {filteredItems.map((item) => {
          return <ItemCard item={item} key={item.id}/>
        })}
      </div>
    </>
  )
}

export default Store;