
import { Link } from "react-router-dom";
import Logo from '../../public/logo.svg';
import SearchOrder from "../features/order/SearchOrder";
function Header() {
  return (
    <header className="bg-neutral-500 text-stone-200 flex items-center justify-between p-4">
      <Link to={'/'}><img src={Logo} width={100} height={25}/></Link>     
      <SearchOrder />
      <ul className="gap-2 hidden md:flex">
          <li><Link to={'/'}>Homepage</Link></li>
          <li><Link to={'/store'}>Store</Link></li>
          <li><Link to={'/order/new'}>New order</Link></li>
      </ul>
    </header>
  )
}

export default Header;