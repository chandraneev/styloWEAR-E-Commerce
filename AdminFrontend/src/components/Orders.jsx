import { Link,useNavigate } from "react-router-dom";
import { BsTicketDetailed } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useState, useRef, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Backtotop from "./Backtotopcom";


function Orders(){
  let {orders,UpdateStatus} = useContext(Ecommercestore);
   const navigate=useNavigate();

    return<>
    {orders.map((item) => (
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
          <pre class="card-title fs-7">Status          <i><b>{item.status}</b></i>  <button className="button2" onClick={() => UpdateStatus(item._id, "Accepted")}>Accepted</button> <button className="button2" onClick={() => UpdateStatus(item._id, "Shipped")}>Shipped</button> <button className="button2" onClick={() => UpdateStatus(item._id, "Out for delivery")}>OFD</button> <button className="button2" onClick={() => UpdateStatus(item._id, "Delivered")}>Delivered</button></pre>
          <pre class="card-title fs-7">Payment         {item.paymentmode}</pre>
          <pre class="card-title fs-7">Size            {item.size}</pre>
          <pre class="card-title fs-7">Price           <FaRupeeSign/>{item.product?.price}/-</pre>
          <pre class="card-text fs-7">Delivery By     {item.deliverydate}</pre>
          <button type="submit" className="button" onClick={()=>{navigate(`/productdetails/${item.product?._id}`)}}><BsTicketDetailed className='icon'/>Details</button>
          </div>
          </div>
        </div>
      </div>
    ))}
    <Backtotop/>
    
   
    </>
}

export default Orders;
