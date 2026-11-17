import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Navbar from "../components/Navbar";
import Cartcards from "../components/Cartcards";
import Backtotop from "../components/Backtotopcom";
import { Link, useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

function Cart(){
let {carts} = useContext(Ecommercestore);

const cartquantity = carts.length;
const subtotal = carts.reduce((total,cart)=> total+cart.product?.price,0);
const shippingfee=15;
const platformfee=7;
const discount=5;
const finaltotal=subtotal+shippingfee+platformfee-discount;

    return<>
    <Navbar/>
    {cartquantity == 0 ? (
      <div className="emptycart">
          <h3 className='welmsg'>Your Cart is Empty!</h3>
          <pre className='welmsg'>Added any products to your cart.</pre>
      </div>
    ) 
    : 
    (
    <div className='outerdiv'>
      <div className='innerdiv' id="innerdivleft">
        
        <div className='innerdiv1'>
          <ul className="list-group">
            <li className="list-group-item" id="div1" ><div className="pricediv1">Sub Total</div><div className="pricediv2"><FaRupeeSign/> {subtotal}/-</div></li>
            <li className="list-group-item" id="div2"><div className="pricediv1">Shipping Fee</div><div className="pricediv2">+ {shippingfee}/-</div></li>
            <li className="list-group-item" id="div3"><div className="pricediv1">Platform Fee</div><div className="pricediv2">+ {platformfee}/-</div></li>
            <li className="list-group-item" id="div4"><div className="pricediv1">Discount</div><div className="pricediv2">- {discount}/-</div></li>
            <li className="list-group-item" id="div5"><div className="pricediv1">Total Price</div><div className="pricediv2"><FaRupeeSign/> {finaltotal}/-</div></li>
            <li className="list-group-item" id="buydiv"><Link className="nav-link" to="/payment">Place Order</Link></li>
          </ul>
        </div>
      </div>
      <div className='innerdiv' id="innerdivrightacc">
        {carts.map((cart)=>(
          <div class="card mb-3" id="carddetails4" key={cart._id}>
        <Cartcards cart={cart}/>
        </div>
        ))}
         <Backtotop/>
      </div>
    </div>
    )}  
    </>
}

export default Cart;
