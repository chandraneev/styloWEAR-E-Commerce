const Admin = require("../Model/AdminModel");

exports.isLogin = async(req, res, next)=>{
    if(!req.session.adminid){
        return res.status(401).json({message:"Please login first"});
    }
    next();
}


exports.checkauth = async(req, res)=>{
        if(!req.session.adminid){
            return res.status(401).json({isloggedin: false,});
        }
        const admin = await Admin.findById(req.session.adminid);
        if(!admin){
            return res.status(401).json({isloggedin: false,});
        }
        res.status(200).json({isloggedin: true, admin});
    };