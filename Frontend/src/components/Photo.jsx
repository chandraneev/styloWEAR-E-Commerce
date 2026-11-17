import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";

function Photo(){
    return<>
    <div className="outerpicdiv">
        <div className="innerpicdiv">
            <img src={Photo1} alt="" className="innerpicbig"/>
        </div>
        <div className="innerpicdiv">
            <img src={Photo2} alt="" className="innerpicbig"/>
        </div>
    </div>
    </>
}

export default Photo;