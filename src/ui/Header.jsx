
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
        <ul>
            <li><Link to={'/'}>Homepage</Link></li>
            {/* <li><Link to={'/login'}>Login</Link></li> */}
            <li><Link to={'/store'}>Store</Link></li>
            <li><Link to={'/cart'}>Cart</Link></li>
            <li><Link to={'/order/new'}>New order</Link></li>
        </ul>
    </header>
  )
}

export default Header;