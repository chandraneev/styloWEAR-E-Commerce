const User = require("../Model/UserModel");

exports.isLogin = async(req, res, next)=>{
    if(!req.session.userid){
        return res.status(401).json({message:"Please login first"});
    }
    next();
}


exports.checkauth = async(req, res)=>{
        if(!req.session.userid){
            return res.status(401).json({isloggedin: false,});
        }
        const user = await User.findById(req.session.userid);
        if(!user){
            return res.status(401).json({isloggedin: false,});
        }
        res.status(200).json({isloggedin: true, user});
};