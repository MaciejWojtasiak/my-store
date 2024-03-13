
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import './App.css';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage />
  },
  // {
  //   path:'/',
  //   element: <Homepage />
  // },
])

function App() {
  return (
    <RouterProvider router={router}/>
    // <Router>
    //   <Routes>
    //       <Route path='/' element={<Layout/>}>
    //         <Route index element={<Homepage />}/>
    //         <Route path='login' element={<Login />}/>
    //       </Route>
    //     </Routes>
    // </Router>
  )
}

export default App
