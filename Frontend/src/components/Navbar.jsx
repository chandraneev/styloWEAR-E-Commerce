import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

function Navbar(){
    const navigate =useNavigate();
    let {isloggedin,carts} = useContext(Ecommercestore);
    const cartquantity=carts.length;

    return<>
    <div className="navcon1">
        <div className="navname">
        <h6 className="navbar-brand"><i>styloWEAR</i></h6>
        </div>
        <div className="navsearch">
          <Link to="/search" className="search"><input className="searchbox" type="search" placeholder="Click Here For Search"/></Link>
          <button className="button" type="submit"><FaSearchPlus className='icon'/>Search</button>
        </div>
        <div className="navitem">
          <Link className="nav-link" to="/about"><FaCircleInfo className='icon'/>About</Link>
          <Link className="nav-link" to="/contact"><FaPhoneAlt className='icon'/>Contact</Link>
          <Link className="nav-link" to="/e-commerce"><FaHome className='icon'/>Home</Link>
          {isloggedin ? (<><div className='count'><Link className="nav-link" to="/cart"><FaShoppingCart className='icon'/>Cart</Link><div className='countdiv'>{cartquantity}</div></div>
          <Link className="nav-link" to="/account"><MdAccountCircle className='icon'/>Account</Link></>) : 
          (<Link to="/registration">Register/Login</Link>)}
        </div>
    </div>
    <div className='navcon2'>
      <Link className="nav-link" to="/men">Men</Link>
      <Link className="nav-link" to="/women">Women</Link>
      <Link className="nav-link" to="/kids">Kids</Link>
      <Link className="nav-link" to="/ethnics">Ethnic</Link>
      <Link className="nav-link" to="/other-accessories">Other-Accessories</Link>
    </div>  
    </>
}

export default Navbar;

