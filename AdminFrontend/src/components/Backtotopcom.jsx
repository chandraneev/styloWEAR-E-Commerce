import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";

function Backtotop(){
    const handlebacktotop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return<>
    <div className="footer4">
        <IoIosArrowDropupCircle  onClick={handlebacktotop}/>
        <Link className="nav-link" to="#"  onClick={handlebacktotop}>Back To Top</Link>
    </div>
    </>
}

export default Backtotop;