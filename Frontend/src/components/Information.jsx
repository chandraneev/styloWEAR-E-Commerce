import { useState, useContext } from 'react';
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

function Information(){
  let {userdata} = useContext(Ecommercestore);
  
    return<>
    <div className="row g-3">
  <div className="col-md-6" id="information1">
    <label className="form-label" id="infoname1">First Name</label>
    <div className="userinfodiv">{userdata?.firstname}</div>
  </div>
  <div className="col-md-4" id="information2">
    <label className="form-label" id="infoname2">Last Name</label>
    <div className="userinfodiv">{userdata?.lastname}</div>
  </div>
  <div className="col-md-5" id="information3">
    <label className="form-label" id="infoname3">Phone NO.</label>
    <div className="userinfodiv">{userdata?.phoneno}</div>
  </div>
  <div className="col-5" id="information4">
    <label className="form-label" id="infoname4">Email</label>
    <div className="userinfodiv">{userdata?.email}</div>
  </div>
  <div className="col-10" id="information5">
    <label className="form-label" id="infoname5">Address</label>
    <div className="userinfodiv">{userdata?.address}</div>
  </div>
  <div className="col-md-7" id="information6">
    <label className="form-label" id="infoname6">Landmark</label>
    <div className="userinfodiv">{userdata?.landmark}</div>
  </div>
  <div className="col-md-3" id="information7">
    <label className="form-label" id="infoname7">Pincode</label>
    <div className="userinfodiv">{userdata?.pincode}</div>
  </div>
  <div className="col-md-4" id="information8">
    <label className="form-label" id="infoname8">City, State</label>
    <div className="userinfodiv">{userdata?.citystate}</div>
  </div>
  <div className="col-md-2" id="information9">
    <label className="form-label" id="infoname9">Gender</label>
    <div className="userinfodiv">{userdata?.gender}</div>
  </div>
  <div className="col-12">
    <button className="button"><Link className="nav-link" to="/edit-user-info"><FaUserEdit className='icon'/>Edit</Link></button>
  </div>
</div>
    </>
}

export default Information;