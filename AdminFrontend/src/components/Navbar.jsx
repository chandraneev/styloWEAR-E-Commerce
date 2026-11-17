import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";

function Navbar(){
    const navigate =useNavigate();
    let {isloggedin} = useContext(Ecommercestore);

    return<>
    <div className="navcon1">
        <div className="navname">
        <h6 className="navbar-brand"><i>styloWEAR</i></h6>
        </div>
        <div className="navsearch1">
          <button className="searchbutton" onClick={()=>navigate("/admin-search")}><FaSearchPlus className='icon'/>Search</button>
        </div>
        <div className="navitem">
          <Link className="nav-link" to="/admin-about"><FaCircleInfo className='icon'/>About</Link>
          <Link className="nav-link" to="/admin-contact"><FaPhoneAlt className='icon'/>Contact</Link>
          <Link className="nav-link" to="/admin-home"><FaHome className='icon'/>Home</Link>
          {isloggedin ? (<><Link className="nav-link" to="/addproducts"><IoMdAddCircle className='icon'/>Add Product</Link>
          <Link className="nav-link" to="/admin-account"><MdAccountCircle className='icon'/>Account</Link></>) : 
          (<Link to="/admin-registration">Register/Login</Link>)}
        </div>
    </div>
    </>
}

export default Navbar;
