import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { Ecommercestore } from "../store/E-commerce-store.jsx";
import { MdLogin } from "react-icons/md";

function Login(){
    const navigate =useNavigate();
    const {Loginuser} = useContext(Ecommercestore);
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handlesublog(e) {
        e.preventDefault();
        const formdata={
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        const result= await Loginuser(formdata);
        if(!result.success){
          alert(result.message);
          return;
        }
        alert(result.message);
        navigate("/e-commerce");
    }


    return<div className="logincon">
    <form onSubmit={handlesublog}>
  <div className="row mb-3">
    <label className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" ref={emailRef} required/>
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-8">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" ref={passwordRef} required/>
    </div>
  </div>
  <button type="submit" className="button"><MdLogin className='icon'/>Login</button>
</form>
    </div>
}

export default Login;