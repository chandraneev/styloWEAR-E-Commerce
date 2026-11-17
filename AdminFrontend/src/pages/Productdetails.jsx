import { useState, useContext, useEffect } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa"
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function Productdetails(){
  const navigate= useNavigate();
  const{id}=useParams();
  let {productdetais, showdetails, deliverydate, Deleteproduct, setproductid} = useContext(Ecommercestore);
  const[showpic, setshowpic]=useState();

  useEffect(()=>{
      showdetails(id);
    },[id]);

     useEffect(()=>{
      if(productdetais?.images?.length>0){
        setshowpic(productdetais.images[0].url);
      }
    },[productdetais]);
    
    
    return<>
    <Navbar/>
    <div className='outerdiv'>
          <div className='innerdiv' id="innerdivleft">
            <div className='innerdiv1'id="upperdivpics">
              <div className='smallpics'>
                {productdetais?.images?.map((image,index)=>(
                <img key={image.public_id} src={image.url} alt="" className="innerpicsmall" onClick={()=>setshowpic(image.url)}/>
                ))}
              </div>
            </div>
            <div className='innerdiv1' id="lowerdiv">
              <img src={showpic} alt="" className="innerpicbig"/>
            </div>
          </div>
          <div className='innerdiv' id="innerdivrightacc">
            <div class="card-group" id="cards">
  <div class="card" id="carddetails1">
    <div class="card-body" >
      <h5 class="card-title fs-3">{productdetais?.brandname} {productdetais?.productname}</h5>
      <br/>
      <div className='button3'><p class="card-text">{productdetais?.description}</p></div>
      <br/>
      <pre class="card-text fs-6">Category        {productdetais?.category}</pre>
      <pre class="card-text fs-6">Sub Category    {productdetais?.subcategory}</pre>
      <pre class="card-text fs-6">Colour          {productdetais?.colour}</pre>
      <pre class="card-text fs-6">Meterial        {productdetais?.meterial}</pre>
      <pre class="card-text fs-6">Size            <select className="size">
            <option value="">Select Size</option>
            {productdetais?.sizes.map((size,index)=>(
                <option key={index} value={size}>{size}</option>
                ))}
        </select>
      </pre>
      <pre class="card-text fs-6">Price           <FaRupeeSign/> {productdetais?.price}/-</pre>
      <pre class="card-text fs-6">Ratings         <FaStar/> {productdetais?.ratings}</pre>
      <pre class="card-text fs-6">Delivery By     {deliverydate}</pre>
      <br></br>
      <div className="mydetaildiv"><button className="button" onClick={()=>{setproductid(id),navigate("/edit-productdetails")}}><CiEdit className='icon'/>Edit</button>
      <button className="button" id="lowerdiv6" onClick={()=>{Deleteproduct(id),navigate("/admin-home")}}><MdDelete className='icon'/>Remove</button></div>
    </div>
  </div>
</div>
          </div>
    </div>
    </>
}

export default Productdetails;


/*
onClick={()=>deletecart(cart._id)}


<pre class="card-text fs-6">Size            <select className="size" ref={sizeref}>
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
      </pre>
*/