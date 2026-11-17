import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";

function Photo(){
    return<>
    <div className="outerpicdiv">
            <div className="innerpicdiv">
            <img src={Photo3} alt="" className="innerpicbig"/>
        </div>
        <div className="innerpicdiv">
            <img src={Photo4} alt="" className="innerpicbig"/>
        </div>
    </div>
    </>
}

export default Photo;