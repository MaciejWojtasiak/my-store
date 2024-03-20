
import { Link } from "react-router-dom";
import Logo from '../../public/logo.svg';
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";
function Header() {
  const username = useSelector(state => state.user.username);
  return (
    <header className="bg-neutral-500 text-stone-200 flex items-center justify-between p-4">
      <Link to={'/'}><img src={Logo} className="object-cover min-w-32 max-h-6"/></Link>     
      <SearchOrder />
      <ul className="gap-2 hidden md:flex">
          <li><Link to={'/'}>Homepage</Link></li>
          <li><Link to={'/store'}>Store</Link></li>
          <li><Link to={'/order/new'}>New order</Link></li>
          <li><Link to={'/user/create'}>Create Account</Link></li>
          {username && <p>{username}</p>}
      </ul>
    </header>
  )
}

export default Header;