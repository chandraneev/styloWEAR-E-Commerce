import { Link, useNavigate } from "react-router-dom";
import { useRef,useContext } from "react";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import Navbar from "../components/Navbar";
import { IoIosSend } from "react-icons/io";

function Contact(){
  const navigate =useNavigate();
      const {Contactus} = useContext(Ecommercestore);
  
      const firstnameRef = useRef();
      const lastnameRef = useRef();
      const contactnoRef = useRef();
      const emailRef = useRef();
      const companynameRef = useRef();
      const citystateRef = useRef();
      const subjectRef = useRef();
      const messageRef = useRef();
  
      async function handlecontact(e) {
          e.preventDefault();
          const formdata={
              firstname: firstnameRef.current.value,
              lastname: lastnameRef.current.value,
              contactno: contactnoRef.current.value,
              email: emailRef.current.value,
              companyname: companynameRef.current.value,
              citystate: citystateRef.current.value,
              subject: subjectRef.current.value,
              message: messageRef.current.value
          };
         const result = await Contactus(formdata);
         if(result.success){
          alert(result.message);
          navigate("/admin-home");
          return;
         } 
        }
    return<>
    <Navbar/>
    <div className="regiscon">
      <center>CONTACT</center>
     <form className="row g-3" onSubmit={handlecontact}>
  <div className="col-md-6">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder="Enter First Name" ref={firstnameRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Last Name" ref={lastnameRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Contact NO.</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Contact No." ref={contactnoRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="Enter Email" ref={emailRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Company Name</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Company Name" ref={companynameRef} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">City & State</label>
    <input type="text" className="form-control" id="inputZip" placeholder="Enter City & State" ref={citystateRef} required/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Subject</label>
    <input type="text" className="form-control" id="inputCity" placeholder="Enter Subject" ref={subjectRef} required/>
  </div>
  <div className="col-8">
    <label className="form-label">Message</label>
    <textarea className="form-control" id="inputCity" placeholder="Enter Message" ref={messageRef} required/>
  </div>
  <div className="col-12">
    <button type="submit" className="button"><IoIosSend className='icon'/>Send</button>
  </div>
</form>
    </div>
    </>
}

export default Contact;