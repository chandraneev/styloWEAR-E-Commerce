import { Link, useNavigate } from "react-router-dom";
import { useRef,useContext } from "react";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { FaRegIdCard } from "react-icons/fa";

function Registration(){
    const navigate =useNavigate();
    const {Registeradmin} = useContext(Ecommercestore);
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const addressRef = useRef();
    const companyRef = useRef();
    const pincodeRef = useRef();
    const citystateRef = useRef();

    async function handlesubreg(e) {
        e.preventDefault();
        const formdata={
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phoneno: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            address: addressRef.current.value,
            companyname: companyRef.current.value,
            pincode: pincodeRef.current.value,
            citystate: citystateRef.current.value,
        };
       const result = await Registeradmin(formdata);
       if(!result.success){
        alert(result.message);
        return;
       } 
        alert(result.message);
        navigate("/admin-login");
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
  <div className="col-md-8">
    <label className="form-label">Contact NO.</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Contact No." ref={phoneRef} required/>
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
    <label className="form-label">Company Name</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Company Name" ref={companyRef} required/>
  </div>
  <div className="col-md-8">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" id="inputCity"  placeholder="Enter Address" ref={addressRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">City & State</label>
    <input type="text" className="form-control" id="inputCity"  placeholder="Enter City & State" ref={citystateRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip"  placeholder="Enter Pincode" ref={pincodeRef} required/>
  </div>
  <div className="col-12">
    <button type="submit" className="button"><FaRegIdCard className='icon'/>Register</button>
  </div>
   <p>Already have a account?{" "}<Link to="/admin-login">Login</Link></p>
</form>
    </div>
}

export default Registration;