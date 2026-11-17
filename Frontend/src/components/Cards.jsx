import { Link, useNavigate } from "react-router-dom";
import { BsTicketDetailed } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Cards({product}){
  const navigate=useNavigate();

    return<>
    <div class="card" id="carddetails1">
      <img src={product.images[0]?.url} class="card-img-top" id="cardphoto" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">{product.brandname} {product.productname}</h5>     
      <div className='button2'><pre class="card-text fs-6">{product.category}</pre></div>
      <br/>
      <div className='homecate'><pre class="card-text fs-6"><FaRupeeSign/> {product.price}/-</pre>
            <pre class="card-text fs-6"><FaStar/> {product.ratings}</pre></div>
        <button className="button" onClick={()=>{navigate(`/productdetails/${product._id}`)}}><BsTicketDetailed className='icon'/>Details</button>
      </div>
    </div>
 </>
}

export default Cards;




