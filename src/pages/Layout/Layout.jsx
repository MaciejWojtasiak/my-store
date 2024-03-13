import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function Layout({children}) {
  return (
    <div className="app-layout">
        <Navigation />
        <Outlet />
    </div>
  )
}

export default Layout