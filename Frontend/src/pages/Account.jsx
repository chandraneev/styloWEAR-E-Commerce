import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import Navbar from "../components/Navbar.jsx";
import Wishlist from '../components/Favourites.jsx';
import Information from '../components/Information.jsx';
import Orders from '../components/Orders.jsx';
import { FaCircleInfo } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { MdFavorite } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";

function Account(){
  const[showcomponent, setshowcomponent]=useState("info")
    const navigate =useNavigate();
    let {userdata,handlelogout} = useContext(Ecommercestore);

    async function Logoutbtn(){
    const result = await handlelogout();
    if(result.success){
      alert(result.message);
      navigate("/login");
    }
  };

    return<>
    <Navbar/>
    <div className='outerdiv'>
      <div className='innerdiv' id="innerdivleft">
        <div className='innerdiv1'id="upperdiv">
          <MdAccountCircle className='profilepic'/>
          <h3 className='welmsg'>Hello,</h3>
          <h1 className='welmsg'>{userdata?.firstname}</h1>
        </div>
        <div className='innerdiv1'>
          <ul className="list-group">
            <li className="list-group-item" id="lowerdiv1" onClick={()=>setshowcomponent("info")}><FaCircleInfo className='icon'/>My Information</li>
            <li className="list-group-item" id="lowerdiv2" onClick={()=>setshowcomponent("orders")}><IoBagHandle className='icon'/>My Orders</li>
            <li className="list-group-item" id="lowerdiv3" onClick={()=>setshowcomponent("wishlist")}><MdFavorite className='icon'/>Wishlist</li>
            <li className="list-group-item" id="lowerdiv6" onClick={Logoutbtn}><LuLogOut className='icon'/>Logout</li>
          </ul>
        </div>
      </div>
      <div className='innerdiv' id="innerdivrightacc">
        {showcomponent === "info" && <Information/>}
        {showcomponent === "orders" && <Orders/>}
        {showcomponent === "wishlist" && <Wishlist/>}
      </div>
    </div>
    </>
}

export default Account;
