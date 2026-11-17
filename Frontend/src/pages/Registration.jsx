import { Link, useNavigate } from "react-router-dom";
import { useRef,useContext } from "react";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { FaRegIdCard } from "react-icons/fa";

function Registration(){
    const navigate =useNavigate();
    const {Registeruser} = useContext(Ecommercestore);
    
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const addressRef = useRef();
    const landmarkRef = useRef();
    const pincodeRef = useRef();
    const citystateRef = useRef();
    const genderRef = useRef();

    async function handlesubreg(e) {
        e.preventDefault();
        const formdata={
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phoneno: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            address: addressRef.current.value,
            landmark: landmarkRef.current.value,
            pincode: pincodeRef.current.value,
            citystate: citystateRef.current.value,
            gender: genderRef.current.value
        };
       const result = await Registeruser(formdata);
       if(!result.success){
        alert(result.message);
        return;
       } 
        alert(result.message);
        navigate("/login");
    }



    return<div className="regiscon">
    <form className="row g-3" onSubmit={handlesubreg}>
  <div className="col-md-6">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder="Enter First Name" ref={firstnameRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Last Name" ref={lastnameRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Phone NO.</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Phone No." ref={phoneRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="Enter Email" ref={emailRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="inputAddress2" placeholder="Enter Password" ref={passwordRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Address" ref={addressRef} required/>
  </div>
  <div className="col-md-7">
    <label className="form-label">Landmark</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Landmark" ref={landmarkRef} required/>
  </div>
  <div className="col-md-3">
    <label className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip" placeholder="Enter Pincode" ref={pincodeRef} required/>
  </div>
  <div className="col-md-7">
    <label className="form-label">City & State</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter City & State" ref={citystateRef} required/>
  </div>
  <div className="col-md-3">
    <label className="form-label">Gender</label>
    <input type="text" className="form-control" id="inputZip" placeholder="Enter Gender" ref={genderRef} required/>
  </div>
  <div className="col-12">
    <button type="submit" className="button"><FaRegIdCard className='icon'/>Register</button>
  </div>
   <p>Already have a account?{" "}<Link to="/login">Login</Link></p>
</form>
    </div>
}

export default Registration;