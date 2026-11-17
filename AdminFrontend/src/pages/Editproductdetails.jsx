import { Link, useNavigate } from "react-router-dom";
import { useRef,useContext,useEffect } from "react";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { GoFileSubmodule } from "react-icons/go";

function Editproductdetails(){
    const navigate =useNavigate();
    const {editproduct,productdetais,productid,deliverydate} = useContext(Ecommercestore);
    const productnameRef = useRef();
    const brandnameRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const subcategoryRef = useRef();
    const ratingsRef = useRef();
    const colourRef = useRef();
    const meterialRef = useRef();
    const deliveryRef = useRef();
    const priceRef = useRef();
    const sizeRef=useRef();

    useEffect(()=>{
      if(!sizeRef.current)
        return;
      const checkboxes=sizeRef.current.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach((checkbox)=>{
        checkbox.checked=productdetais?.sizes.includes(checkbox.value);
      });
    },[]);

    async function handleeditproduct(e) {
        e.preventDefault();
        const selectedsizes=Array.from(sizeRef.current.querySelectorAll("input[type='checkbox']:checked")).map(input=>input.value);
        const formdata={
            productname: productnameRef.current.value,
            brandname: brandnameRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            subcategory: subcategoryRef.current.value,
            ratings: ratingsRef.current.value,
            price: priceRef.current.value,
            colour: colourRef.current.value,
            meterial: meterialRef.current.value,
            delivery: deliveryRef.current.value,
            sizes:selectedsizes
        };
       const result = await editproduct(formdata);
       if(!result.success){
        alert(result.message);
        return;
       } 
        alert(result.message);
        navigate(`/productdetails/${productid}`);
    }


    return<>
    <div className="regiscon">
        <center>EDIT</center>
         <form className="row g-3" onSubmit={handleeditproduct}>
      <div className="col-md-6">
        <label className="form-label">Product Name *</label>
        <input type="text" className="form-control" id="inputEmail4" placeholder="Enter Product Name" defaultValue={productdetais?.productname} ref={productnameRef} required/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Brand Name *</label>
        <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Brand Name" defaultValue={productdetais?.brandname} ref={brandnameRef} required/>
      </div>
      <div className="col-md-10">
        <label className="form-label">Description *</label>
        <textarea className="form-control" id="inputCity" placeholder="Enter Description" defaultValue={productdetais?.description} ref={descriptionRef} required/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Category *</label>
        <select className="form-control" id="inputCity" defaultValue={productdetais?.category} ref={categoryRef} required>
                <option value="">Select Category</option>
                <option value="Men Casual">Men Casual</option>
                <option value="Women Casual">Women Casual</option>
                <option value="Kids">Kids</option>
                <option value="Men Ethnic">Men Ethnic</option>
                <option value="Women Ethnic">Women Ethnic</option>
                <option value="Men Other Accessories">Men Other Accessories</option>
                <option value="Women Other Accessories">Women Other Accessories</option>
            </select>
      </div>
      <div className="col-4">
        <label className="form-label">Subcategory *</label>
        <select className="form-control" id="inputAddress" defaultValue={productdetais?.subcategory} ref={subcategoryRef} required>
                <option value="">Select Sub Category</option>
                <option value="Upper Wear">Upper Wear</option>
                <option value="Lower Wear">Lower Wear</option>
                <option value="Inner Wear">Inner Wear</option>
                <option value="Foot Wear">Foot Wear</option>
                <option value="Winter Wear">Winter Wear</option>
                <option value="Panjabi">Panjabi</option>
                <option value="Dhoti">Dhoti</option>
                <option value="Saree">Saree</option>
                <option value="Blouse">Blouse</option>
                <option value="Belt">Belt</option>
                <option value="Bag">Bag</option>
                <option value="Sunglass">Sunglass</option>
                <option value="Perfume">Perfume</option>
            </select>
      </div>
      <div className="col-md-2">
        <label className="form-label">Ratings *</label>
        <select className="form-control" id="inputZip" defaultValue={productdetais?.ratings} ref={ratingsRef} required>
                <option value="">Ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
      </div>
      <div className="col-md-3">
    <label className="form-label">Colour *</label>
    <select className="form-control" id="inputCity" defaultValue={productdetais?.colour} ref={colourRef} required>
            <option value="">Select Colour</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Dark Brown">Dark Brown</option>
            <option value="Light Brown">Light Brown</option>
            <option value="Off White">Off White</option>
            <option value="Purple">Purple</option>
            <option value="Violet">Violet</option>
            <option value="Grey">Grey</option>
            <option value="Mix">Mix</option>
            <option value="NA">NA</option>
        </select>
  </div>
   <div className="col-md-3">
    <label className="form-label">Meterial *</label>
    <select className="form-control" id="inputCity" defaultValue={productdetais?.meterial} ref={meterialRef} required>
            <option value="">Select Meterial</option>
            <option value="Pure Cotton">Pure Cotton</option>
            <option value="Polycotton">Polycotton</option>
            <option value="Rylon">Rylon</option>
            <option value="Denim">Denim</option>
            <option value="Silk">Silk</option>
            <option value="Net">Net</option>
            <option value="Leather">Leather</option>
            <option value="wool">wool</option>
            <option value="NA">NA</option>
        </select>
  </div>
   <div className="col-md-4">
    <label className="form-label">Delivery By *</label>
    <input type="date" className="form-control" id="inputCity" defaultValue={deliverydate} ref={deliveryRef} required/>
  </div>
  <div className="col-md-10" ref={sizeRef} required>
    <label className="form-label">Size *</label>
    <div className="sizediv"><label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="S"/>S</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="M"/>M</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="L" />L</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="XL" />XL</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="XXL" />XXL</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="XXL" />XXL</label></div>
    <br></br>
    <div className="sizediv"><label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="28"/>28</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="30" />30</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="32" />32</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="34" />34</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="36" />36</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="38" />38</label></div>
    <br></br>
    <div className="sizediv"><label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="4"/>4</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="5" />5</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="6" />6</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="7" />7</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="8" />8</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="9" />9</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="10" />10</label></div>
    <br></br>
    <div className="sizediv"><label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="150ml"/>150ml</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="250ml" />250ml</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="350ml"/>350ml</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="500ml"/>500ml</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="650ml"/>650ml</label></div>
    <br></br>
    <div className="sizediv"><label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="Free"/>Free</label>
    <label className="lablediv"><input type="checkbox"  className="inputcheckbox" value="NA"/>NA</label></div>
  </div>
      <div className="col-md-6">
        <label className="form-label">Price *</label>
        <input type="text" className="form-control" id="inputCity" placeholder="Enter Price" defaultValue={productdetais?.price} ref={priceRef} required/>
      </div>
      <div className="col-12">
        <button type="submit" className="button"><GoFileSubmodule className='icon'/>Submit</button>
      </div>
    </form>
        </div>
    </>
}

export default Editproductdetails;