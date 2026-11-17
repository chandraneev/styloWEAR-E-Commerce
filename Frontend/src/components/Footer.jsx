import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaCopyright } from "react-icons/fa6";

function Footer(){
    const handlebacktotop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return<>
    <div className="footer1">
        <IoIosArrowDropupCircle onClick={handlebacktotop}/>
        <Link className="nav-link" to="#" onClick={handlebacktotop}>Back To Top</Link>
    </div>
    <div className="footer2">
        <div className="content">
            <h6>Get to Know Us</h6>
            <p>About E-Commerce</p>
            <p>Careers</p>
            <p>Press Releases</p>
        </div>
        <div className="content">
            <h6>Connect with Us</h6>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className="content">
            <h6>Make Money with Us</h6>
            <p>Sell on E-Commerce</p>
            <p>Protect and Build Your Brand</p>
            <p>Supply to E-Commerce</p>
        </div>
        <div className="content">
            <h6>Let Us Help You</h6>
            <p>Returns Centre</p>
            <p>Recalls and Product Safety Alerts</p>
            <p>100% Purchase Protection</p>
        </div>
    </div>
    <div className="footer3">
        <FaCopyright />
        <pre>2026, styloWEAR.com by Chandraneev Dey</pre>
    </div>
    </>
}

export default Footer;