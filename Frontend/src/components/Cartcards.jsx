import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Cartcards({cart}){
  let {deletecart} = useContext(Ecommercestore);

    return<>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={cart.product?.images[0]?.url} class="img-fluid rounded-start" alt="..." id='cartimg'/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{cart.product?.brandname} {cart.product?.productname}</h5>
        <hr/>
      <pre class="card-text fs-6">Category        {cart.product?.category}</pre>
      <pre class="card-text fs-6">Sub Category    {cart.product?.subcategory}</pre>
      <pre class="card-text fs-6">Size            {cart.size}</pre>
      <pre class="card-text fs-6">Price           <FaRupeeSign/> {cart.product?.price}/-</pre>
      <button className="button" id="lowerdiv6" onClick={()=>deletecart(cart._id)}><MdDelete className='icon'/>Remove</button>
      </div>
    </div>
  </div>
    </>
}

export default Cartcards;