import SearchIcon from './SearchIcon'

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <input className='search-field' type="text" name="search-field" placeholder="Search for an item" maxLength={90} onChange={props.updateSearch} />
      {/* <button className='search-button'><SearchIcon width="32px" height="32px" /></button> */}
    </div>
  )
}

export default SearchBar;