import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import { Ecommerceprovider } from './store/E-commerce-store';
import Registration from './pages/Registration';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Addproducts from './pages/Addproduct';
import Productdetails from './pages/Productdetails';
import Editproductdetails from './pages/Editproductdetails';
import Editform from './pages/Editform';
import Search from './pages/Search';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate to="/admin-home" replace/>
  },
  {
    path:"/admin-registration",
    element:<Registration/>,
  },
  {
    path:"/admin-login",
    element:<Login/>,
  },
  {
    path:"/admin-home",
    element:<App/>,
  },
  {
    path:"/admin-search",
    element:<Search/>,
  },
  {
    path:"/admin-about",
    element:<About/>,
  },
  {
    path:"/admin-contact",
    element:<Contact/>,
  },
  {
    path:"/admin-account",
    element:<Account/>,
  },
  {
    path:"/addproducts",
    element:<Addproducts/>,
  },
  {
    path:"/productdetails/:id",
    element:<Productdetails/>,
  },
  {
    path:"/edit-productdetails",
    element:<Editproductdetails/>,
  },
  {
    path:"/edit-admin-info",
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
