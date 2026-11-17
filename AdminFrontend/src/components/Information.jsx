import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

function Information(){
  let {admindata} = useContext(Ecommercestore);
  
    return<>
    <div className="row g-3">
  <div className="col-md-6" id="information1">
    <label className="form-label" id="infoname1">First Name</label>
    <div className="userinfodiv">{admindata?.firstname}</div>
  </div>
  <div className="col-md-4" id="information2">
    <label className="form-label" id="infoname2">Last Name</label>
    <div className="userinfodiv">{admindata?.lastname}</div>
  </div>
  <div className="col-md-5" id="information3">
    <label className="form-label" id="infoname3">Contact NO.</label>
    <div className="userinfodiv">{admindata?.phoneno}</div>
  </div>
  <div className="col-5" id="information4">
    <label className="form-label" id="infoname4">Email</label>
    <div className="userinfodiv">{admindata?.email}</div>
  </div>
  <div className="col-10" id="information5">
    <label className="form-label" id="infoname5">Company Name</label>
    <div className="userinfodiv">{admindata?.companyname}</div>
  </div>
  <div className="col-md-10" id="information6">
    <label className="form-label" id="infoname6">Address</label>
    <div className="userinfodiv">{admindata?.address}</div>
  </div>
  <div className="col-md-6" id="information8">
    <label className="form-label" id="infoname8">City, State</label>
    <div className="userinfodiv">{admindata?.citystate}</div>
  </div>
  <div className="col-md-4" id="information7">
    <label className="form-label" id="infoname7">Pincode</label>
    <div className="userinfodiv">{admindata?.pincode}</div>
  </div>
  <div className="col-12">
    <button className="button"><Link className="nav-link" to="/edit-admin-info"><FaUserEdit className='icon'/>Edit</Link></button>
  </div>
</div>
    </>
}

export default Information;