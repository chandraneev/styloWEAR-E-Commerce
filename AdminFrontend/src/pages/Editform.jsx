import { useState, useContext,useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { GoFileSubmodule } from "react-icons/go";

function Editform(){
  const navigate =useNavigate();
  let {admindata,Updateadmin} = useContext(Ecommercestore);
  const firstnameRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const companyRef = useRef();
    const pincodeRef = useRef();
    const citystateRef = useRef();


      async function handleadminedit(e) {
        e.preventDefault();
        const formdata={
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phoneno: phoneRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            companyname: companyRef.current.value,
            pincode: pincodeRef.current.value,
            citystate: citystateRef.current.value,
        };
       const result = await Updateadmin(formdata);
       if(!result.success){
        alert(result.message);
        return;
       } 
        alert(result.message);
        navigate("/admin-account");
    }

    return<>
    <div className="regiscon">
        <center>EDIT</center>
    <form className="row g-3" onSubmit={handleadminedit}>
  <div className="col-md-6">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder="Enter First Name" defaultValue={admindata?.firstname} ref={firstnameRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Last Name" defaultValue={admindata?.lastname} ref={lastnameRef} required/>
  </div>
  <div className="col-md-8">
    <label className="form-label">Contact NO.</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Contact No." defaultValue={admindata?.phoneno} ref={phoneRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="Enter Email" defaultValue={admindata?.email} ref={emailRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Company Name</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Company Name" defaultValue={admindata?.companyname} ref={companyRef} required/>
  </div>
  <div className="col-md-8">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" id="inputCity"  placeholder="Enter Address" defaultValue={admindata?.address} ref={addressRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">City & State</label>
    <input type="text" className="form-control" id="inputCity"  placeholder="Enter City & State" defaultValue={admindata?.citystate} ref={citystateRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip"  placeholder="Enter Pincode" defaultValue={admindata?.pincode} ref={pincodeRef} required/>
  </div>
  <div className="col-12">
    <button type="submit" className="button"><GoFileSubmodule className='icon'/>Submit</button>
  </div>
</form>
</div>
    </>
}

export default Editform;