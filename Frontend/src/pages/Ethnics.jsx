import { useState, useContext, useRef } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Backtotop from "../components/Backtotopcom";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

function Ethnics(){
  let {ethnicsproduct,setsubcategory,setethnicsproduct} = useContext(Ecommercestore);

  const pricesortRef=useRef();
     
       const handlepricesort=(e)=>{
         if(e.key==="Enter"){
         const value=pricesortRef.current.value;
         setethnicsproduct(prev=>{
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
              <h4 className="categorymsg">ETHNICS</h4>
              <select className='dropdown' onKeyDown={handlepricesort} ref={pricesortRef}>
                <option value="">Select Price</option>
                <option value="high">Higer to Lower</option>
                <option value="low">Lower to Higher</option>
              </select>
            </div>
            <div className='innerdiv1'>
              <ul className="list-group">
                <li className="list-group-item" id="lowerdiv1" onClick={()=>setsubcategory("Panjabi")}>Panjabis</li>
                <li className="list-group-item" id="lowerdiv5" onClick={()=>setsubcategory("Dhoti")}>Dhotis</li>
                <li className="list-group-item" id="lowerdiv2"onClick={()=>setsubcategory("Saree")}>Sarees</li>
                <li className="list-group-item" id="lowerdiv3" onClick={()=>setsubcategory("Blouse")}>Blouses</li>
              </ul>
            </div>
          </div>
          <div className='innerdiv' id="innerdivright">
            <div class="row row-cols-1 row-cols-md-3 g-3" id="cards">
             {ethnicsproduct.map((product)=>(
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

export default Ethnics;