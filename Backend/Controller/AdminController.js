const bycrypt = require("bcrypt");
const Admin = require("../Model/AdminModel");
const {validationResult} = require("express-validator");

exports.Register = async(req, res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {firstname,lastname,phoneno,email,password,address,companyname,pincode,citystate}=req.body;
    const hashpassword=await bycrypt.hash(password,10);
    const user = await Admin.create({firstname,lastname,phoneno,email,password:hashpassword,address,companyname,pincode,citystate});
    res.status(200).json({message:"Registration Successful",user});
}

exports.Login = async(req, res)=>{
    const {email,password}=req.body;
    const admin = await Admin.findOne({email});

    if(!admin){
        return res.status(404).json({message:"Admin Not Found"});
    }
    const ismatch=await bycrypt.compare(password, admin.password);

    if(!ismatch){
        return res.status(401).json({message:"Admin Not Valid"});
    }
    req.session.adminid= admin._id;
    res.status(200).json({message:"Login Successful", admin});
}

exports.Updateadmin = async(req, res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {firstname,lastname,phoneno,email,address,companyname,pincode,citystate}=req.body;
    const admin = await Admin.findByIdAndUpdate(req.session.adminid,{firstname,lastname,phoneno,email,address,companyname,pincode,citystate},{returnDocument:"after"});
    res.status(200).json({message:"Update successful",admin});
}

exports.Logout = async(req, res)=>{
   req.session.destroy((err)=>{
    if(err){
        return res.status(500).json({
            message:"Logout failed",
        });
    }
    res.clearCookie("connect.sid");

    res.status(200).json({
        message:"Logout successful"
    });
   });
};