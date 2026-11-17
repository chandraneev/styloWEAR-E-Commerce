import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import Backtotop from "./Backtotopcom";
import { MdDelete } from "react-icons/md";
import { BsTicketDetailed } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

function Wishlist(){
  let {favourites,deletefavourite} = useContext(Ecommercestore);
  const navigate=useNavigate();
  const favouritesquantity = favourites.length;

    return<>
    {favouritesquantity == 0 ? (
      <div className="emptycart">
          <h3 className='welmsg'>Your Favourite list is Empty!</h3>
          <pre className='welmsg'>Added any products to your favourite list.</pre>
      </div>
    ) 
    : 
    (
     <>
     <div class="row row-cols-1 row-cols-md-3 g-3" id="cards">
      {favourites.map((favourite)=>(
      <div class="col" key={favourite._id}>
        <div class="card" id="carddetails1">
          <img src={favourite.product?.images[0]?.url} class="card-img-top" id="cardphoto" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">{favourite.product?.brandname} {favourite.product?.productname}</h5>    
          <div className='button2'><pre class="card-text fs-6">{favourite.product?.category}</pre></div>
          <br/>
          <pre class="card-text fs-6">Size {favourite.size}</pre>
          <pre class="card-text fs-6"><FaRupeeSign/> {favourite.product?.price}/-</pre>
          <div className="mywishlistdiv"><button className="button" onClick={()=>{navigate(`/productdetails/${favourite.product?._id}`)}}><BsTicketDetailed className='icon'/>Details</button>
            <button type="submit" className="button" id="lowerdiv6" onClick={()=>deletefavourite(favourite._id)}><MdDelete className='icon'/>Remove</button>
          </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    <Backtotop/>
    </>
     )}
    
    </>
}

export default Wishlist;



