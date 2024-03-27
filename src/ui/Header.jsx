
import { Link } from "react-router-dom";
import Logo from '../../public/logo.svg';
import { useSelector } from "react-redux";
function Header() {

  const username = useSelector(state => state.user.username);
  return (
    <header className="bg-neutral-500 text-stone-200 flex items-center justify-between p-4">
      <Link to={'/'}><img src={Logo} className="object-cover min-w-32 max-h-6"/></Link>     
      <ul className="gap-2 hidden md:flex" id="navbar-default">
          <li><Link to={'/'}>Homepage</Link></li>
          <li><Link to={'/store'}>Store</Link></li>
          {username && <p>{username}</p>}
      </ul>      
    </header>
   
  )
}

export default Header;