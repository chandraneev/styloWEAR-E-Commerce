import { useState, useContext,useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { GoFileSubmodule } from "react-icons/go";

function Editform(){
  const navigate =useNavigate();
  let {userdata,Updateuser} = useContext(Ecommercestore);
  const firstnameRef = useRef();
      const lastnameRef = useRef();
      const phoneRef = useRef();
      const emailRef = useRef();
      const addressRef = useRef();
      const landmarkRef = useRef();
      const pincodeRef = useRef();
      const citystateRef = useRef();
      const genderRef = useRef();

      async function handleuseredit(e) {
        e.preventDefault();
        const formdata={
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phoneno: phoneRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            landmark: landmarkRef.current.value,
            pincode: pincodeRef.current.value,
            citystate: citystateRef.current.value,
            gender: genderRef.current.value
        };
       const result = await Updateuser(formdata);
       if(!result.success){
        alert(result.message);
        return;
       } 
        alert(result.message);
        navigate("/account");
    }

    return<>
    <div className="regiscon">
        <center>EDIT</center>
    <form className="row g-3" onSubmit={handleuseredit}>
  <div className="col-md-6">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputEmail4" defaultValue={userdata?.firstname} ref={firstnameRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputPassword4" defaultValue={userdata?.lastname} ref={lastnameRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Phone NO.</label>
    <input type="text" className="form-control" id="inputCity" defaultValue={userdata?.phoneno} ref={phoneRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" defaultValue={userdata?.email} ref={emailRef} required/>
  </div>
  <div className="col-10">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress2" defaultValue={userdata?.address} ref={addressRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Landmark</label>
    <input type="text" className="form-control" id="inputCity" defaultValue={userdata?.landmark} ref={landmarkRef} required/>
  </div>
  <div className="col-md-2">
    <label className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip" defaultValue={userdata?.pincode} ref={pincodeRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">City, State</label>
    <input type="text" className="form-control" id="inputCity" defaultValue={userdata?.citystate} ref={citystateRef} required/>
  </div>
  <div className="col-md-2">
    <label className="form-label">Gender</label>
    <input type="text" className="form-control" id="inputZip" defaultValue={userdata?.gender} ref={genderRef} required/>
  </div>
  <div className="col-12">
    <button type="submit" className="button"><GoFileSubmodule className='icon'/>Submit</button>
  </div>
</form>
</div>
    </>
}

export default Editform;