import { useState, useContext, useRef } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Backtotop from "../components/Backtotopcom";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

function OtherAccessories(){
  let {otherproduct,setsubcategory,setotherproduct} = useContext(Ecommercestore);

  const pricesortRef=useRef();
     
       const handlepricesort=(e)=>{
         if(e.key==="Enter"){
         const value=pricesortRef.current.value;
         setotherproduct(prev=>{
           return [...prev].sort((a,b)=>{
             if(value === "low"){
               return a.price-b.price;
             }
             if(value === "high"){
               return b.price-a.price;
             }
             return 0;
           });
         });
       }
     };

    return<>
    <Navbar/>
    <div className='outerdiv'>
          <div className='innerdiv' id="innerdivleft">
            <div className='innerdiv1'id="upperdiv">
              <h4 className="categorymsg">OTHER-ACCESSORIES</h4>
              <select className='dropdown' onKeyDown={handlepricesort} ref={pricesortRef}>
                <option value="">Select Price</option>
                <option value="high">Higer to Lower</option>
                <option value="low">Lower to Higher</option>
              </select>
            </div>
            <div className='innerdiv1'>
              <ul className="list-group">
                <li className="list-group-item" id="lowerdiv1" onClick={()=>setsubcategory("Belt")}>Belts</li>
                <li className="list-group-item" id="lowerdiv2" onClick={()=>setsubcategory("Bag")}>Bags</li>
                <li className="list-group-item" id="lowerdiv3" onClick={()=>setsubcategory("Sunglass")}>Sunglasses</li>
                <li className="list-group-item" id="lowerdiv4" onClick={()=>setsubcategory("Perfume")}>Perfumes</li>
              </ul>
            </div>
          </div>
          <div className='innerdiv' id="innerdivright">
            <div class="row row-cols-1 row-cols-md-3 g-3" id="cards">
             {otherproduct.map((product)=>(
              <div class="col" key={product._id}>
              <Cards id="innerdivright" product={product}/>
              </div>
              ))}
            </div>
            <Backtotop/>
          </div>
          </div>
    </>
}

export default OtherAccessories;