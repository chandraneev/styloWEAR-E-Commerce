import { FaRupeeSign } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";

function Payment(){
  const navigate =useNavigate();
    let {userdata,carts,addorder,setcarts} = useContext(Ecommercestore);
    const upiRef = useRef();
    const codRef = useRef();

    async function handleBuyNow() {

    let selectedmode = "";

    if (upiRef.current.checked) {
        selectedmode = upiRef.current.value;
    }
    else if (codRef.current.checked) {
        selectedmode = codRef.current.value;
    }
    else {
        alert("Please select payment mode");
        return;
    }

    const orders = carts.map((cart) => ({
        productId: cart.product?._id,
        adminId: cart.product?.addedby,
        size: cart.size,
        paymentmode: selectedmode
    }));
    const result=await addorder(orders);
    if(result.success){
      alert(result.message);
      navigate("/e-commerce");
      setcarts([]);
      return;
      } 
}

    return<>
    <div className='outerdiv'>
      <div className='innerdiv' id="innerdivleftpayment">
        <div className='innerdiv1'id="upperdiv">
          <div className="shipedit"><h3 className='welmsg'>Shipping Details</h3>
          <button className="shipbutton"><Link className="nav-link" to="/edit-user-info"><FaUserEdit className='icon'/>Edit</Link></button></div>
          <hr className='welmsg'></hr>
            <pre className='welmsg'>{userdata?.firstname} {userdata?.lastname}</pre>
            <pre className='welmsg'>{userdata?.address} {userdata?.citystate}</pre>
            <pre className='welmsg'>{userdata?.landmark}</pre>
            <pre className='welmsg'>{userdata?.email}</pre>
            <pre className='welmsg'>{userdata?.phoneno}</pre>
        </div>
        <div className='innerdiv1'>
          <ul className="list-group">
            <li className="list-group-item" id="lowerdiv7">
              <label><input type="radio" name="paymentmode" value="UPI" className="onlinemode" ref={upiRef}/>UPI / Net Banking</label>
              <label><input type="radio" name="paymentmode" value="Cash On Delivery" className="onlinemode" ref={codRef}/>Cash On Delivery</label>
            </li>
          </ul>
        </div>
        <button id="buydiv2" onClick={handleBuyNow}>Buy Now</button>
      </div>
      <div className='innerdiv' id="innerdivrightpayment">
        <div class="row row-cols-1 row-cols-md-2 g-3" id="cards">
          {carts.map((cart)=>(
          <div class="col" key={cart._id}>
            <div class="card" id="carddetails1">
              <img src={cart.product?.images[0]?.url} class="img-fluid rounded-start" alt="..." />
              <div class="card-body">
              <h5 class="card-title">{cart.product?.brandname} {cart.product?.productname}</h5>
              <br/>
              <div className='button2'><pre class="card-text fs-6">{cart.product?.category}    <b><i>{cart.size}</i></b></pre>
              <pre class="card-text fs-6"><FaRupeeSign/> {cart.product?.price}/-</pre></div>
              </div>
            </div>
          </div>
          ))} 
        </div>
      </div>
    </div>
    </>
}

export default Payment;


