import { Outlet, useNavigation } from "react-router-dom";
import Header from '../ui/Header';
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-1">   
     {isLoading && <Loader />}  
        <Header />       
        <div className="overflow-y-scroll">
          <main className="mx-auto max-w-5xl">
            <Outlet />
          </main>
        </div>
        <CartOverview />
    </div>
  )
}

export default Layout