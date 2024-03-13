import { Outlet } from "react-router-dom";
import Header from '../ui/Header';
import CartOverview from "../features/cart/CartOverview";

function Layout() {
  return (
    <div className="app-layout">
        <Header />
        <main>
          <Outlet />
        </main>
        <CartOverview />
    </div>
  )
}

export default Layout