import { Link, useNavigate } from "react-router-dom";
import { BsTicketDetailed } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useState, useRef, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Backtotop from "./Backtotopcom";

function Delivers(){
    let {delivers} = useContext(Ecommercestore);
       const navigate=useNavigate();
    
        return<>
        {delivers.map((item) => (
         <div class="card mb-3" id="carddetails4" key={item._id}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={item.product?.images[0]?.url} class="img-fluid rounded-start" alt="..." id='cartimg'/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-text">{item.product?.brandname} {item.product?.productname}</h4>
                <div className="button3"><pre class="card-title">{item.user?.firstname} {item.user?.lastname}</pre>
                <pre class="card-title">{item.user?.address} {item.user?.pincode} {item.user?.citystate}</pre>
                <pre class="card-title">{item.user?.landmark}</pre>
                <pre class="card-title">{item.user?.phoneno}</pre></div>
                <br/>
              <pre class="card-title fs-7">Order Id        {item._id}</pre>
              <pre class="card-title fs-7">Status          <button className="button3">{item.status}</button></pre>
              <pre class="card-title fs-7">Payment         {item.paymentmode}</pre>
              <pre class="card-title fs-7">Size            {item.size}</pre>
              <pre class="card-title fs-7">Price           <FaRupeeSign/>{item.product?.price}/-</pre>
              <button type="submit" className="button" onClick={()=>{navigate(`/productdetails/${item.product?._id}`)}}><BsTicketDetailed className='icon'/>Details</button>
              </div>
              </div>
            </div>
          </div>
        ))}
        <Backtotop/>
    </>
}

export default Delivers;