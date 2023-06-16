import ShoppingCartIcon from './ShoppingCartIcon'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Store</li>
        <li>0* <ShoppingCartIcon height="32px" width="32px"/></li>
        {/* TODO: update the 0 to use a state variable */}
      </ul>
    </nav>
  )
}

export default NavBar;