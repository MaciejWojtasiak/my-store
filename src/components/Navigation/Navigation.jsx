
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navigation">
        <ul>
            <li><Link to={'/'}>Homepage</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation;