import { useState, useContext, useRef } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { BsTicketDetailed } from "react-icons/bs";
import { FaStar } from "react-icons/fa"
import { FaSearchPlus } from "react-icons/fa";


function Search(){
  const navigate=useNavigate();
  let {searchproduct,Searchproducts} = useContext(Ecommercestore);
  const searchRef = useRef();

  const handlesearch = (e)=>{
    e.preventDefault();
    const search=searchRef.current.value;
    Searchproducts(search);
  }

    return<>
    <div className="navcon1">
        <form className="navsearch2" onSubmit={handlesearch}>
          <input className="search" type="search" placeholder="Search Here" ref={searchRef}/>
          <button className="button" type="submit"><FaSearchPlus />Search</button>
        </form>
        </div>

         <div className="homecardsdiv">
             <div class="row row-cols-1 row-cols-md-5 g-2" id="cards">
              {searchproduct.map((product)=>(
          <div class="col" key={product._id}>
            <div class="card" id="carddetails1">
              <img src={product.images[0]?.url} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">{product.brandname} {product.productname}</h5>
              <div className='button2'><pre class="card-text fs-6">{product.category}</pre></div>
              <br/>
              <div className='homecate'><pre class="card-text fs-6"><FaRupeeSign/> {product.price}/-</pre>
              <pre class="card-text fs-6"><FaStar/> {product.ratings}</pre></div>
              <button className="button" onClick={()=>{navigate(`/productdetails/${product._id}`)}}><BsTicketDetailed className='icon'/>Details</button>
              </div>
            </div>
          </div>
              ))}
          </div>
          </div>
    </>
}

export default Search;

/*



 

    
        
*/