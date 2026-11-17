import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import { Ecommerceprovider } from './store/E-commerce-store';
import Registration from './pages/Registration';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';
//import Wishlist from './Components/Wishlist';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Ethnics from './pages/Ethnics';
import OtherAccessories from './pages/Other-Accessories';
import Search from './pages/Search';
import Productdetails from './pages/Productdetails';
import Payment from './pages/Payment';
import Editform from './pages/Editform';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate to="/e-commerce" replace/>
  },
  {
    path:"/registration",
    element:<Registration/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/e-commerce",
    element:<App/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/account",
    element:<Account/>,
  },
  {
    path:"/cart",
    element:<Cart/>,
  },
  {
    path:"/men",
    element:<Men/>,
  },
  {
    path:"/women",
    element:<Women/>,
  },
  {
    path:"/kids",
    element:<Kids/>,
  },
  {
    path:"/ethnics",
    element:<Ethnics/>,
  },
  {
    path:"/other-accessories",
    element:<OtherAccessories/>,
  },
  {
    path:"/search",
    element:<Search/>,
  },
  {
    path:"/productdetails/:id",
    element:<Productdetails/>,
  },
  {
    path:"/payment",
    element:<Payment/>,
  },
  {
    path:"/edit-user-info",
    element:<Editform/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ecommerceprovider>
    <RouterProvider router={router}/>
    </Ecommerceprovider>
  </StrictMode>,
)