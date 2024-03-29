
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Homepage from './ui/Homepage';
import Cart, {loader as cartLoader} from './features/cart/Cart';
import './App.css';
import Layout from './ui/Layout';
import CreateOrder, {action as createOrderAction}from './features/order/CreateOrder';
import Order from './features/order/Order';
import Error from './ui/Error';
import CreateUser from './features/user/CreateUser';
import Store, {loader as storeLoader} from './features/store/Store';
import OrderSuccess from './features/order/OrderSuccess';


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element: <Homepage />
      },
      {
        path:'/store',
        element: <Store />,
        loader:storeLoader,
      },
      {
        path:'/cart',
        element: <Cart />,
        loader: cartLoader,
      },
      {
        path:'/order/new',
        element: <CreateOrder />,
        action:createOrderAction
      },
      {
        path:'/order/success',
        element: <OrderSuccess />
      },
      {
        path:'/order/:orderId',
        element:<Order />
      },
      {
        path:'/user/create',
        element:<CreateUser />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
